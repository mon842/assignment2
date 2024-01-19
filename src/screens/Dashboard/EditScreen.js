import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Alert, ScrollView, TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputBox from "../../../components/InputBox";
import SolidButton from "../../../components/Buttons/SolidButton";
import { Color, data } from "../../../constants";
import { Checkbox, RadioButton } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import EditViewController from "../../ViewController/EditViewController";



const EditScreen = ({ route }) => {
  const {
    user,
    setUser,
    handleEdit,
    warnu,
    setWarnu,
    warnph,
    setWarnph,
    warne,
    setWarnE,
    warnps,
    setWarnps,
    toggleOption,
    options,
    suggestedStates,
    setSuggestedStates,
    availableStates,
    handleSearch,
    handleSelectState
  }=EditViewController({route});

  const navigation = useNavigation();


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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white",paddingHorizontal:5 }}>
      <Pressable onPress={()=>handleEdit()}><Text style={{color:'white',fontWeight:'400',fontSize:15}}>Save</Text></Pressable>
      <ScrollView style={{width:'100%',paddingHorizontal:25}}>
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
          <InputBox placeholder="password"  value={user?.password} onChangeText={(text)=> setUser(prevData => ({ ...prevData, password: text })) } />
          {warnps && <Text style={{color:'red'}}>Enter valid password</Text> }
        </View>

        <View style={{ marginTop: 40 }}>
          <Text>Select Gender</Text>
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
          <Text style={{ fontSize: 16, marginBottom: 10 }}>How did you hear about this?</Text>

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
        <ScrollView contentContainerStyle={styles.container}>
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
        <View style={{ marginTop: 35 }}>
          <Text>City</Text>
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
          <SolidButton bgColor={Color.orange100} col={'white'} onPress={handleEdit} >Save Changes</SolidButton>
        </View>

      </ScrollView>

    </SafeAreaView >
  )
}
export default EditScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
