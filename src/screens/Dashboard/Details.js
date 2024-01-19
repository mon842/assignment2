import { StyleSheet, Text, View, Image, Pressable,Alert } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserType } from "../../../useContext";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import OutlineButton from "../../../components/Buttons/OutlineButton";
import BlueRoundButton from "../../../components/Buttons/BlueRoundButton";
import { Color } from "../../../constants";
import ElevatedCard from "../../../components/UI/ElevatedCard";

const Details = ({ route }) => {
  // const isFocused= useIsFocused();
  const [user, setUser] = useState(route.params);
  const navigation = useNavigation()

  // useEffect(() => {
  //   fetchProfile();
  // },[isFocused]);
  //
  // useEffect(() => {
  //
  //   fetchProfile();
  // },[]);
  //
  // const fetchProfile = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://10.0.2.2:3000/profile/${user?._id}`
  //     );
  //     const { user } = response.data;
  //     setUser(user);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };


  const deleteUser = async () => {
    await axios
      .get(`http://10.0.2.2:3000/delete/${user._id}`)
      .then((response) => {
        console.log(response);
        navigation.navigate("home");
      })
      .catch((error) => {
        Alert.alert("Login error");
        console.log("error ", error);
      });
  }

  return (
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
                borderColor: 'black'
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
              }}
            />
            <Text style={{ color: "black", fontSize: 25, marginTop: 10, fontWeight:'400',marginLeft:10 }}>
              {user?.username}
            </Text>
          </View>
          <View style={{justifyContent:'space-between',marginLeft:170,marginTop:40}}>
            <OutlineButton col={'white'} bgColor={'black'} onPress={()=>navigation.navigate('edit',user)}>Edit Profile</OutlineButton>
            <OutlineButton col={'white'} bgColor={'black'} onPress={deleteUser}>delete Profile</OutlineButton>
          </View>
        </View>

      </View>
      <View style={{marginTop:110,width:'90%',marginLeft:25}}>
        <Text style={{color:'black',marginBottom:10}}>@{user?.username}123</Text>
        <ElevatedCard phone={user?.phone} email={user?.email} city={user?.city} state={user?.state} />

      </View>


    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    position:'relative'
  },
  cover:{
    backgroundColor: Color.orange100,
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
});
