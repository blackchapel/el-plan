import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons'

import BannerComponent from '../components/BannerComponent';
import avatar from './../../assets/avatar.jpg'
import { sliderData } from '../utils/data';
import { windowWidth } from '../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const renderBanner = ({ item, index }) => {
        return <BannerComponent image={item} />;
    };
    const [searchProds, setSearchProds] = React.useState([]);
    const [search, setSearch] = React.useState('')

    const getProducts = async (s) => {
        if(s.length < 1) {setSearchProds([]);return;}
        let token = await AsyncStorage.getItem('token');
        try{
            const response = await axios.get(`https://el-plan-production.up.railway.app/api/product/noob/search?search=${s}`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            setSearchProds(response.data.data.results);
        }
        catch(err){
            console.log(err);
        }
    }
    
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.headerView}>
                <Text style={styles.helloText}>Hello kc!</Text>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={avatar} style={styles.image} />
                </TouchableOpacity>
            </View>

            <View style={styles.search}>
                <Feather
                    name="search"
                    size={20}
                    color={'#6D756E'}
                    style={{ marginRight: 5, paddingTop: 5, }}
                />
                <TextInput placeholder="search" onChangeText={(val)=>{getProducts(val);setSearch(val) }}/>
                
            </View>
            {searchProds.length > 0 ? (
                    <FlatList 
                        data={searchProds}
                        renderItem={({item}) => (
                            <View style={styles.horizontalCard}>
                                <Text>{item.name}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item._id}
                        style={{maxHeight: 100}}
                    />
                ): search.length > 0 && (
                    <View style={styles.notFound}><Text>No Products Found</Text></View>)}
            <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>Our Products</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#6D756E' }}>See all</Text>
                </TouchableOpacity>
            </View>

            <Carousel
                ref={(c) => {
                    this._carousel = c;
                }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 30}
                itemWidth={300}
                loop={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FEEDDC',
        paddingHorizontal: 20,
        paddingTop: 40,
        width: '100%'
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    helloText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#563300'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#563300'
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#6D756E',
        marginVertical: 10,
        padding: 10
    },
    placeholder: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    placeholderText: {
      color: '#563300',
      fontSize: 15,
      fontWeight: 'bold'
    },
    horizontalCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notFound: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default HomeScreen;