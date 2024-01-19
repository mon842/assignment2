import React from "react";
import { TextInput, View } from "react-native";

const Form = () => {
  return (
    <View>
      <TextInput
        placeholder="Email" />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
      />
    </View>
  );
};

export default Form;
