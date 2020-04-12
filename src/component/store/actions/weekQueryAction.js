export const weekQueryAction = (dateTimeAndUserId) => {
  // console.log(dateTimeAndUserId);
  let start = dateTimeAndUserId[0];
  let end = dateTimeAndUserId[1];
  let userId = dateTimeAndUserId[2];
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("activities")
      .where("userId", "==", userId)
      .where("createdAt", ">", start)
      .where("createdAt", "<", end)
      .get()
      .then((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((activity) => {
          activities.push(activity.data());
          //console.log(activities);
        });
        dispatch({ type: "GET_WEEK_ACTIVITY", activities });
      });
  };
};
