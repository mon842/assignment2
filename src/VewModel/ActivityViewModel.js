import { useContext, useState } from "react";
import { UserType } from "../../useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";

function ActivityViewModel() {
  const [users, setUsers] = useState([]);
  const { userId, setUserId } = useContext(UserType);

  const fetchUsers = async () => {
    const token = await AsyncStorage.getItem("authToken");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.userId;
    setUserId(userId);

    axios
      .get(`http://10.0.2.2:3000/user/${userId}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return{
    users,
    setUsers,
    fetchUsers
  }
}
export default ActivityViewModel;
