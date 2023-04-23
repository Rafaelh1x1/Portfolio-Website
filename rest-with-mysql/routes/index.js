const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router
  .route("/")
  .get(controllers.getAllProjects)
  .post(controllers.createProject);
router
  .route("/:id")
  .get(controllers.getProject)
  .put(controllers.updateProject)
  .delete(controllers.deleteProject);
module.exports = router;
