import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BannerComponent = ({ image }) => {
  return (
    <View style={styles.body}>
      <Image source={image.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 15
  },
  image: {
    height: 160,
    width: 300,
    borderRadius: 10
  }
});

export default BannerComponent;