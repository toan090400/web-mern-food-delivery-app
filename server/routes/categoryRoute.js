var express = require("express");
var router = express.Router();

const categoryController = require("./../controllers/categoryController");

router.get("/", categoryController.All);
router.post("/", categoryController.Create);
router.patch("/:id", categoryController.Update);
router.delete("/:id", categoryController.Delete);

module.exports = router;
