var express = require("express");
var router = express.Router();

const { All, Create } = require("./../controllers/reviewController");

const { checkLogin } = require("../controllers/authController");

router.get("/", All);
router.post("/create", checkLogin, Create);
// router.patch("/:id", userController.Update);
// router.delete("/:id", userController.Delete);

module.exports = router;
