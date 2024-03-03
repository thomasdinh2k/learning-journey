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

// ==== Thử dùng Section ==== //
const session = require("express-session");
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: "my own key",
		// cookie: { maxAge: 60000 },
	})
);

// Set section
app.get("/set_session", (req, res) => {
	// Set an Object to session
	req.session.User = {
		website,
	};

	req.session.userCredential = {
		_id: "5fa434bfceb043cc721e41d4",
		email: "nguyenvanf@gmail.com",
		password: "123456",
		role: "member",
		full_name: "Nguyễn Văn F",
	};
});

app.post("/test_login", (req, res) => {
	console.log("Hello");
	res.send(200);
});

// Cấu hình router;
const router = require("../routers/web");
app.use(router);

module.exports = { app };

// {
//     _id: new ObjectId('5f8a18ccceec600f67dcb3de'),
//     thumbnail: 'products/OPPO-A3s–16GB-Red.png',
//     description: 'Biết bàn tủ kim hết độc chín đánh thích. Bàn đồng là đã tủ lầu bàn cái bơi bốn. Tủ em khâu mướn nhà. Đồng mua giết đánh mười.\n' +
//       ' \rCon quê biển làm xuồng tôi thì ghét xuồng lầu. Đá nhà núi viết gió xuồng. May ghế bơi lầu gió xanh viết bảy thích tàu. Vẽ con độc hàng vàng thương hương. Đá máy giày may bạn bảy đồng không dép mây.\n' +
//       ' \rMáy xe dép biết độc con phá tô khâu. Mười chìm nón anh mượn chìm là ngọt thuyền biết. Vàng ác xuồng tám đỏ ờ.',
//     price: 22244123,
//     cat_id: new ObjectId('5f8a0b89dd21e25249b62964'),
//     status: 'Máy Mới 100%',
//     featured: false,
//     promotion: 'Dán Màn Hình 4D',
//     warranty: '12 Tháng',
//     accessories: 'Hộp, sách, sạc, cáp, tai nghe',
//     is_stock: false,
//     name: 'OPPO A3s–16GB Red',
//     slug: 'oppo-a3s16gb-red',
//     createdAt: 2020-10-16T22:03:56.943Z,
//     updatedAt: 2020-10-16T22:03:56.943Z,
//     __v: 0,
//     sequentialId: 73
//   },
