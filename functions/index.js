const express = require("express");
const app = express();
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
app.use(cors({ origin: true }));
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore.document("activities/{activityId}").onCreate(doc => {
  const project = doc.data();
  const notification = {
    content: "Added a new project",
    user: `${project.userFirstName} ${project.userLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  };
  return createNotification(notification);
});

app.get("/customers", (req, res) => {
  //demo data for test server
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

exports.hello = functions.https.onRequest(app);
