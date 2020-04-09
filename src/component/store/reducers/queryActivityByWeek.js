const initState = {
  activities: [],
};

const queryActivityByWeek = (state = initState, action) => {
  switch (action.type) {
    case "GET_WEEK_ACTIVITY":
      console.log("GET_WEEK_ACTIVITY");
      const newState = {
        activitiesByWeek: action.activities,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default queryActivityByWeek;
