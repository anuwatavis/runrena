const initState = {
  users: [],
};

const queryUsersDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "QUERY_USERS_DATA":
      console.log("QUERY_USERS_DATA");
      const newState = {
        users: action.usersData,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default queryUsersDataReducer;
