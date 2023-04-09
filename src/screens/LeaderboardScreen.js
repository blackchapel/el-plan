import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
function LeaderboardScreen() {
  const[leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    const getLeaderboard = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://el-plan-production.up.railway.app/api/user/leaderboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        setLeaderboard(response.data.data.users);
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    getLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{marginTop:50, fontWeight:"bold", fontSize:20, borderBottomColor:"#E2C2AA", borderBottomWidth:4}}>Leaderboard</Text>
      <View style={{maxHeight:900, padding:10}}>
      <FlatList 
        data={leaderboard}
        renderItem={({item}) => {
          return (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              marginVertical:5,
              backgroundColor: '#563300',
              borderRadius: 30,
            }}>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}>
              <Text style={{color:"#E2C2AA", marginVertical:5}}>{item.name}</Text>
              <Text style={{color:'#6D756E'}}>Instagram: {item.instaId}</Text>
              </View>
              <View>
              <Text style={{fontWeight:"bold", marginTop:5, color:"#AB877D"}}>Points</Text>
              <Text style={{fontWeight:"bold", marginTop:5, color:"#DCB9A3"}}>{item.points}</Text>
              </View>
            </View>
          )
        }}
        keyExtractor={item => item._id}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEDDC',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
})

export default LeaderboardScreen