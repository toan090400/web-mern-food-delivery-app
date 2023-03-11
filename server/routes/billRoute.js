var express = require("express");
var router = express.Router();

const billController = require("./../controllers/billController");

router.get("/", billController.All);
router.post("/", billController.Create);
router.patch("/:id", billController.Update);
router.delete("/:id", billController.Delete);

module.exports = router;
