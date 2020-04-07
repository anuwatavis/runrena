export const userDataAction = (friendId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .where("userId", "in", friendId)
      .get()
      .then((querySnapshot) => {
        let users = [];
        querySnapshot.forEach((user) => {
          users.push(user.data());
        });
        dispatch({ type: "GET_USERS_DATA", users });
      });
  };
};
