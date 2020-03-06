const initState = {
  activities: [
    { id: "1", title: "Phapayom Run", distance: "21.00 KM", pace: "5:10 /KM", time: "12m" },
    { id: "2", title: "COVID-19 Run", distance: "5.00 KM", pace: "6:10 /KM", time: "2h 48m" },
    { id: "3", title: "Bangkun Thain Run", distance: "10.00 KM", pace: "7:10 /KM", time: "48m" },
    { id: "4", title: "Phatthalung Run", distance: "10.00 KM", pace: "7:10 /KM", time: "48m" }
  ]
};

const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ACTIVITY":
      console.log(action);
      console.log("CREATE PROJECT");
      const newState = {
        activities: [action.activities, ...state.activities]
      };
      return newState;
    default:
      return state;
  }

  return state; // send state to store
};

export default activityReducer;
