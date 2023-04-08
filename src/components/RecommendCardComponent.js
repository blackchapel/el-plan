import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const RecommendCardComponent = (props) => {
    return (
        <SafeAreaView style={styles.body} >
            <View style={styles.cardView} >
                <Image source={props.image} style={styles.image} />

                <View style={styles.productView} >
                    <Text style={styles.productNameText} >{props.productName}</Text>

                    <Text style={styles.productDescriptionText} >{props.productionDescription}</Text>

                    <Text style={styles.productPriceText} >₹ {props.productPrice}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    cardView: {
        flexDirection: 'row',
        borderRadius: 13,
        backgroundColor: '#563300'
    },
    image: {
        height: 150,
        width: 100,
        borderRadius: 13
    },
    productView: {
        marginLeft: 10
    },
    productNameText: {
        fontWeight: 'bold',
        color: '#E2C2AA',
        marginVertical: 5,
        fontSize: 20
    }, 
    productDescriptionText: {
        color: '#E2C2AA',
        marginBottom: 5,
        fontSize: 15
    },
    productPriceText: {
        color: '#E2C2AA',
        marginBottom: 5,
        fontSize: 15
    }
})

export default RecommendCardComponent;