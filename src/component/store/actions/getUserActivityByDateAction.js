export const getUserActivityByDateAction = (dateTimeAndUserId) => {
  console.log(dateTimeAndUserId);
  let userId = dateTimeAndUserId[0];
  let from = dateTimeAndUserId[1]["from"];
  let to = dateTimeAndUserId[1]["to"];
  let start = null;
  let end = null;
  let dateStart = null;
  let dateEnd = null;

  if (from instanceof Date) {
    start = from.toLocaleDateString();
    dateStart = new Date(start);
  }
  if (to != null) {
    end = to.toLocaleDateString();
    dateEnd = new Date(end);
  }

  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    if (dateStart && dateEnd) {
      if (dateStart.toLocaleDateString() == dateEnd.toLocaleDateString()) {
        let newDate = new Date(dateStart);
        newDate.setDate(dateStart.getDate() + 1);
        firestore
          .collection("activities")
          .where("userId", "==", userId)
          .where("createdAt", ">", dateStart)
          .where("createdAt", "<", newDate)
          .get()
          .then((querySnapshot) => {
            let activities = [];
            querySnapshot.forEach((activity) => {
              activities.push(activity.data());
            });
            dispatch({ type: "GET_ACTIVITY_USER_BY_DATE", activities });
          });
      } else {
        let newDate = new Date(dateEnd);
        newDate.setDate(newDate.getDate() + 1);
        firestore
          .collection("activities")
          .where("userId", "==", userId)
          .where("createdAt", ">", dateStart)
          .where("createdAt", "<=", newDate)
          .get()
          .then((querySnapshot) => {
            let activities = [];
            querySnapshot.forEach((activity) => {
              activities.push(activity.data());
            });
            dispatch({ type: "GET_ACTIVITY_USER_BY_DATE", activities });
          });
      }
    } else if (dateStart) {
      let newDate = new Date(dateStart);
      newDate.setDate(dateStart.getDate() + 1);
      firestore
        .collection("activities")
        .where("userId", "==", userId)
        .where("createdAt", ">", dateStart)
        .where("createdAt", "<", newDate)
        .get()
        .then((querySnapshot) => {
          let activities = [];
          querySnapshot.forEach((activity) => {
            activities.push(activity.data());
          });
          dispatch({ type: "GET_ACTIVITY_USER_BY_DATE", activities });
        });
    } else {
      console.log("CAN'T_QUERY_BY_DATE");
    }

    // const firestore = getFirestore();
    // firestore
    //   .collection("activities")
    //   .where("userId", "in", dateTimeAndFriendList[0])
    //   .where("createdAt", ">", start)
    //   .where("createdAt", "<", end)
    //   .get()
    //   .then((querySnapshot) => {
    //     let activities = [];
    //     querySnapshot.forEach((activity) => {
    //       activities.push(activity.data());
    //     });
    //     dispatch({ type: "GET_ACTIVITY_BY_DAY", activities });
    //   });
  };
};
