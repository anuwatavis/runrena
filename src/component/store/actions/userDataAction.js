export const profileUpdate = (data) => {
  console.log(data);
  console.log("nameUpdate");
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(data.authId)
      .update({
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        quote: data.quote,
      })
      .then(() => {
        console.log("updateNameDone");
      });
  };
};
