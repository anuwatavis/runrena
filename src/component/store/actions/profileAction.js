export const profileUpdate = (data) => {
  console.log(data);
  console.log("nameUpdate");
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(data.authId.userId)
      .update({
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        quote: data.quote,
        profileUrl: data.profileUrl,
      })
      .then(() => {
        console.log("updateNameDone");
      });
  };
};
