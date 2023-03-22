const Product = require("../../models/productModel");
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
  const images = await req.files;
  const time = (await (images.length + 5)) * 1000;
  try {
    const imagesArray = [];
    if (images.length > 1) {
      images.forEach(async (item) => {
        const dataImages = await drive.files.create({
          requestBody: {
            name: item.originalname,
            mimeType: "image/jpg",
            parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
            // parents: [folder.data.id],
          },
          media: {
            mimeType: "image/jpg",
            body: fs.createReadStream(item.path),
          },
        });
        const imageId = await dataImages.data.id;
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
        const imagesData = await dataImages.data;
        await imagesArray.push(imagesData);
      });
      setTimeout(async () => {
        req.body.images = await imagesArray;
        const create = await Product.create(req.body);
        res.status(200).json({ message: "Thêm mới thành công !", create });
        // next();
      }, time);
    } else if (images.length === 1) {
      const item = await images[0];
      const image = await drive.files.create({
        requestBody: {
          name: item.originalname,
          mimeType: "image/jpg",
          parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
          // parents: [folder.data.id],
        },
        media: {
          mimeType: "image/jpg",
          body: fs.createReadStream(item.path),
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

      await imagesArray.push(image.data);
      req.body.images = await imagesArray;
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
  const images = await req.files;
  const time = (await (images.length + 5)) * 1000;
  const product = await Product.findById(req.params.id);
  // nếu có ảnh thì xóa đi
  const productImages = product.images;
  if (productImages.length !== 0 && images.length !== 0) {
    productImages.forEach(async (item) => {
      const imageID = await item.id;
      await drive.files.delete({
        fileId: imageID,
      });
    });
  }
  try {
    const imagesArray = [];
    if (images.length > 1) {
      images.forEach(async (item) => {
        const dataImages = await drive.files.create({
          requestBody: {
            name: item.originalname,
            mimeType: "image/jpg",
            parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
            // parents: [folder.data.id],
          },
          media: {
            mimeType: "image/jpg",
            body: fs.createReadStream(item.path),
          },
        });
        const imageId = await dataImages.data.id;
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
        const imagesData = await dataImages.data;
        await imagesArray.push(imagesData);
      });
      setTimeout(async () => {
        req.body.images = await imagesArray;
        const update = await Product.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(200).json({ message: "Cập nhập thành công !", update });
      }, time);
    } else if (images.length === 1) {
      const item = await images[0];
      const image = await drive.files.create({
        requestBody: {
          name: item.originalname,
          mimeType: "image/jpg",
          parents: ["1IGN05j9MZBL687QEMllM0ApTgaZjOONT"],
          // parents: [folder.data.id],
        },
        media: {
          mimeType: "image/jpg",
          body: fs.createReadStream(item.path),
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

      await imagesArray.push(image.data);
      req.body.images = await imagesArray;
      next();
    } else {
      const product = await Product.findById(req.params.id);
      product.category = await req.body.category;
      product.discription = await req.body.discription;
      product.status = await req.body.status;
      product.price = await req.body.price;
      const update = await product.save();
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
    const product = await Product.findById(req.params.id);
    const images = await product.images;
    if (images.length > 0) {
      images.forEach(async (item) => {
        const imageID = await item.id;
        await drive.files.delete({
          fileId: imageID,
        });
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
    const product = await Product.find({ _id: data });
    product.forEach(async (item) => {
      const imagesData = await item.images;
      for (let index = 0; index < imagesData.length; index++) {
        const imagesID = await imagesData[index].id;
        await drive.files.delete({
          fileId: imagesID,
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
    const product = await Product.findOne({ name: nameItem });
    if (product) {
      return res.status(400).json({
        message: "Tên đã tồn tại !",
        product,
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
