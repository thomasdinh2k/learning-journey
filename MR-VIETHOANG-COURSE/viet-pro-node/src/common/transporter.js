const nodemailer = require("nodemailer")

const config = require("../../config/default")

const transporter = nodemailer.createTransport(config.mail)

module.exports = {
    transporter
} 

