import ActivityViewModel from "../VewModel/ActivityViewModel";

function ActivityViewController() {
  const {
    users,
    setUsers,
    fetchUsers
  }=ActivityViewModel();

  return{
    users,
    setUsers,
    fetchUsers
  }
}

export default ActivityViewController;
