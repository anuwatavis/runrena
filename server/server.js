const express = require("express");
const fileUpload = require("express-fileupload");
const neatCsv = require("neat-csv");
const fs = require("fs");
const app = express();
var cors = require("cors");
app.use(fileUpload(), cors());

// Upload Endpoint
app.post("/upload", (req, res) => {
  // post upload
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" }); // res status 400 when no file upload
  }

  const file = req.files.file;
  file.mv(`../public/uploads/${file.name}`, err => {
    //move file to public folder
    if (err) {
      console.error(err);
      return res.status(500).send(err); // res status 500 if err when upload
    }
  });
  console.log(file.name);

  fs.readFile(`../public/uploads/${file.name}`, async (err, data) => {
    let lastLap = {};
    if (err) {
      console.error(err);
      return;
    }
    data = await neatCsv(data);
    lastLap = data[data.length - 1];
    console.log(lastLap.Time);

    res.json({
      // send json data  (activity data)
      totalTime: lastLap["Time"],
      totalDistance: lastLap["Distance"],
      averagePace: lastLap["Avg Pace"],
      averageElevation: lastLap["Elev Gain"],
      totalCalories: lastLap["Calories"],
      averageHr: lastLap["Avg HR"],
      averageCadence: lastLap["Avg Run Cadence"]
    });
    fs.unlink(`../public/uploads/${file.name}`, function(err) {
      if (err) throw err;
      console.log("File deleted!");
    });
  });
});

app.get("/api/customers", (req, res) => {
  //demo data for test server
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
