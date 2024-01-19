import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const OutlineButton = ({children, bgColor,col,onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button ,{backgroundColor:bgColor,borderColor:col}]}>
      <Text style={[{color:col}]}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;



const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth:2,
    alignItems:'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
