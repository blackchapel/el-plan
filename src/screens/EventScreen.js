import axios from "axios";
import React from "react";
import EventComponent from "../components/EventComponent";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        <View>
            {events.map((item, index) => (
                <EventComponent key={index} item={item} />
            ))}
        </View>
    )
}

export default EventScreen;