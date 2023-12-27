const app = require('../apps/app.js');
const config = require("config");

const server = app.listen( port=config.get("app.port"), (req, res)=>{
    console.log(`App still running on port ${port}. No crash yet`);
});



