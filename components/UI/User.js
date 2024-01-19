

import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import { useNavigation } from "@react-navigation/native";
import SolidButton from "../Buttons/SolidButton";
import { Color } from "../../constants";


const User = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={{flexDirection:"row"}}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
                }}
              />
          <View style={{marginLeft:20}}>
            <Text style={styles.username}>{item?.username}</Text>
            <Text style={styles.secondaryText}>@{item?.username}123</Text>
          </View>
        </View>
        <View style={{flexDirection:"row",marginTop:8}}>
          <View style={{width:'65%'}}>
            <View style={{flexDirection:"row",marginBottom:4}}>
              <AntDesign style={{marginRight:8}} color={'black'} name={'phone'} size={15} />
              <Text style={styles.secondaryText}>{item?.phone}</Text>
            </View>
            <View style={{flexDirection:"row",marginBottom:4}}>
              <AntDesign style={{marginRight:8}} color={'black'} name={'mail'} size={15} />
              <Text style={styles.secondaryText}>{item?.email}</Text>
            </View>
            <View style={{flexDirection:"row",marginBottom:4}}>
              <Entypo style={{marginRight:8}} color={'black'} name={'location-pin'} size={15} />
              <Text style={styles.secondaryText}>{item?.state},{item?.city}</Text>
            </View>



          </View>

          <View style={{marginRight:10}}>
            <SolidButton col={'white'} bgColor={Color.orange100} onPress={() => navigation.navigate('details', item)}>
              View Details
            </SolidButton>
          </View>

        </View>

        {/*<View style={styles.userContainer}>*/}
        {/*  <View style={styles.userInfo}>*/}
        {/*    <Image*/}
        {/*      style={styles.profileImage}*/}
        {/*      source={{*/}
        {/*        uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <View style={styles.usernameContainer}>*/}
        {/*      <Text style={styles.username}>{item?.username}</Text>*/}
        {/*      <Text style={styles.secondaryText}>@{item?.username}123</Text>*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*  <SolidButton col={'white'} bgColor={Color.orange100} onPress={() => navigation.navigate('details', item)}>*/}
        {/*    View Details*/}
        {/*  </SolidButton>*/}
        {/*</View>*/}

        {/*<View style={styles.phoneContainer}>*/}
        {/*  <Text style={styles.secondaryText}>{item.phone}</Text>*/}
        {/*</View>*/}


      </View>
    </View>
  )
}

export default User;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: '97%',
    marginLeft: 3,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
  },
  cardContent: {
    gap: 10,
    padding: 15,
  },
  userContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userInfo: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  usernameContainer: {
    marginLeft: 12,
  },
  username: {
    fontSize: 30,
    fontWeight: '500',
    marginVertical: 8,
    color: 'black',
  },
  secondaryText: {
    color: 'black',
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
