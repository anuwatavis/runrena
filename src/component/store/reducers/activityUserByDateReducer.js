const initState = {
  activities: [],
};
const activityUserByDateReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ACTIVITY_USER_BY_DATE":
      const newState = {
        activitiesUserByDate: action.activities,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default activityUserByDateReducer;
