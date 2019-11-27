// Message Tokens
const accountSid = "AC101d60fbb98a39816910f7f10d19784f";
const authToken = "310048dc4b17e6c739856a8337efa8cc";

// Importing ibraries
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const client = require("twilio")(accountSid, authToken);

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

// Homepage
app.get("/", (req, res) => {
  res.render("contact");
});

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

// ##################################
// Checkin
app.post("/checkin", (req, res) => {
  const output = `
    <p>You have a new visior request</p>
    <h3>Visitor Details</h3>
    <ul>  
      <li>Name: ${req.body.visiorName}</li>
      <li>Email: ${req.body.visitorEmail}</li>
      <li>Phone: ${req.body.visitorPhone}</li>
    </ul>
  `;

  const textoutput = `New Visitor Request- Name: ${req.body.visiorName}, Phone: ${req.body.vistorPhone}, Email: ${req.body.visitorEmail}`;

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Mashu Dopamine" <mashu@dopamineplanet.com>', // sender address
    to: "mashuajmera@gmail.com", // list of receivers
    subject: "New Visitor Request", // Subject line
    text: textoutput, // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

  // Message
  client.messages
    .create({
      body: textoutput,
      from: "+19712735613",
      to: "+917073637246"
    })
    .then(message => {
      res.render("contact", {
        sms: "SMS has been sent to your Host",
        msg: "Email has been sent to your Host"
      });
      console.log("Message SID: " + message.sid);
    });
});

// ##########################
// Checkout
app.post("/checkout", (req, res) => {
  const checkoutput = `
    <p>Thanks for the visit</p>
    <h3>Visit Details</h3>
    <ul>  
      <li>Name: ${req.body.visiorName}</li>
      <li>Phone: ${req.body.visitorPhone}</li>
      <li>Check-in Time: ${req.body.visitorPhone}</li>
      <li>Check-out Time: ${req.body.visitorPhone}</li>
      <li>Host Name: ${req.body.visitorPhone}</li>
      <li>Address Visited: ${req.body.visitorPhone}</li>
    </ul>
  `;

  const textcheckoutput = `Visit Details- Name: ${req.body.visiorName}, Phone: ${req.body.vistorPhone}, Check-in time: ${req.body.visitorEmail}, Check-out Time: ${req.body.visitorEmail}, Host Name: ${req.body.visitorEmail}, Address Visited: ${req.body.visitorEmail}`;

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Mashu Ajmera" <mashu@dopamineplanet.com>', // sender address
    to: "mashuajmera@gmail.com", // list of receivers
    subject: "Your Visit Details", // Subject line
    text: textcheckoutput, // plain text body
    html: checkoutput // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

  res.render("contact", {
    mail: "The visit details have been mailed to your email id"
  });
});

//Run on Localhost PORT 5000
app.listen(5000, () => console.log("Server started..."));
