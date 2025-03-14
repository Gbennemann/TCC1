import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendConfirmationEmail = async (email, confirmationCode) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Confirmation Code',
    text: `Your confirmation code is: ${confirmationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent');
  } catch (err) {
    console.error('❌ Error sending email:', err);
    throw err;
  }
};