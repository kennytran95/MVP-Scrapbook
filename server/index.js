const express = require("express");
const morgan = require("morgan");

const PORT = 2121 || process.env.PORT;

const app = express();
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(morgan("dev"));

app.post("/scrapbook", (req, res) => {
  res.send("Add scrapbooks later!");
});

app.get("/scrapbook", (req, res) => {
  res.send("I love Courtney Tran");
});

app.listen(PORT, () => {
  console.log(`Scrapbook server is up and running on port: ${PORT}`);
});
