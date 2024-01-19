import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";
import EditViewModel from "../VewModel/EditViewModel";

function EditViewController({route}) {
  const {
    user,
    setUser,
    handleEdit}=EditViewModel({route});

  const [warnu, setWarnu] = useState(false);
  const [warnph, setWarnph] = useState(false);
  const [warne, setWarnE] = useState(false);
  const [warnps, setWarnps] = useState(false);



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
  const options = ['LinkedIn', 'Friends', 'Job Portal', 'Others'];
  const [suggestedStates, setSuggestedStates] = useState([]);
  const availableStates = ['Gujarat', 'Maharashtra', 'Karnataka'];

  const handleSearch = (text) => {
    setUser(prevDate=>({...prevDate,state:text}))
    const filteredStates = availableStates.filter((state) =>
      state.toLowerCase().includes(text.toLowerCase())
    );

    setSuggestedStates(filteredStates);
  };

  const handleSelectState = (state) => {
    // setSearchText(state);
    setUser(prevDate=>({...prevDate,state:state}))
    setSuggestedStates([]);
  };

  return{
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
  }
}
export default EditViewController;
