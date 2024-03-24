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
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(__dirname + "./public/"));

// const path = require("path");
// app.use("/static", express.static(path.join(__dirname, "public")));

// the "Shared" Middleware


// ==== Thử dùng Section ==== //
const session = require("express-session");
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: "my own key",
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);
// TODO: Dọn lại cái middleware này, đáng nhẽ nó phải ở file Config
app.use(require("./middlewares/cart"))
app.use(require("./middlewares/shared"));

// Set section
// app.get("/set_session", (req, res) => {
// 	// Set an Object to session
// 	req.session.User = {
// 		website,
// 	};

// 	req.session.userCredential = {
// 		_id: "5fa434bfceb043cc721e41d4",
// 		email: "nguyenvanf@gmail.com",
// 		password: "123456",
// 		role: "member",
// 		full_name: "Nguyễn Văn F",
// 	};
// });

app.post("/test_login", (req, res) => {
	res.send(200);
});

// Cấu hình router;
const router = require("../routers/web");
app.use(router);

module.exports = { app };
