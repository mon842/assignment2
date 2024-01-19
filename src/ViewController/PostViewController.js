import PostViewModel from "../VewModel/PostViewModel";

function PostViewController() {
  const {
    userId,
    setUserId,
    currUser ,
    setcurrUser,
    content,
    setContent,
    handlePostSubmit,fetchUser}=PostViewModel();

  return{
    userId,
    setUserId,
    currUser ,
    setcurrUser,
    content,
    setContent,
    handlePostSubmit,
    fetchUser
  }
}

export default PostViewController;
