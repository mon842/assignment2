import React, { useContext, useState ,useEffect} from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {UserType} from "../../../useContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OutlineButton from "../../../components/Buttons/OutlineButton";
import BlueRoundButton from "../../../components/Buttons/BlueRoundButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./PostScreen";
import EditScreen from "./EditScreen";
import { Color } from "../../../constants";
import ElevatedCard from "../../../components/UI/ElevatedCard";
import ProfileViewController from "../../ViewController/ProfileViewController";
import AntDesign from "react-native-vector-icons/AntDesign"

const Stack = createNativeStackNavigator();

function Profile() {

  const {user,setUser,fetchProfile,logout,clearAuthToken}=ProfileViewController();
  const isFocused=useIsFocused();

  useEffect(() => {
    fetchProfile();
  },[isFocused]);

  useEffect(() => {
    fetchProfile();
  },[]);
  const navigation = useNavigation()



  return(
    <View style={styles.container}>
      <View style={styles.coverContainer}>
        <View style={styles.cover}>
        </View>

        <View style={styles.img}>
          <View>
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                resizeMode: "contain",
                borderWidth:4,
                borderColor: Color.gray100
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
              }}
            />
            <Text style={{ color: Color.gray200, fontSize: 25, marginTop: 10, fontWeight:'400',marginLeft:10 }}>
              {user?.username}
            </Text>
          </View>
          <View style={{justifyContent:'space-around',marginLeft:170}}>
            <OutlineButton col={'white'} bgColor={Color.gray200} onPress={()=>navigation.navigate('edit',user)}><AntDesign size={15} name={'edit'} color={'white'}/> Edit Profile</OutlineButton>
          </View>
        </View>

      </View>
      <View style={{marginTop:110,width:'90%',marginLeft:25}}>
        <Text style={{color:'#959596',marginBottom:10}}>@{user?.username}123</Text>


        <ElevatedCard phone={user?.phone} email={user?.email} city={user?.city} state={user?.state} />


        <OutlineButton col={'white'} bgColor={Color.gray200} onPress={logout} ><AntDesign name={'logout'} color={'white'} size={17} style={{marginRight:2,fontWeight:'bold'}} /> Log out</OutlineButton>
      </View>

      <View style={styles.add} >
        <BlueRoundButton onPress={()=>navigation.navigate('add')} />
      </View>

    </View>
  )
}



function ProfileScreen() {

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="user" component={Profile} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="add" component={PostScreen} options={{
          headerShown: false,
        }} />


        <Stack.Screen name="edit" component={EditScreen} options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>


    </>

  );
}

export default ProfileScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    position:'relative'
  },
  cover:{
    backgroundColor:Color.orange100,
    width:'100%',
    height:90
  },
  coverContainer:{
    position:'relative'
  },
  img:{
    position:'absolute',
    top:65,
    left:20,
    flexDirection:'row'
  },
  add:{
    position:'absolute',
    bottom:20,
    right: 10
  }
})
