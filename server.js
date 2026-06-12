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
    from: process.env.EMAIL_USER,
    to: "phtillmann@gmail.com",
    subject: "Portfolio Contact Form Submission",
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `
  };

  
  transporter.sendMail(mailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.log("Email error:", err.message);
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