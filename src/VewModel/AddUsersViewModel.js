import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AddUsersViewModel() {
  const navigation = useNavigation();
  const [user,setUser]=useState({
    selectedOptions:[]
  });
  const handleRegister = () => {
    axios
      .post("http://10.0.2.2:3000/register", user)
      .then((response) => {
        // console.log(response);
        Alert.alert(
          "insertion successful",
          "you have been inserted successfully"
        );
        setUser();
        navigation.navigate('home');
      })
      .catch((error) => {
        Alert.alert(
          "insertion failed",
          "An error occurred"
        );
        console.log("error", error);
      });
  };

  return{
    user,
    setUser,
    handleRegister
  }
}
export default AddUsersViewModel;
