const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

const testingEmail = (email) => {
    sgMail.send({
        to: email,
        from: "ja34luv@gmail.com",
        subject: "Testing",
        text: `Testing`,
    });
};

module.exports = {
    testingEmail,
};
