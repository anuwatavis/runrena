export const followerCountAction = (data) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("runrena_friend")
      .doc(data.followerId)
      .collection("friend_followers")
      .doc(data.userId)
      .set({ followed: data.followerState })
      .then(() => {
        firestore
          .collection("users")
          .doc(data.followerId)
          .get()
          .then((querySnapshot) => {
            let followerCount = querySnapshot.data()["followers"];
            if (data.followerState === true) {
              followerCount = followerCount + 1;
            } else {
              followerCount = followerCount - 1;
            }
            firestore.collection("users").doc(data.followerId).update({ followers: followerCount }).then();
          });
      });
  };
};
