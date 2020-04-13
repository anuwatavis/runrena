const initState = {
  activities: [{ title: 5 }],
};

const querySummaryReducer = (state = initState, action) => {
  switch (action.type) {
    case "QUERY_SUMMARY":
      console.log("QUERY_SUMMARY");
      const newState = {
        summaryActivity: action.activities,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default querySummaryReducer;
