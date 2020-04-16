export const getEventAction = (friendId) => {
  let date = new Date();
  let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let dateData = new Date(today);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("events")
      .where("publicDate", ">=", dateData)
      .get()
      .then((querySnapshot) => {
        let events = [];
        querySnapshot.forEach((event) => {
          events.push(event.data());
        });
        dispatch({ type: "GET_EVENT", events });
      });
  };
};
