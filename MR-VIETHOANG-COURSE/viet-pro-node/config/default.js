module.exports = {
	app: {
		port: 3000,
		static_folder: `${__dirname}/../src/public`,
		views_folder: `${__dirname}/../src/apps/views`,
		view_engine: `ejs`,
		tmp: `${__dirname}/../src/tmp/`,
	},

	mail: {
		host: "smtp.gmail.com",
		port: 587,
		secure: false, // Use `true` for port 465, `false` for all other ports
		auth: {
			user: "mantht01288448987@gmail.com",
			pass: "kbup pzfj sgrj gtum",
		},
	},
}