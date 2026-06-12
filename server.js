require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());

app.use(express.json());

//email transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("SMTP connection failed");
  } else {
    console.log("SMTP ready");
  }
});

//contact route 
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "phtillmann@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      code: 200,
      status: "Message sent successfully",
    });

  } catch (err) {
    return res.json({
      code: 500,
      status: "Failed to send message",
    });
  }
});

//server start
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});