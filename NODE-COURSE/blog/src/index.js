const express = require("express");
const morgan = require("morgan");

const handlebars = require("express-handlebars");
const { engine, create, ExpressHandlebars } = require("express-handlebars");

const app = express();
const port = 3000;
const path = require("path");

// handlebars - Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Add static images
// app.use("/static", express.static(`${__dirname}/../public/`));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, "public"));


// HTTP Logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/news", (req, res) => {
	res.render("news");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
