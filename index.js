const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User management server is running");
});

const users = [
  { id: 1, name: "Sabnoor", email: "sabnoor@gmail.com" },
  { id: 2, name: "Babita", email: "babita@gmail.com" },
  { id: 3, name: "NoorJahan", email: "noorjahan@gmail.com" },
  { id: 4, name: "Popy", email: "popy@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Server hit from client");
  console.log(req.body);
  req.body.id = users.length + 1;
  users.push(req.body);
  console.log(users);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
