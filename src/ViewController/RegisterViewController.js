import {useState} from "react";
import RegisterViewModel from "../VewModel/RegisterViewModel";

function RegisterViewController() {
  const {handleRegister,user,setUser}= RegisterViewModel();

  const [verify, setVerify] = useState(false);

  const [warnu, setWarnu] = useState(false);
  const [warnph, setWarnph] = useState(false);
  const [warne, setWarnE] = useState(false);
  const [warnps, setWarnps] = useState(false);

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
    setUser(prevDate=>({...prevDate,state:text}))

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
    handleSelectState
  }
}
export default RegisterViewController;
