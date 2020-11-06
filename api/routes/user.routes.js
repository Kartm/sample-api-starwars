const authenticateToken = require("../middleware/authenticateToken.js");

module.exports = (app) => {
  const users = require("../controller/user.controller.js");

  var router = require("express").Router();

  router.post("/register", users.register);

  router.post("/login", users.login);

  router.get("/", authenticateToken, users.find);

  router.get("/films", authenticateToken, users.findFilms);

  router.get("/films/:id", authenticateToken, users.findOneFilm);

  router.get("/species", authenticateToken, users.findSpecies);

  router.get("/species/:id", authenticateToken, users.findOneSpecies);

  app.use("/api/user", router);
};
