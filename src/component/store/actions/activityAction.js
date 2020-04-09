export const createActivity = (activity) => {
  function convert_to_float(timeString) {
    var floatValue = parseFloat(timeString.replace(":", "."));
    return floatValue;
  }
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    const totalTime = convert_to_float(activity.totalTime);
    const averagePace = convert_to_float(activity.averagePace);
    const totalDistance = parseFloat(activity.totalDistance);
    const averageElevation = parseInt(activity.averageElevation);
    const totalCalories = parseInt(activity.totalCalories);
    const averageHr = parseInt(activity.averageHr);
    const averageCadence = parseInt(activity.averageCadence);
    firestore
      .collection("activities")
      .add({
        ...activity,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        userId: userId,
        totalDistance,
        averageElevation,
        totalCalories,
        averageHr,
        averageCadence,
        totalTime,
        averagePace,
        createdAt: new Date(),
      })
      .then(() => {
        firestore
          .collection("users")
          .doc(userId)
          .get()
          .then((querySnapshot) => {
            let activityCount = querySnapshot.data()["activities"] + 1;
            firestore
              .collection("users")
              .doc(userId)
              .update({ activities: activityCount })
              .then(console.log("done activity count"));
            dispatch({ type: "CREATE_ACTIVITY", activity });
          });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};

export const deletePostAction = (activity) => {
  console.log("deletePostAction -> activity", activity);
  return (dispatch, getState, { getFirestore }) => {
    const userId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("activities")
      .doc(activity.id)
      .delete()
      .then(() => {
        firestore
          .collection("users")
          .doc(userId)
          .get()
          .then((querySnapshot) => {
            let activityCount = querySnapshot.data()["activities"] - 1;
            firestore
              .collection("users")
              .doc(userId)
              .update({ activities: activityCount })
              .then(console.log("delete activity count"));
            window.location.reload(false);
          });
      });
  };
};
