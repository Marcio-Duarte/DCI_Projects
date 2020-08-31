const smtpTransporter = require('../../config/smtpConfig');

const sendEmail = (data) => {
    let files = [];
    // It checks the length in bytes
    if (data.files.length > 2) {
        files = JSON.parse(data.files);
    }

    let mailOptions = {
        from: `${smtpTransporter.options.senderName}<${smtpTransporter.options.auth.user}>`,
        to: data.to,
        subject: data.subject,
        text: data.message,
        attachments: files
    };

    smtpTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return false;
        }
    });
    return true;
}

module.exports = { sendEmail };
