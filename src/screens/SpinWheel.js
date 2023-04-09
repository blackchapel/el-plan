import React from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


function SpinWheel() {
  const [play, setPlay] = React.useState(false)
  const [oneChance, setOneChance] = React.useState(true)

  const handleSubmit = async () => {
    const token = await AsyncStorage.getItem('token')
    try{
      const response = await axios.get('https://el-plan-production.up.railway.app/api/coupon/noob/spin-the-wheel', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = response.data.data.selectedCoupon;
      if(data.code === undefined || data.code === null){
        alert("Oops, you didn't win anything! Try again tomorrow!")
      }else{
        alert(`For Tier ${data.tier}:-\n Code: ${data.code}\n Discount: ${data.name}\nWe look forward to seeing you again!`);
      }
      setOneChance(false)
    }catch(error){
      console.log(error.response.data.message)
    }
  }

  return (
    <>
    <Image source={{uri:'https://media.tenor.com/EMjt-opTKeAAAAAC/spin-wheel-mattel163.gif'}} style={{width:400, height:350}}/>
    <View style={styles.container}>
      <View>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#563300',
      }}>SpinWheel</Text>
      </View>
      <View style={{marginTop:30}}>
        {oneChance ? (<Button title="Test Your Chance!" onPress={handleSubmit} />):(<Button title="Come back tomorrow!" disabled/>)}
      </View>
      <View style={{marginTop:30}}>
        <Text>All rights reserved in interest of the company</Text>
        </View>
    </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEDDC',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:45
  },
})

export default SpinWheel