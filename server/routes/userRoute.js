var express = require("express");
var router = express.Router();

const { All, Create } = require("./../controllers/userController");
const { checkLogin, checkAdmin } = require("../controllers/authController");
const { CheckCreate, ImageCreate } = require("../controllers/middleware/user");

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

router.get("/", checkLogin, checkAdmin, All);
router.post(
  "/create",
  upload.single("image"),
  CheckCreate,
  ImageCreate,
  Create
);
// router.patch("/:id", userController.Update);
// router.delete("/:id", userController.Delete);

module.exports = router;
