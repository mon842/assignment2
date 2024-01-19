import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

function RegisterViewModel() {
  const navigation=useNavigation();
  const [user,setUser]=useState({
    selectedOptions:[]
  });

  function handleRegister() {
    // console.log(user);
    axios
      .post("http://10.0.2.2:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setUser();
        navigation.navigate('main');
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred during registration"
        );
        console.log("error", error);
      });
  }
  return{
    handleRegister,
    user,
    setUser
  }
}
export default RegisterViewModel;
