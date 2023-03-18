const Category = require("../../models/categoryModel");
const fs = require("fs");
const { google } = require("googleapis");
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
const ImageCreate = async (req, res, next) => {
  const image = req.file;
  try {
    if (image) {
      const image = await drive.files.create({
        requestBody: {
          name: req.file.originalname,
          mimeType: "image/jpg",
          parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
          // parents: [folder.data.id],
        },
        media: {
          mimeType: "image/jpg",
          body: fs.createReadStream(req.file.path),
        },
      });
      const imageId = await image.data.id;
      await drive.permissions.create({
        fileId: imageId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      await drive.files.get({
        fileId: imageId,
        fields: "webContentLink, webViewLink",
      });
      req.body.image = await image.data;
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const ImageUpdate = async (req, res, next) => {
  const image = req.file;
  try {
    if (image) {
      // xóa ảnh cũ
      const category = await Category.findById(req.params.id);
      const imageID = await category.image.id;
      if (imageID) {
        await drive.files.delete({
          fileId: imageID,
        });
      }
      // thay ảnh mới
      const image = await drive.files.create({
        requestBody: {
          name: req.file.originalname,
          mimeType: "image/jpg",
          parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
          // parents: [folder.data.id],
        },
        media: {
          mimeType: "image/jpg",
          body: fs.createReadStream(req.file.path),
        },
      });
      const imageId = await image.data.id;
      await drive.permissions.create({
        fileId: imageId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      await drive.files.get({
        fileId: imageId,
        fields: "webContentLink, webViewLink",
      });
      req.body.image = await image.data;
      next();
    } else {
      const category = await Category.findById(req.params.id);
      category.discription = await req.body.discription;
      const update = await category.save();
      res.status(200).json({
        message: "Cập nhập thành công !",
        update,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const ImageDelete = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    const imageID = await category.image.id;
    if (imageID) {
      await drive.files.delete({
        fileId: imageID,
      });
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const ImageDeleteMany = async (req, res, next) => {
  try {
    const data = await req.body;
    const category = await Category.find({ _id: data });
    category.forEach((item) => {
      const imageID = item.image.id;
      if (imageID) {
        drive.files.delete({
          fileId: imageID,
        });
      }
    });
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const CheckCreate = async (req, res, next) => {
  const nameItem = await req.body.name;
  try {
    const category = await Category.findOne({ name: nameItem });
    if (category) {
      return res.status(400).json({
        message: "Tên đã tồn tại !",
        category,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = {
  CheckCreate,
  ImageCreate,
  ImageUpdate,
  ImageDelete,
  ImageDeleteMany,
};
