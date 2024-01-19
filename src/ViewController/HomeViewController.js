import { useCallback, useContext, useEffect, useState } from "react";
import { UserType } from "../../useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import HomeViewModel from "../VewModel/HomeViewModel";

function HomeViewController() {

  const {posts,setPosts,fetchPosts}=HomeViewModel();

  const { userId, setUserId } = useContext(UserType);

  const fetchUsers = async () => {
    const token = await AsyncStorage.getItem("authToken");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.userId;
    setUserId(userId);
  };

  return{
    posts,
    setPosts,
    fetchPosts,
    userId,
    setUserId,
    fetchUsers
  }
}

export default HomeViewController;
