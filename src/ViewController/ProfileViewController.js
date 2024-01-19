import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import ProfileViewModel from "../VewModel/ProfileViewModel";

function ProfileViewController() {

  const {user,setUser,fetchProfile}=ProfileViewModel();

  const navigation=useNavigation();
  const logout = () => {
    clearAuthToken();
  }
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("Cleared auth token");
    navigation.replace("login")
  }


  return{
    user,
    setUser,
    fetchProfile,
    logout,
    clearAuthToken
  }
}
export default ProfileViewController;
