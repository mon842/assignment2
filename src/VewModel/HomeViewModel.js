import axios from "axios";
import { useState } from "react";

function HomeViewModel() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3000/get-posts");
      setPosts(response.data);
    } catch (error) {
      console.log("error fetching posts", error);
    }
  };

  return{
    posts,
    setPosts,
    fetchPosts
  }
}
export default HomeViewModel;
