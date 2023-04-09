import axios from "axios";
import React from "react";

const EventScreen = () => {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await axios.get('https://el-plan-production.up.railway/api/event/');

                setEvents(res.data.data.events);
            } catch (error) {
                console.error(error);
            }
        }

        getEvents();
    });
    
    return (

    )
}