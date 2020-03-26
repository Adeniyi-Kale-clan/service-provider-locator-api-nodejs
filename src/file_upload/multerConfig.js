const multer = require('multer');
const DataURI = require('datauri');
const path = require('path');

const dataURI = new DataURI();

// determine where the image is stored before final upload to a CDN
const storage = multer.memoryStorage();

// determine the allowed file types
const fileFilter = (req, file, cb) => {
  const { mimetype } = file;
  if (mimetype === 'image/jpeg'
    || mimetype === 'image/png'
    || mimetype === 'image/gif') {
    cb(null, true);
  } else {
    req.imagesError = {
      name: 'Error',
      message: 'Unsupported file format if not jpg, jpeg, png or gif',
    };
    cb(null, false);
  }
};

// limit image sizes to 1mb
const limits = { fileSize: 1024 * 1024 };

module.exports = {
  dataURI: (image) => dataURI.format(
    path.extname(image.originalname).toString(),
    image.buffer,
  ),
  multipleUpload: multer({
    storage,
    fileFilter,
    limits,
  })
    .array('images', 12),
  singleUpload: multer({
    storage,
    fileFilter,
    limits,
  })
    .single('image'),
};
