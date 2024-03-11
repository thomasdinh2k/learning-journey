const path = require("path");

// Calculate the path from the current file to the target 'tmp' directory
const uploadsDir = path.join(__dirname, "../../../src/tmp");

const multer = require("multer");
const upload = multer({ dest: uploadsDir });

module.exports = upload