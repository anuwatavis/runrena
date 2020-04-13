export const queryActivitySummary = (userId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("activities")
      .where("userId", "in", [userId])
      .get()
      .then((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((activity) => {
          activities.push(activity.data());
          //console.log(activity.data());
        });
        dispatch({ type: "QUERY_SUMMARY", activities });
      });
  };
};
