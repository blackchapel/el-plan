import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import brandLogo from '../../assets/brand-logo.png';
import { BASE_URL, LOGIN_PATH } from '../utils/config';

const RegisterScreen =  ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [instaId, setInstaId] = useState('');

    const login = async () => {
        try {
            const res = await axios.post("https://el-plan-production.up.railway.app/api/auth/signup", {
                email: email,
                password: password,
                instaId: instaId,
                name: name
            });

            if (
                res.status == 200 &&
                res.data.data.token !== 'undefined' &&
                res.data.data.user !== 'undefined'
            ) {
                await AsyncStorage.setItem(
                    'token',
                    res.data.data.token
                );
                await AsyncStorage.setItem('user', JSON.stringify(res.data.data.user));
            }
            navigation.replace('Login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={{padding:20, justifyContent: "center", alignItems:"center"}}>
            <Image 
                style={styles.image}
                source={brandLogo}
            />
            </View>

            <Text style={styles.loginText}>
                SignUp
            </Text>

            <View style={styles.input}>
                <MaterialIcons
                    name="person"
                    size={22}
                    color={'#AB877D'}
                />
                <TextInput
                    placeholder="Name"
                    enterKeyHint="done"
                    secureTextEntry={true}
                    onChangeText={(value) => setName(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </View>

            <View style={styles.input}>
                <MaterialIcons
                    name="alternate-email"
                    size={22}
                    color={'#AB877D'}
                />
                <TextInput
                    placeholder="Email ID"
                    enterKeyHint="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(value) => setEmail(value)}
                    onSubmitEditing={() => {
                    this.secondTextInput.focus();
                    }}
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </View>

            <View style={styles.input}>
                <MaterialIcons
                    name="vpn-key"
                    size={22}
                    color={'#AB877D'}
                />
                <TextInput
                    placeholder="Password"
                    enterKeyHint="done"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </View>

            <View style={styles.input}>
                <MaterialIcons
                    name="phone-android"
                    size={22}
                    color={'#AB877D'}
                />
                <TextInput
                    placeholder="Insta Handle"
                    enterKeyHint="done"
                    secureTextEntry={true}
                    onChangeText={(value) => setInstaId(value)}
                    ref={(input) => {
                        this.secondTextInput = input;
                    }}
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </View>

            

            <View>
                <TouchableOpacity 
                    style={styles.loginButtonView}
                    onPress={login}
                >
                    <Text style={styles.loginButtonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FEEDDC',
        padding: 20,
        width: '100%'
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        color: '#563300'
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#563300',
        marginBottom: 28
    },
    forgortPasswordView: {
        alignItems: 'flex-end',
        marginBottom: 20
    },
    forgortPasswordText: {
        fontWeight: 'bold',
        color: '#563300'
    },
    loginButtonView: {
        marginVertical: 15,
        marginHorizontal: 8,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEAD84',
        borderRadius: 10
    },
    loginButtonText: {
        color: '#563300',
        fontWeight: 'bold'
    },
    registerButtonView: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'center'
    },
    registerButton: {
        color: '#563300',
        fontWeight: 'bold'
    }
})

export default RegisterScreen;