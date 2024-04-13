module.exports = {
	port: process.env.SERVER_PORT,
	router: `${__dirname}/../src/routers/web`,
	prefix_API_version: process.env.PREFIX_API_VER,
}