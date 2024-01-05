// Cấu hình các Module thì viết ở file App 
const express = require('express');
const app = express();


// Include the middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static file from 'public' directory (Cấu hình đường dẫn tĩnh)
app.use("/static",express.static(`${__dirname}/../public`));


// Cấu hình router;
const router = require('../routers/web');
app.use(router);


module.exports = { app };