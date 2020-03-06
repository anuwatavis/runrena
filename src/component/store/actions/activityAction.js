export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({ Type: "CREATE_ACTIVITY", project });
  };
};
