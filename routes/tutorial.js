module.exports = app => {
  const tutorial = require("../controllers/tutorial.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorial.create);

  //Show all Tutorials
  router.get("/", tutorial.findAll);

  app.use('/api/tutorials', router);
};