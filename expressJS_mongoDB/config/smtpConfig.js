const nodeMailer = require('nodemailer');
const { smtp } = require('./secret.json');


let smtpTransporter = nodeMailer.createTransport({
    senderName: smtp.senderName,
    host: smtp.server,
    port: smtp.port,
    secure: true,
    auth: {
        user: smtp.user,
        pass: smtp.password
    }
});

module.exports = smtpTransporter;