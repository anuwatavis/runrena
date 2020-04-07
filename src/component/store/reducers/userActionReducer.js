const initState = {
  activities: [],
};

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      console.log("GET_USERS_DATA");
      const newState = {
        users: action.users,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default userDataReducer;
