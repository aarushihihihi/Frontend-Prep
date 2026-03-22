const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    type: {
      filename: { type: String },
      url: { type: String, required: true },
    },
    default: { url: "https://unsplash.com/photos/a-rocky-mountain-with-grass-and-rocks-QlcNcJx9Ny0" },
    set: (val) => {
      // If val is empty string or null, return default object
      if (!val || val === "") return { url: "https://unsplash.com/photos/a-rocky-mountain-with-grass-and-rocks-QlcNcJx9Ny0" };
      // If val is string, convert to object
      if (typeof val === "string") return { url: val };
      // If val is object, leave as-is
      return val;
    },
  },
  price: { type: Number },
  location: { type: String, required: true },
  country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;