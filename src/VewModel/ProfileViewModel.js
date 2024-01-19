import { useContext, useState } from "react";
import { UserType } from "../../useContext";
import axios from "axios";

function ProfileViewModel() {
  const [user, setUser] = useState();
  const { userId, setUserId } = useContext(UserType);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/profile/${userId}`
      );
      const { user } = response.data;
      setUser(user);
    } catch (error) {
      console.log("error", error);
    }
  };

  return{
    user,
    setUser,
    fetchProfile
  }
}
export default ProfileViewModel;
