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

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new visior request</p>
    <h3>Visitor Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
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
  });

  // Message
  client.messages
    .create({
      body: `New Visitor Request- Name: ${req.body.visior - name} Phone: ${req
        .body.visior - phone} Email: ${req.body.visior - email} `,
      from: "+19712735613",
      to: "+917073637246"
    })
    .then(message => {
      res.render("contact", {
        sms: "SMS has been sent to the Host",
        msg: "Email has been sent to the Host"
      });
      console.log(message.sid);
    });
});

//Run on Localhost PORT 5000
app.listen(5000, () => console.log("Server started..."));
