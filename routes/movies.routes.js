const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/movies", (req, res) => {
  Movies.find()
    .then((data) => {
      const list = data;
      res.render("movies", { list });
    })
    .catch((error) => {
      console.log("movies route", error);
    });
});
router.get("/movies/:id", (req, res) => {
  let movieid = req.params.id;
  Movies.findById(movieid)
    .then((data) => {
      const movie = data;
      res.render("single-movie", { movie });
    })
    .catch((error) => {
      console.log("single movie route", error);
    });
});

router.get("/movies/update/:id", (req, res) => {
  let movieId = req.params.id;
  Movies.findById(movieId)
    .then((data) => {
      const movie = data;
      res.render("updates_/edit", { movie });
    })
    .catch((error) => {
      console.log("single movie route", error);
    });
});
router.post("/movies/update/:id", (req, res) => {
  const movieId = req.params.id;
  const update = req.body;
  Movies.findByIdAndUpdate(movieId, update)
    .then((response) => {
      console.log(response)
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});
module.exports = router;
