// import dependencies

import React from "react";
import { Text, Dimensions, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';


// import components and screens

import Home from "../screens/MainScreen";
import Login from "../screens/Login";
import Register from "../screens/Registration";

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import HomeScreen from "../screens/Dashboard/HomeScreen";
import AddUser from "../screens/Dashboard/AddUsersSceen";
import Activity from "../screens/Dashboard/ActivityScreen";
import ProfileScreen from "../screens/Dashboard/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window")

function BottomTabs() {
  return (
    <View  style={{
      width,
      height,
    }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'white' },
        }}

      >

        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: "home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="adduser"
          component={AddUser}
          options={{
            tabBarLabel: "Adduser",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-add" size={24} color="black" />
              ) : (
                <Ionicons name="person-add-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="users"
          component={Activity}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="users" size={24} color="black" />
              ) : (
                <Feather name="users" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="user" size={24} color="black" />
              ) : (
                <AntDesign name="user" size={24} color="black" />
              ),
          }}
        />


      </Tab.Navigator>
    </View>


  )
}

const AppContainer = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="main" component={Home} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="login" component={Login} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="register" component={Register} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="dash" component={BottomTabs} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default AppContainer;
