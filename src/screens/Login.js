import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import SolidButton from "../../components/Buttons/SolidButton";
import { Color } from "../../constants";
import InputBox from "../../components/InputBox";
import LoginViewController from "../ViewController/LoginViewController";
import AntDesign from "react-native-vector-icons/AntDesign";

const Login = ({navigation}) => {
  const {setUser,warnp,warnu,user,handleLogin,checkLoginStatus,setWarnp,setWarnu} = LoginViewController({navigation});
  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (user?.email?.length>1)
      setWarnu(false);
    if (user?.password?.length>5)
      setWarnp(false);

  }, [user?.email,user?.password]);

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.hometext}>To get started, first enter your email</Text>
        <View style={{alignItems:'center'}}>
          <Image style={{height:250,width:250}} source={{uri:'https://cdn.dribbble.com/users/2230863/screenshots/5077449/media/0a69542a4513112abf22b888493654b5.jpg?resize=768x576&vertical=center'}}
          />
        </View>
        <View style={{marginTop:14}}>
          <InputBox placeholder="email" warn={warnu} value={user?.email} onChangeText={(text)=> setUser(prevData => ({ ...prevData, email: text })) } />
          {warnu && <Text style={{color:'red'}}>username should be at least of length 2</Text> }
        </View>
        <View style={{marginTop:24}}>
          <InputBox secureTextEntry={true} placeholder="Password" warn={warnp} value={user?.password} onChangeText={(text)=> setUser(prevData => ({ ...prevData, password: text })) } />
          {warnp && <Text style={{color:'red'}}>password should be at least of length 6</Text> }
        </View>

        <SolidButton bgColor={Color.orange100} col={'white'} onPress={()=>{ user?.email.length>1 && user?.password.length>5 ? handleLogin() :  user?.email?.length<2?setWarnu(true):setWarnp(true) }  } ><AntDesign name={'login'} color={'white'} size={17} /> login</SolidButton>
        <Pressable
          onPress={() => navigation.navigate('register')}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account? <Text style={{color:Color.orange100}}>Sign up</Text>
          </Text>
        </Pressable>

      </View>

    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal:15
  },
  hometext:{
    fontWeight:"500",
    fontSize: 30
  },
  loginBox:{
    position: "absolute",
    top:20
  },
  button:{
    position: "absolute",
    bottom:10,
    right:10
  },
  fixed:{
    height: 40,
    borderColor: '#b5b3b3',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    color: 'gray',
    borderRadius:8,
    paddingTop:10
  }
});
