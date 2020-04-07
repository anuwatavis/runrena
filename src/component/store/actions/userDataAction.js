export const profileUpdate = (data) => {
  console.log(data);
  console.log("nameUpdate");
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data);
        });
      });
  };
};
