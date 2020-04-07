const initState = {
  activities: [],
};

const activityByDateReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ACTIVITY_BY_DAY":
      console.log("GET_ACTIVITY_BY_DAY");
      const newState = {
        activitiesByDate: action.activities,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default activityByDateReducer;
