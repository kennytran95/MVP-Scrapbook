const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/scrapbook", { useNewUrlParser: true });

const scrapbookSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  date: String,
  location: String,
  memPhotos: [String],
  foodPhotos: [String],
  song: String,
});

const Scrapbook = mongoose.model("Scrapbook", scrapbookSchema);
