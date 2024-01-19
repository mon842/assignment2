import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


function LoginViewModel({navigation}) {
  const [user,setUser]=useState();
  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (token) {
        setTimeout(() => {
          navigation.replace("dash");
        }, 400);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  function handleLogin() {
    console.log(user);
    axios
      .post("http://10.0.2.2:3000/login", user)
      .then((response) => {
        // console.log(response);
        const token = response.data.token;
        console.log(token);
        AsyncStorage.setItem("authToken", token).then(r => navigation.navigate("dash"));
        // navigation.navigate("main")
      })
      .catch((error) => {
        Alert.alert("Login error");
        console.log("error ", error);
      });
  }
  return {
    user,
    setUser,
    handleLogin,
    checkLoginStatus
  }
}
export default LoginViewModel;
