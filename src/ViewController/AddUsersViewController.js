import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";
import AddUsersViewModel from "../VewModel/AddUsersViewModel";

function AddUsersViewController() {
  const {
    user,
    setUser,
    handleRegister}=AddUsersViewModel();

  const [verify, setVerify ]=  useState(false);
  const [warnu,setWarnu]=useState(false);
  const [warnph,setWarnph]=useState(false);
  const [warnps,setWarnps]=useState(false);
  const [warne, setWarnE] = useState(false);

  const options = ['LinkedIn', 'Friends', 'Job Portal', 'Others'];

  const toggleOption = (option) => {
    if (user?.selectedOptions.includes(option)) {

      setUser((prevUser) => ({
        ...prevUser,  selectedOptions: prevUser.selectedOptions.filter((item) => item !== option),
      }));
    } else {

      setUser((prevUser) => ({
        ...prevUser,
        selectedOptions: [...prevUser.selectedOptions, option],
      }));
    }

  };

  const [suggestedStates, setSuggestedStates] = useState([]);

  const availableStates = ['Gujarat', 'Maharashtra', 'Karnataka'];

  const handleSearch = (text) => {
    // setSearchText(text);
    setUser(prevDate=>({...prevDate,state:text}))

    // Filter available states based on the input text
    const filteredStates = availableStates.filter((state) =>
      state.toLowerCase().includes(text.toLowerCase())
    );

    setSuggestedStates(filteredStates);
  };

  const handleSelectState = (state) => {
    setUser(prevDate=>({...prevDate,state:state}))
    setSuggestedStates([]);
  };

  return{
    user,
    setUser,
    handleRegister,
    verify,
    setVerify,
    warnu,
    setWarnu,
    warnph,
    setWarnph,
    warnps,
    setWarnps,
    warne,
    setWarnE,
    options,
    toggleOption,
    suggestedStates,
    setSuggestedStates,
    availableStates,
    handleSearch,
    handleSelectState
  }
}
export default AddUsersViewController;
