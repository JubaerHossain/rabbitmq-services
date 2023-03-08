const express = require("express");
const bodyParser = require("body-parser");

// start the server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the API!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
});
