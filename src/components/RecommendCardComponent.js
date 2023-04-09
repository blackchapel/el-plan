import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const RecommendCardComponent = ({item}) => {
    console.log(item);
    return (
        <SafeAreaView style={styles.body} >
            <View style={styles.cardView} >
                <Image src={item.thumbnail} style={styles.image} />

                <View style={styles.productView} >
                    <Text style={styles.productNameText} >{item.name}</Text>
                    {item.description.length > 35 ? (
                        <Text style={styles.productDescriptionText} >{item.description.substring(0, 35)}...</Text>
                    ) : (
                        <Text style={styles.productDescriptionText} >{item.description}</Text>)}

                    {/* <Text style={styles.productDescriptionText} >{item.description}</Text> */}

                    <Text style={styles.productPriceText} >₹ {item.price}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: 10,
    },
    cardView: {
        flexDirection: 'row',
        borderRadius: 13,
        backgroundColor: '#563300',
        padding: 10,
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