const express = require("express");
const app = express();
const config = require("config");

app.use( config.get("app.prefixApiVersion"),require(`${__dirname}/../routers/web`));

// Mình gắn nhiều thứ cho app nên cần export app ra để mỗi khi cái nào cần app thì lấy
module.exports = app;
