import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";

function EditViewModel({route}) {
  const [user, setUser] = useState(route.params);

  const navigation = useNavigation();

  const handleEdit = () => {
    axios
      .put(`http://10.0.2.2:3000/edit/${user._id}`, user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "edit is successful",
          "you have been edited successfully"
        );
        setUser();
        navigation.navigate('home')
      })
      .catch((error) => {
        Alert.alert(
          "Edit failed",
          "An error occurred "
        );
        console.log("error", error);
      });
  };

  return{
    user,
    setUser,
    handleEdit
  }
}
export default EditViewModel;
