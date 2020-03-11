export const createActivity = activity => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const totalDistance = parseFloat(activity.totalDistance);
    const averageElevation = parseInt(activity.averageElevation);
    const totalCalories = parseInt(activity.totalCalories);
    const averageHr = parseInt(activity.averageHr);
    const averageCadence = parseInt(activity.averageCadence);
    firestore
      .collection("activities")
      .add({
        ...activity,
        totalDistance,
        averageElevation,
        totalCalories,
        averageHr,
        averageCadence,
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
