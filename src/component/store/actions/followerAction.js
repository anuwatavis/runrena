export const followerAction = data => {
  console.log("dataFromFollowerAction", data);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("runrena_friend")
      .doc(data.userId)
      .collection("followers")
      .doc(data.followerId)
      .set({
        followered: data.followerState
      })
      .then(() => {
        console.log("complete follower");
      })
      .catch(err => {});
  };
};
