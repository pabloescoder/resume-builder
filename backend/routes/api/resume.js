const express = require("express");
const router = express.Router();
const resumeController = require("../../controllers/resumeController");
const verifyJWT = require("../../middleware/verifyJWT");
const isUserVerified = require("../../middleware/isUserVerified");

router
  .route("/")
  .get(verifyJWT, isUserVerified, resumeController.handleFetchSavedResume)
  .post(verifyJWT, isUserVerified, resumeController.handleSaveNewResume)
  .put(verifyJWT, isUserVerified, resumeController.handleModifyResume);

module.exports = router;
