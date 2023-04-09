import axios from "axios";
import React from "react";
import { Image, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import img from '../../assets/brand-logo.png'

const EventScreen = () => {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const getEvents = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const res = await axios.get('https://el-plan-production.up.railway.app/api/event/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setEvents(res.data.data.events);
            } catch (error) {
                console.error(error);
            }
        }

        getEvents();
    });
    
    return (
        <View style={{flex:1, justifyContent:"flex-start",alignItems:"center", backgroundColor: "#FEEDDC"}}>
            <Text style={{fontWeight: 'bold', marginTop: 50, fontSize: 20}} >Platinum Exclusive</Text>

            {events.map((item, index) => {
                return(
                
                <View key={index} style={styles.container} > 
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <Image
                                src={item.thumbnail}
                                style={styles.image}
                            />
                        </TouchableOpacity>

                        <View style={styles.details}>
                            <Text style={styles.customerName}>{item.name}</Text>

                            <Text style={styles.loyaltyPoints}>{item.description}</Text>
                        </View>
                    </View>
                    
                </View>
            )})}
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
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
        marginVertical: 15,
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

export default EventScreen;