module.exports = {
	app: {
		port: 3000,
		static_folder: `${__dirname}/../src/public`,
		views_folder: `${__dirname}/../src/apps/views`,
		view_engine: `ejs`,
		// resave: false,
		// saveUninitialized: false,
		secret: "my own key",
		cookie: { secure: false },
	},
};