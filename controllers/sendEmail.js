
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

//sending emaill with ethereal
const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //nodemailer configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'marlene.legros@ethereal.email',
      pass: 'va4q5BKKtry7aq58Gv',
    },
  });

  //sending email with define details
  let info = await transporter.sendMail({
    from: '"inimfon willie" <iniwillie10@gmail.com>',
    to: 'example@example.com',
    subject: 'Hello',
    html: '<h2>Sending Emails with Node.js</h2>',
  });

  res.json(info);
};

//sending email with sendGrid
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'imelda123@mail.com', // Change to your recipient
    from: 'iniwillie10@gmail.com>', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
