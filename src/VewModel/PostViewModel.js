import { useContext, useEffect, useState } from "react";
import { UserType } from "../../useContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

function PostViewModel() {
  const { userId, setUserId } = useContext(UserType);
  const [currUser ,setcurrUser]=useState("");
  const [content, setContent] = useState("");
  const handlePostSubmit = () => {
    const postData = {
      userId,
    };

    if (content) {
      postData.content = content;
    }

    axios
      .post("http://10.0.2.2:3000/create-post", postData)
      .then((response) => {
        setContent("");
      })
      .catch((error) => {
        console.log("error creating post", error);
      });
  };
  const fetchUser = async () => {
    const token = await AsyncStorage.getItem("authToken");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.userId;
    setUserId(userId);
    // console.log(userId);

    axios
      .get(`http://10.0.2.2:3000/curr/${userId}`)
      .then((response) => {
        setcurrUser(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };



  return{
    userId,
    setUserId,
    currUser ,
    setcurrUser,
    content,
    setContent,
    handlePostSubmit,
    fetchUser
  }
}

export default PostViewModel;
