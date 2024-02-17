module.exports = {
	app: {
		port: 3000,
		static_folder: `${__dirname}/../src/public`,
		views_folder: `${__dirname}/../src/apps/views`,
		view_engine: `ejs`,
	},
};

// for (let i = 0; i <= 10; i++) {
// 	<h5>Đây là vòng lặp thứ</h5>
// }