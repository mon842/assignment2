import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SolidButton from "../../components/Buttons/SolidButton";
import { Color } from "../../constants";
import AntDesign from "react-native-vector-icons/AntDesign";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hometext}>Join <Text style={{color:Color.orange100}}>Now</Text> </Text>
        <View style={{marginTop:20}}>
          <SolidButton bgColor={Color.orange100} col={'white'} onPress={()=>navigation.navigate('register')}  ><AntDesign name={'right'} color={'white'} size={17}/> Create account</SolidButton>
        </View>
      </View>
      <Pressable style={styles.press} onPress={()=>navigation.navigate('login')}>
        <Text style={{fontSize:20}}>Already have an account? <Text style={{color:Color.orange100}}>Login</Text>  </Text>
      </Pressable>

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal:10
  },
  hometext:{
    color:'black',
    fontWeight:"700",
    fontSize: 42
  },
  press:{
    position: 'absolute',
    bottom: 10,
  }
});
