import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const SolidButton = ({children, bgColor,col,onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button ,{backgroundColor:bgColor}]}>
      <Text style={[{color:col}]}>{children}</Text>
    </Pressable>
  );
};

export default SolidButton;



const styles = StyleSheet.create({
  button: {
    justifyContent:"center",
    alignItems:"center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600'
  },
});
