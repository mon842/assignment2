import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SolidButton from "../../components/Buttons/SolidButton";
import InputBox from "../../components/InputBox";
import { RadioButton, Checkbox } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import { Color, data } from "../../constants";
import RegisterViewController from "../ViewController/RegisterViewController";
import Icon from '../../components/UI/Icon'

const Register = ({navigation}) => {
  const {
    handleRegister,
    user,
    setUser,
    verify,
    setVerify,
    warnu,
    setWarnu,
    warnph,
    setWarnph,
    warne,
    setWarnE,
    warnps,
    setWarnps,
    options,
    toggleOption,
    suggestedStates, setSuggestedStates,
    availableStates,
    handleSearch,
    handleSelectState}=RegisterViewController();
  useEffect(() => {
    if (user?.username?.length > 1)
      setWarnu(false);
    if (user?.phone?.length === 10)
      setWarnph(false);
    if (user?.password?.length > 5)
      setWarnps(false);
    if (user?.email)
      setWarnE(false)

  }, [user?.username, user?.password, user?.phone,user?.email]);

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',marginTop:20}}>
        <Image style={{height:250,width:250}} source={{uri:'https://cdn.dribbble.com/users/2230863/screenshots/5077449/media/0a69542a4513112abf22b888493654b5.jpg?resize=768x576&vertical=center'}}
        />
      </View>
      <View style={{alignItems:'center',marginVertical:15}}>
        <Text style={styles.hometext}><Text style={{color:'black'}}>Create your</Text> account</Text>
      </View>


      <ScrollView style={{width:'100%',paddingHorizontal:25}}>
        {
          !verify?
            (
              <>
                <View style={{marginTop:15}}>
                  <InputBox placeholder="username" warn={warnu}  value={user?.username} onChangeText={(text)=> setUser(prevData => ({ ...prevData, username: text })) } />
                  {warnu && <Text style={{color:'red'}}>username should be at least of length 2</Text> }
                </View>

                <View style={{marginTop:15}}>
                  <InputBox placeholder="email" warn={warne}  value={user?.email} onChangeText={(text)=> setUser(prevData => ({ ...prevData, email: text })) } />
                  {warne && <Text style={{color:'red'}}>enter valid email</Text> }
                </View>

                {/**/}
                <View style={{marginTop:15}}>
                  <InputBox placeholder="phone" value={user?.phone} onChangeText={(text)=> setUser(prevData => ({ ...prevData, phone: text })) } />
                  {warnph && <Text style={{color:'red'}}>Enter valid phone number</Text> }
                </View>
                <View style={{marginTop:15}}>
                  <InputBox secureTextEntry={true} placeholder="password"  value={user?.password} onChangeText={(text)=> setUser(prevData => ({ ...prevData, password: text })) } />
                  {warnps && <Text style={{color:'red'}}>Enter valid password</Text> }
                </View>

                <View style={{marginVertical:20}}>
                  <SolidButton bgColor={Color.orange100} col={'white'} onPress={()=>{ (user?.username.length>1 && user?.phone.length===10 && user?.email) ? setVerify(true) : user?.email ?(user?.username.length<2? setWarnu(true):setWarnph(true)) : setWarnE(true) }} ><AntDesign name={'doubleright'} color={'white'} size={17}/>Next</SolidButton>
                </View>
              </>
            )
            :
            (
              <>
                <View style={{ marginTop: 40 ,marginLeft:20}}>
                  <Text style={styles.label}>Select Gender</Text>
                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1
                  }}
                  >
                    <RadioButton
                      testID="male"
                      value="male"
                      status={user?.gender === 'male' ? 'checked' : 'unchecked'}
                      onPress={() => setUser(prevDate=>({...prevDate,gender:'male'}))}
                      color={Color.orange100}
                    />
                    <Text>male</Text>
                  </View>

                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1
                  }}
                  >
                    <RadioButton
                      value="female"
                      status={user?.gender === 'female' ? 'checked' : 'unchecked'}
                      onPress={() => setUser(prevDate=>({...prevDate,gender:'female'}))}
                      color={Color.orange100}
                    />
                    <Text>female</Text>
                  </View>

                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1
                  }}
                  >
                    <RadioButton
                      value="other"
                      status={user?.gender === 'other' ? 'checked' : 'unchecked'}
                      onPress={() => setUser(prevDate=>({...prevDate,gender:'other'}))}
                      color={Color.orange100}
                    />
                    <Text>other</Text>
                  </View>

                </View>

                {/**/}
                <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
                  <Text style={[ styles.label,{ marginBottom: 10 }]}>How did you hear about this?</Text>

                  {options.map((option) => (
                    <View key={option} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                      <Checkbox.Android
                        status={user?.selectedOptions.includes(option) ? 'checked' : 'unchecked'}
                        onPress={() => toggleOption(option)}
                        color={Color.orange100}
                      />
                      <Text style={{ marginLeft: 8 }}>{option}</Text>
                    </View>
                  ))}
                </View>

                <ScrollView contentContainerStyle={[styles.container,{marginLeft:20}]}>
                  <Text  style={styles.label}>State</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter state"
                    value={user?.state}
                    onChangeText={handleSearch}
                  />

                  {suggestedStates.length > 0 && user?.state.length>0 && (
                    <View style={styles.suggestionsList}>
                      {suggestedStates.map((item) => (
                        <TouchableOpacity key={item} onPress={() => handleSelectState(item)}>
                          <Text style={styles.suggestionItem}>{item}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </ScrollView>

                {/**/}
                <View style={{ marginTop: 35,marginLeft:20 }}>
                  <Text  style={styles.label}>City</Text>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={user?.city}
                    onChange={(item) => setUser(prevDate=>({...prevDate,city:item.value}))}
                    renderLeftIcon={() => (
                      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                  />
                </View>
                <View style={{marginVertical:20}}>
                  <SolidButton bgColor={Color.orange100} col={'white'} onPress={handleRegister} >Sign up</SolidButton>
                </View>
              </>
            )
        }

      </ScrollView>

      <Pressable
        onPress={() => navigation.navigate('login')}
        style={{ marginTop: 10 }}
      >
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          already have an account? <Text style={{color:Color.orange100}}>Sign in</Text>
        </Text>
      </Pressable>

    </View>

  );
}

export default Register;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },

  hometext:{
    color: Color.orange100,
    fontWeight:"500",
    fontSize: 40
  },
  button:{
    position: "absolute",
    bottom:10,
    right:10
  },
  loginBox:{
    position: "absolute",
    top:190
  },
  label:{
    fontSize:17,
    color:Color.gray200
  }
});
