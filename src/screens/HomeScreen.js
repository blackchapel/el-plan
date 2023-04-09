import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Carousel from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";
import RecommendCardComponent from "../components/RecommendCardComponent";
import BannerComponent from "../components/BannerComponent";
import avatar from "./../../assets/anna.png";
import { sliderData } from "../utils/data";
import { windowWidth } from "../utils/dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const renderBanner = ({ item, index }) => {
    return <BannerComponent image={item} />;
  };

  const [searchProds, setSearchProds] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [user, setUser] = React.useState({});
  const [combos, setCombos] = React.useState([]);
  const [recommended, setRecommended] = React.useState([]);

  React.useEffect(() => {
    const getUser = async () => {
      let usr = await AsyncStorage.getItem("user");
      usr = JSON.parse(usr);
      setUser(usr);
    };
    const getCombos = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://el-plan-production.up.railway.app/api/combo/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCombos(response.data.data.combos);
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    const getRecommended = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://el-plan-production.up.railway.app/api/product/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let anyThree = [];
        for (let i = 0; i < 3; i++) {
          anyThree.push(response.data.data.products[i]);
        }
        setRecommended(anyThree);
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    getUser();
    getCombos();
    getRecommended();
  }, []);

  const getProducts = async (s) => {
    if (s.length < 1) {
      setSearchProds([]);
      return;
    }
    let token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(
        `https://el-plan-production.up.railway.app/api/product/noob/search?search=${s}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSearchProds(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.headerView}>
        <Text style={styles.helloText}>Hello {user.name}!</Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={avatar} style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <Feather
          name="search"
          size={20}
          color={"#6D756E"}
          style={{ marginRight: 5, paddingTop: 5 }}
        />
        <TextInput
          placeholder="search"
          onChangeText={(val) => {
            getProducts(val);
            setSearch(val);
          }}
        />
      </View>
      {searchProds.length > 0 ? (
        <FlatList
          data={searchProds}
          renderItem={({ item }) => (
            <View style={styles.horizontalCard}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item._id}
          style={{ maxHeight: 100 }}
        />
      ) : (
        search.length > 0 && (
          <View style={styles.notFound}>
            <Text>No Products Found</Text>
          </View>
        )
      )}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Our Products</Text>
      </View>
      <View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 30}
          itemWidth={300}
          loop={true}
          autoplay={true}
          autoplayDelay={1500}
        />
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Rush for Combos!</Text>
      </View>
      <View style={{ height: 150 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {combos.map((item, index) => (
            <View key={index} style={styles.comboCard}>
              <View style={styles.nameAndPrice}>
                <Text
                  style={{
                    fontSize: 17,
                    color: "#E2C2AA",
                    textDecorationStyle: "dotted",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    fontSize: 17,
                    color: "#E2C2AA",
                  }}
                >
                  Rs. {item.originalPrice}
                </Text>
              </View>
              {/* <View style={{justifyContent:"flex-start", alignItems:"flex-start" ,flexDirection:"column"}}> */}
              <Text
                style={{
                  fontSize: 18,
                  color: "#E2C2AA",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                Offered Price: {item.comboPrice}!
              </Text>
              {/* </View> */}
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#DEAD84", marginBottom: 8 }}>
                  Includes the delicacies:
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {item.products.map((prod, index) => (
                    <Text
                      key={index}
                      style={{ marginHorizontal: 10, color: "#F2EAE2" }}
                    >
                      {prod.name}
                    </Text>
                  ))}
                </ScrollView>
              </View>
              <Text style={{ color: "white" }}>
                Save: Rs. {item.originalPrice - item.comboPrice}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Weekly Specials!</Text>
      </View>
      <View style={{ height: 150 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {recommended.map((item, index) => (
            <RecommendCardComponent key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FEEDDC",
    paddingHorizontal: 20,
    paddingTop: 40,
    width: "100%",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helloText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#563300",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#563300",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#6D756E",
    marginVertical: 10,
    padding: 10,
  },
  placeholder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholderText: {
    color: "#563300",
    fontSize: 20,
    fontWeight: "bold",
  },
  horizontalCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notFound: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  comboCard: {
    backgroundColor: "#563300",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
  },
  nameAndPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  includedItems: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default HomeScreen;
