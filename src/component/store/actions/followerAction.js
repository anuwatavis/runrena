export const followerAction = (data) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("runrena_friend")
      .doc(data.userId)
      .collection("followers")
      .doc(data.followerId)
      .set({
        followered: data.followerState,
      })
      .then(() => {
        firestore
          .collection("users")
          .doc(data.userId)
          .get()
          .then((querySnapshot) => {
            let followerCount = querySnapshot.data()["followers"];
            if (data.followerState === true) {
              followerCount = followerCount + 1;
            } else {
              followerCount = followerCount - 1;
            }
            firestore
              .collection("users")
              .doc(data.userId)
              .update({ followers: followerCount })
              .then(console.log("done"));
          });
        console.log("complete follower");
      })
      .catch((err) => {});
  };
};
