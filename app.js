const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// View engine setup
app.engine(
  "handlebars",
  exphbs({ extname: ".handlebars", defaultLayout: null })
);
app.set("view engine", "handlebars");

// Static folder
app.use("/static", express.static(path.join(__dirname, "static")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new visior request</p>
    <h3>Visitor Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.in",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mashu@dopamineplanet.com", // generated ethereal user
      pass: "3@Dopamineplanet" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Mashu Dopamine" <mashu@dopamineplanet.com>', // sender address
    to: "mashuajmera@gmail.com", // list of receivers
    subject: "New Visitor Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("contact", { msg: "Email has been sent" });
  });
});

app.listen(5000, () => console.log("Server started..."));
