const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`../public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    console.log(file.name);
    res.json({ fileName: file.name, filePath: `../../../public/uploads/${file.name}` });
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
