const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danno2423@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danno2423@gmail.com',
    subject: 'Sad to see you go.',
    text: `Sorry to see you go, ${name}.`
  });
}

module.exports = {
  sendWelcomeEmail, sendCancelEmail
};



