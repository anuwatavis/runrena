export const queryUserData = (data) => {
  console.log("queryUserData -> data", data);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        let usersData = [];
        querySnapshot.forEach((user) => {
          usersData.push(user.data());
        });
        dispatch({ type: "QUERY_USERS_DATA", usersData });
      });
  };
};
