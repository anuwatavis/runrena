export const activityStat = (friendId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("activities")
      .where("userId", "in", friendId)
      .get()
      .then((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((activity) => {
          activities.push(activity.data());
        });
        dispatch({ type: "ACTIVITY_STAT", activities });
      });
  };
};

export const activityPost = (friendId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("activities")
      .where("userId", "in", friendId)
      .get()
      .then((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((activity) => {
          let newData = {};
          newData = activity.data();
          newData["activityId"] = activity.id;
          console.log("activityPost -> newData", newData);
          activities.push(newData);
        });

        dispatch({ type: "ACTIVITY_POST", activities });
      });
  };
};
