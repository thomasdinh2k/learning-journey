const express = require("express");
const app = express();
const config = require("config");

app.use(config.get("app.prefixApiVersion"), require(`${__dirname}/../routers/web`));

module.exports = app;
