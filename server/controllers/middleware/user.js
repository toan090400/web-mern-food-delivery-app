const User = require("../../models/userModel");
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
  try {
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
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const CheckCreate = async (req, res, next) => {
  const usernameItem = await req.body.username;
  try {
    const user = await User.findOne({ username: usernameItem });
    if (user) {
      return res.status(400).json({
        message: "Username đã tồn tại !",
        user,
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
};
