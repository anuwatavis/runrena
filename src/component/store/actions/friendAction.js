export const friendAction = (userId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("runrena_friend")
      .doc(userId)
      .collection("followers")
      .get()
      .then((querySnapshot) => {
        let friend = [userId];
        querySnapshot.forEach((user) => {
          if (user.data().followered === true) {
            friend.push(user.id);
          }
        });
        dispatch({ type: "RUNRENA_FRIEND", friend });
      });
  };
};
