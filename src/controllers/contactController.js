var nodemailer = require('nodemailer');
var config = require('../../config/config');
var validator = require("email-validator");

var getIndex = function(req, res) {
    res.render('partials/contact.html', {
        title: 'Contact Us'
    });
};  

var submitForm =  function (req, res) {

    console.log('here');
    if(!validateForm(req, res)) {
        return;
    };
    console.log('now here');

    var mailOpts, 
    smtpTrans;

    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "ajroberts10@googlemail.com",
            pass: config.pass 
        }
    });

    mailOpts = {
        from: '', 
        to: 'ajroberts10@googlemail.com',
        subject: 'Website contact form',
        text: 'From: ' + req.body.name + ' (' + req.body.email + ') \n\n'
               + req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
            res.render('partials/contact.html', {
                title: 'Contact Us',
                status: 'danger',
                message: 'Warning'
            });
        }

        res.render('partials/contact.html', {
            title: 'Contact Us',
            message: "Thank you for your message, we'll be in touch shortly",
            status: 'success'
        });
    });
};

var validateForm = function(req, res) {

    //check for spambot
    if(req.body.phone) {
        res.render('partials/contact.html', {
            title: 'Contact Us',
            status: 'danger',
            message: 'Spam detected'
        });
        return false;
    }

    //check all fields are present
    if(!req.body.name || !req.body.email || !req.body.message) {
        res.render('partials/contact.html', {
            title: 'Contact Us',
            status: 'warning',
            message: 'Please ensure all form fields are completed'
        });
        return false;
    }

    //check email is valid
    if(!validator.validate(req.body.email)) {
        res.render('partials/contact.html', {
            title: 'Contact Us',
            status: 'warning',
            message: 'Please provide a valid email address'
        });
        return false;
    }

    return true;
};

module.exports = {
    getIndex: getIndex,
    submitForm: submitForm
}