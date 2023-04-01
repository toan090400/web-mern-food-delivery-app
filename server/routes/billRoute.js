var express = require("express");
var router = express.Router();

const { All, One, Create } = require("./../controllers/billController");
const { checkLogin } = require("../controllers/authController");

router.get("/", All);
router.get("/:id", One);
router.post("/create", checkLogin, Create);

module.exports = router;
