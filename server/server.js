const express = require("express");
const fileUpload = require("express-fileupload");
const neatCsv = require("neat-csv");
const fs = require("fs");
const app = express();
app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  let lastLap = {};
  file.mv(`../public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
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
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
