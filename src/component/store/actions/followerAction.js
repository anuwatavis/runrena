export const followerAction = data => {
  console.log("dataFromFollowerAction", data);
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("runrena_friend")
      .doc(data.userId)
      .collection("followers")
      .doc(data.userFollowerId)
      .set({
        followered: data.followed
      })
      .then(() => {
        console.log("complete follower");
        window.location.reload(false);
      })
      .catch(err => {});
  };
};
