import { useState } from "react";
import LoginViewModel from "../VewModel/LoginViewModel";

function LoginViewController({navigation}) {
  const [warnu,setWarnu]=useState(false);
  const [warnp,setWarnp]=useState(false);

  const {user,setUser,handleLogin,checkLoginStatus} = LoginViewModel({navigation});
  return{
    setUser,
    warnp,
    warnu,
    user,
    handleLogin,
    checkLoginStatus,
    setWarnp,
    setWarnu
  }
}
export default LoginViewController;
