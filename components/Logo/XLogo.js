import React from "react";
import { Image, StyleSheet } from "react-native";

function XLogo(props) {
  return (
    <Image
      style={styles.image}
      source={require('../../assets/logo/xtwitter.webp')}
    />
  );
}

export default XLogo;
const styles = StyleSheet.create({
  image:{
    height: 50,
    width: 50
  }
});
