

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { UserType } from "../../../useContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import SolidButton from "../../../components/Buttons/SolidButton";
import { Color } from "../../../constants";
import PostViewController from "../../ViewController/PostViewController";

const PostScreen = () => {
  const {
    userId,
    setUserId,
    currUser ,
    setcurrUser,
    content,
    setContent,
    handlePostSubmit,
    fetchUser}=PostViewController();

  useEffect(() => {
    fetchUser();
  }, []);

  // console.log(currUser);
  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>

        <View style={{width:'20%', justifyContent: 'flex-end',position:'absolute',right:10,top:10}}>
          <SolidButton col={'white'} bgColor={Color.orange100} onPress={handlePostSubmit} >Add</SolidButton>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
            }}
          />

          <Text style={{color:Color.gray200}}>{currUser.username}</Text>
        </View>

        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor={"#959596"}
            placeholder="What's happening?"
            multiline
          />
        </View>

        <View style={{ marginTop: 20 }} />


      </View>
    </View>

  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    position:'relative'
  },
  input:{
    fontSize:20,
    color: Color.gray200
  }
});
