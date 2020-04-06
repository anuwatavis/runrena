const express = require("express");
const app = express();
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
app.use(cors({ origin: true }));

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

// exports.projectCreated = functions.firestore.document("activities/{activityId}").onCreate(doc => {
//   const project = doc.data();
//   const notification = {
//     content: "Added a new project",
//     user: `${project.userFirstName} ${project.userLastName}`,
//     time: admin.firestore.FieldValue.serverTimestamp()
//   };
//   return createNotification(notification);
// });

app.get("/customers", (req, res) => {
  let data = [];
  let userId = req.query.id;
  admin
    .firestore()
    .collection("activities")
    .where("userId", "==", userId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
      res.json(data);
    });
});

app.get("/userActivity", (req, res) => {
  let data = [];
  let userId = req.query.id;
  admin
    .firestore()
    .collection("users")
    .doc(userId)
    .get()
    .then((doc) => res.json(doc.data()["firstName"]));
});

app.get("/activity", (req, res) => {
  let data = [];
  let userId = req.query.id;
  console.log(userId);
  admin
    .firestore()
    .collection("runrena_friend")
    .doc("9PhDdozZddg8fbqdCkRlun9BY9N2")
    .collection("followers")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
      res.json(data);
    });
});

exports.hello = functions.https.onRequest(app);
