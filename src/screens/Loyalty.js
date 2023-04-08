import React from "react";
import { Text, View, StyleSheet, Image, Box } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Loyalty() {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const getUser = async () => {
      let usr = await AsyncStorage.getItem("user");
      usr = JSON.parse(usr);
      setUser(usr);
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/loyal.jpeg")}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.customerName}>{user.name}</Text>
          <Text style={styles.loyaltyPoints}>{user.points} loyalty points</Text>
          {user.points >= 300 ? (
            <>
            <Image
              style={styles.badge}
              source={require("../../assets/platinum.png")}
            />
            <Text style={{marginTop:10,fontWeight:"bold", color:"#E2C2AA"}}>Platinum Member</Text>
            </>
          ) : user.points >= 100 && user.points < 300 ? (
            <>
            <Image
              style={styles.badge}
              source={require("../../assets/gold.png")}
            />
            <Text style={{marginTop:10, fontWeight:"bold", color:"#E2C2AA"}}>Gold Member</Text>
            </>
          ) : (
            <>
            <Image
              style={styles.badge}
              source={require("../../assets/silver.png")}
            />
            <Text style={{marginTop:10, fontWeight:"bold", color:"#E2C2AA"}}>Silver Member</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#FEEDDC",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 30,
    backgroundColor: "#563300",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 16,
    borderRadius: 10,
  },
  details: {
    flex: 1,
  },
  customerName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FEEDDC",
  },
  loyaltyPoints: {
    fontSize: 16,
    color: "#DEAD84",
  },
  badge: {
    marginTop: 10,
    width: 50,
    height: 50,
    padding: 2,
    resizeMode: "contain",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#AB877D",
    // position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default Loyalty;
