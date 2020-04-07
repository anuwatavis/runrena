export const queryByTime = (dateTimeAndFriendList) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let start = new Date(dateTimeAndFriendList[1]);
    var end = new Date(start);
    end.setDate(end.getDate() + 1);
    firestore
      .collection("activities")
      .where("userId", "in", dateTimeAndFriendList[0])
      .where("createdAt", ">", start)
      .where("createdAt", "<", end)
      .get()
      .then((querySnapshot) => {
        let activities = [];
        querySnapshot.forEach((activity) => {
          activities.push(activity.data());
        });
        dispatch({ type: "GET_ACTIVITY_BY_DAY", activities });
      });
  };
};
