config = require("config");

// Cấu hình các Module thì viết ở file App
const express = require("express");
const app = express();
config = require("config");

// Config views
app.set("views", config.get("app.views_folder"));
app.set("view engine", config.get("app.view_engine"));


// Include the middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static file from 'public' directory (Cấu hình đường dẫn tĩnh)
app.use("/static", express.static(config.get("app.static_folder")));
// app.use("/static", express.static(`${__dirname}/../public`));

// ==== Thử dùng Section ==== //
const session = require("express-session");
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'my own key',
    cookie: { maxAge: 60000}
}));
// Set section
app.get('/set_session', (req,res) => {
    // Set an Object to session
    req.session.User = {
        website
    }
})



// Cấu hình router;
const router = require("../routers/web");
app.use(router);

module.exports = { app };
