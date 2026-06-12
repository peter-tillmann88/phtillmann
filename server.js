require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

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

app.post("/contact", async (req, res) => {
  console.log("Contact request received");

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "phtillmann@gmail.com",
      subject: "Portfolio Contact Form",
      html: `
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    return res.json({
      code: 200,
      status: "Message sent"
    });

  } catch (err) {
    console.log("Email error:", err);

    return res.json({
      code: 500,
      status: "Email failed"
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});