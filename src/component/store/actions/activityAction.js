export const createActivity = activity => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log("Created Activity");
    firestore
      .collection("activities")
      .add({
        ...activity,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_ACTIVITY", activity });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
