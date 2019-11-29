// ################################# Initialize
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
const MongoClient = require("mongodb").MongoClient;

// Connect to Database
const url = "mongodb://localhost:27017/";

// ##################################### Setup
// Express Setup
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

// ################################# Checkin
app.post("/checkin", (req, res) => {
  const output = `
    <p>You have a new visior request</p>
    <h3>Visitor Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
  `;

  const textoutput = `New Visitor Request- Name: ${req.body.name}, Email: ${req.body.email}, Phone: ${req.body.phone}`;

  let mailOptions = {
    from: '"Mashu Dopamine" <mashu@dopamineplanet.com>', // Server Email Address
    to: req.body.hostEmail, // Host Email Address
    subject: "New Visitor Request", // Subject line
    text: textoutput, // plain text body
    html: output // html body
  };

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var newVisitor = {
  //     name: req.body.name,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     checkin: req.body.checkin,
  //     hostName: req.body.hostName,
  //     hostEmail: req.body.hostEmail,
  //     hostPhone: req.body.hostPhone,
  //     addressVisited: req.body.addressVisited
  //   };
  //   dbo.collection("visitors").insertOne(newVisitor, function(err, res) {
  //     if (err) throw err;
  //     db.close();
  //     console.log("New visitor added");
  //   });
  // });

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Message sent: %s", info.messageId);
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // });

  // client.messages
  //   .create({
  //     body: textoutput,
  //     from: "+19712735613",
  //     to: "+917073637246"
  //   })
  //   .then(message => {
  //     res.render("contact", {
  //       sms: "SMS has been sent to your Host",
  //       msg: "Email has been sent to your Host"
  //     });
  //     console.log("Message SID: " + message.sid);
  //   });

  console.log(textoutput);
});

// ########################## Checkout
app.post("/checkout", (req, res) => {
  res.send(req.body);

  const checkoutput = `
    <p>Thanks for the visit</p>
    <h3>Visit Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Check-in Time: ${req.body.checkin}</li>
      <li>Check-out Time: ${req.body.checkout}</li>
      <li>Host Name: ${req.body.hostName}</li>
      <li>Address Visited: ${req.body.addressVisited}</li>
    </ul>
  `;

  const textcheckoutput = `Visit Details- Name: ${req.body.name}, Phone: ${req.body.phone}, Check-in time: ${req.body.checkin}, Check-out Time: ${req.body.checkout}, Host Name: ${req.body.hostName}, Address Visited: ${req.body.addressVisited}`;

  let mailOptions = {
    from: '"Mashu Ajmera" <mashu@dopamineplanet.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Your Visit Details", // Subject line
    text: textcheckoutput, // plain text body
    html: checkoutput // html body
  };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Message sent: %s", info.messageId);
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // });

  // res.render("contact", {
  //   mail: "The visit details have been mailed to your email id"
  // });

  console.log(textcheckoutput);
});

// ########################################## Run on Localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on PORT " + PORT));
