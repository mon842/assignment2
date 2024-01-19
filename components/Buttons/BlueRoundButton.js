import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Color } from "../../constants";

const BlueRoundButton = ({onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.plusSign}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.orange100, // Blue background color
    borderRadius: 50, // Half of the width/height to make it round
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    color: '#fff', // White color for the plus sign
    fontSize: 42,
    fontWeight: "300",
  },
});

export default BlueRoundButton;
