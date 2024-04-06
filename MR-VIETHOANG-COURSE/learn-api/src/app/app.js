const express = require("express");
const app = express();





// These stay at the end
app.use(require("../routers/web"))
module.exports = app;