const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("dashboard");
});

module.exports = router;

//page routes go here
