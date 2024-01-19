import React, { useEffect, useContext, useState, useCallback } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { UserType } from "../../../useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

import { Color } from "../../../constants";
import BlueRoundButton from "../../../components/Buttons/BlueRoundButton";
import HomeViewController from "../../ViewController/HomeViewController";

function HomeScreen({navigation}) {
  const { posts,
    setPosts,
    fetchPosts,
    userId,
    setUserId,
    fetchUsers } =HomeViewController();

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );


  const renderPostItem = ({ item }) => (
    <View style={{alignItems:'center'}}>
      <View style={styles.postContainer}>
        <View  style={{flexDirection:'row'}}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
            }}
          />
          <View style={{flexDirection:'row',marginLeft:7}}>
            <Text style={styles.username}>{item.user.username}</Text>
            <Text style={{color:Color.gray200,marginLeft:7}}>@{item.user.username}123</Text>
          </View>
        </View>

        <View style={{width:'100%',marginLeft:17}}>
          <View>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        </View>

      </View>
    </View>

  );


  return (
    <View style={styles.container}>
      {
        posts?.length===0?
          (
            <>
              <Text>No data found</Text>
            </>
          ):
          (
            <>
              <FlatList
                data={posts}
                keyExtractor={(item) => item._id.toString()}
                renderItem={renderPostItem}
                style={styles.flatlist}
              />
            </>
          )
      }

    </View>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  flatlist:{
    flex:2,
  },
  postContainer: {
    padding: 15,
    borderColor: '#6b6b6b',
    borderTopWidth: 0.8,
    flexDirection: 'column',
    gap: 10,
    marginTop: 10,
    width:'90%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    marginVertical: 10,


  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',

  },
  username: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 4,
    color: Color.gray100
  },
  content:{
    fontSize: 16,
    color: Color.gray200,
  },
  add:{
    position:'absolute',
    bottom:20,
    right: 10
  }
});
