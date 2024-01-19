import React from "react";
import { StyleSheet, View } from "react-native";

const Underline = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Underline;

const styles=StyleSheet.create({
  container:{
    borderBottomColor: 'orange', // Set the color to orange
    borderBottomWidth: 2, // Set the width of the underline
    paddingBottom: 3,
  }
})
