var express = require("express");
var router = express.Router();

const userController = require("./../controllers/userController");

router.get("/", userController.All);
router.post("/", userController.Create);
router.patch("/:id", userController.Update);
router.delete("/:id", userController.Delete);

module.exports = router;
