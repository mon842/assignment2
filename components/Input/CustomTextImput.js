import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from "react-native";

const CustomTextInput = ({label,value,onChangeText}) => {

  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>{label}</Text>
      <TextInput
        style={[styles.input]}
        placeholder={label}
        placeholderTextColor={'gray'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
  },
  labelFocused: {
    color: 'black', // Change the color when focused
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'white', // Initial bottom border color
    paddingHorizontal: 10,
    backgroundColor: 'black',
    color: 'white'
  },
  inputFocused: {
    borderBottomColor: 'white', // Change the bottom border color when focused
  },
});

export default CustomTextInput;
