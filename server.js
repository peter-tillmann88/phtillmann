require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://peter-tillmann88.github.io"
  ]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error) => {
  if (error) {
    console.log("SMTP not ready");
  } else {
    console.log("SMTP ready");
  }
});

app.post("/contact", (req, res) => {
  console.log("Contact request received");

  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: "Portfolio Contact Form Submission",
    html: `
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `
  };

  
  transporter.sendMail(mailOptions)
    .then((info) => {
      console.log("Email sent");
      console.log("Accepted by SMTP:", info.response);
      console.log("Message ID:", info.messageId);
    })
    .catch((err) => {
      console.log("Email error:", err.message);
      console.log("SMTP ERROR:", err);
    });

  res.json({
    code: 200,
    status: "Message received"
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});