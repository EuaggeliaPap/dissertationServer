'use strict';
var nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
exports.sendEmail = function (emailFrom, password, emailTo, subject, text) {
    var transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: emailFrom,
            pass: password
        }
    });
    var mailOptions = {
        from: emailFrom,
        to: emailTo,
        subject: subject,
        html: text
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    transporter.close();
};