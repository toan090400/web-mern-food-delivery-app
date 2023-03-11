var express = require("express");
var router = express.Router();

const productController = require("./../controllers/productController");

router.get("/", productController.All);
router.post("/", productController.Create);
router.patch("/:id", productController.Update);
router.delete("/:id", productController.Delete);

module.exports = router;
