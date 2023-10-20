const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => {
  Movies.find()
    .then((data) => {
      const movies = data;
      res.render("index", { movies });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
