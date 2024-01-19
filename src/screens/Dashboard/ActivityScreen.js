import {
  StyleSheet,
  Text,
  View,
  ScrollView, Button,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { UserType } from "../../../useContext";
import User from "../../../components/UI/User";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import SolidButton from "../../../components/Buttons/SolidButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import EditScreen from "./EditScreen";
import { Color } from "../../../constants";
import ActivityViewController from "../../ViewController/ActivityViewController";

const Stack = createNativeStackNavigator();

function Activity() {
  return(
    <Stack.Navigator>
      <Stack.Screen name={'activity'} component={ActivityScreen} options={{headerShown:false}} />
      <Stack.Screen name={'details'} component={Details} options={{headerShown:false}}/>
      <Stack.Screen name={'edit'} component={EditScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
const ActivityScreen = () => {
  const {
    users,
    setUsers,
    fetchUsers
  }=ActivityViewController();

  const isFocused=useIsFocused();

  const navigation = useNavigation();

  useEffect(() => {
    fetchUsers();
  },[isFocused]);

  useEffect(() => {

    fetchUsers();
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop:10}}>
        <View>
          <View style={{ marginTop: 20 ,width:'100%'}}>
            {users?.map((item, index) => (
              <User key={index} item={item} />
            ))}
          </View>
        </View>

      </ScrollView>
      <View style={{position:"absolute",bottom:15,right:20,flexDirection:"row", justifyContent:"space-between"}}>
        <SolidButton col={'white'} bgColor={Color.gray200} onPress={() => navigation.navigate("adduser") }>add users</SolidButton>
      </View>
    </View>

  );
};

export default Activity;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    paddingHorizontal:10
  },
});
