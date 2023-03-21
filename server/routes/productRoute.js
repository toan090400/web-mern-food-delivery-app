var express = require("express");
var router = express.Router();

const {
  All,
  One,
  Create,
  Update,
  Delete,
  DeleteAll,
} = require("./../controllers/productController");

const {
  CheckCreate,
  ImageCreate,
  ImageUpdate,
  ImageDelete,
  ImageDeleteMany,
} = require("../controllers/middleware/product");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.get("/", All);
router.get("/:slug", One);
router.post(
  "/create",
  upload.array("images"),
  CheckCreate,
  ImageCreate,
  Create
);
router.patch("/update/:id", upload.single("image"), ImageUpdate, Update);
router.delete("/delete/:id", ImageDelete, Delete);
router.post("/deleteAll", ImageDeleteMany, DeleteAll);

module.exports = router;
