export const createEventAction = (event) => {
  let title = event.title;
  let description = event.description;
  let imageUrl = event.imageUrl;
  let eventUrl = event.eventUrl;
  let funRun = event.funrunState;
  let miniMarathon = event.miniState;
  let halfMarathon = event.halfState;
  let marathon = event.marathonState;
  let publicDate = new Date(event.public);

  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("events")
      .add({ title, description, imageUrl, eventUrl, funRun, miniMarathon, halfMarathon, marathon, publicDate })
      .then(() => {
        console.log("create event");
        window.location.reload();
      });
  };
};
