// Main file, others will export module to this
const app = require('../apps/app');

const server = app.app.listen(port=3000, (req,res) => {
	console.log(`Port ${port}: Success!`);
});

