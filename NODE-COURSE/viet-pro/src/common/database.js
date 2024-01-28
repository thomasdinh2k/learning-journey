const mongoose = require("mongoose");


module.exports = () => {
    mongoose.connect("mongodb://localhost/vietpro_project_official");
    return mongoose
};
