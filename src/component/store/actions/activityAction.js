export const createActivity = project => {
  return (dispatch, getState) => {
    console.log("createAcivity Action");
    dispatch({ Type: "CREATE_ACTIVITY", project });
  };
};
