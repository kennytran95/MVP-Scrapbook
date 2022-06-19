const express = require("express");
const path = require("path");
const morgan = require("morgan");
const db = require("./database/db.js");

const PORT = 2121 || process.env.PORT;

const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());
app.use(morgan("dev"));

app.post("/scrapbook", (req, res) => {
  const { id, name, date, location, memPhotos, foodPhotos, song } = req.body;
  const scrapbookResult = {
    id,
    name,
    date,
    location,
    memPhotos,
    foodPhotos,
    song,
  };
  db.addMemory(scrapbookResult)
    .then(() => res.status(200).send("Successfully added to database"))
    .catch((err) => console.error(err));
});

app.get("/scrapbook", (req, res) => {
  db.getAllMemories()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Scrapbook server is up and running on port: ${PORT}`);
});
