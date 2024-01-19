
import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const InputBox = ({onChangeText,placeholder,value,warn,secureTextEntry}) => {
  const labelText={
    color:warn?'red':'#4284f5',
  }
  const inputFocused= {
      borderColor: warn?'red':'#4284f5',
  }
  return (
    <View style={styles.conatiner}>
      {value && value.length>0 &&
          <View style={styles.label}>
            <Text style={labelText}>{placeholder}</Text>
          </View>
      }
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[styles.input, value && value.length>0 && inputFocused]}
        placeholder={placeholder}
        placeholderTextColor='gray'
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner:{
    position:"relative"
  },
  label:{
    position: "absolute",
    bottom:40,
    backgroundColor:"white",
    zIndex:1,
    left:8
  },
  input: {
    height: 40,
    borderColor: '#b5b3b3',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    color: 'black',
    borderRadius:8,

  },


});

export default InputBox;
