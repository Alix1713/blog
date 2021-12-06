const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    User.findOne({ where: { email: req.body.email } }).then((userData) => {
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      userData.checkPassword(req.body.password).then((validPassword) => {
        if (!validPassword) {
          res
            .status(400)
            .json({ message: "Incorrect email or password, please try again" });
          return;
        }
      });
    });

    req.session.save(() => {
      console.log("req.session", req.session);
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//signup routes
router.post("/signup", (req, res) => {
  try {
    User.findOne({ where: { email: req.body.email } }).then((userData) => {
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }

      userData.checkPassword(req.body.password).then((validPassword) => {
        if (!validPassword) {
          res
            .status(400)
            .json({ message: "Incorrect email or password, please try again" });
          return;
        }
      });
    });

    req.session.save(() => {
      console.log("req.session", req.session);
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
