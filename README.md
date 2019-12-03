# Visitor-Management

An entry management software hosted at http://visitormgmt.herokuapp.com for demo purpose only.

## Problem Known

Given the visitors that we have in office and outside, there is a need to for an entry management software.

## Proposed Solution

We need an application, which can capture the name, email address, phone no of the visitor and same information also needs to be captured for the host on the front end.

At the back end, once the user enters the information in the form, the backend should store all of the information with time stamp of the entry.

This should trigger an email and an SMS to the host informing him of the details of the visitor. There should also be a provision of the checkout time which the guest can provide once he leaves. This should trigger an email to the guest with the complete form.

## Approached Workflow

I have approached it primarily for co-working offices these days, where several workers from different companies share an office space with different cabins alloted.

The reception at the office shall have the computer with the software setup. As new renters come, the receptionist shall save their personal details, cabin number as hosts in the software.

Once a visitor walks in, the receptionist shall ask the visitor his/her personal details and whom he/she has come to visit, enters it on the software, selects the hosts and presses check in. Once the visitor checks in, Host gets an email and an SMS stating the visitor details.

After the meeting or visit is over, and as the visitor gets out of the room, the receptionist presses check out. The visitor gets an email stating his visit details.

## Technology Used

I have created a responsive website without using any built-in frontend library (eg. bootstrap, jquery, etc.).

### Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Server** Environment: [Node.Js](https://nodejs.org/)
- **Backend**: [Express Js](https://expressjs.com/)
- **Database**: [MongoDb](https://www.mongodb.com/)

### Modules

- **Mail**: [NodeMailer](https://nodemailer.com/about/)
- **SMS**: [Twilio](https://www.twilio.com/)

## Installation Guidelines

### Prerequisite Softwares

[Node JS](https://nodejs.org/en/download/) | [MongoDb](https://www.mongodb.com/download-center/community)

### Execution

1.  open terminal at the desired location
2.  clone this repository **or** [download here](https://github.com/MashuAjmera/Visitor-Management/archive/master.zip)
    `git clone https://github.com/MashuAjmera/Visitor-Management.git`
3.  change directory
    `cd Visitor-Management`
4.  install dependencies  
    `npm install`
5.  Generate Authentication key for Twilio api [here](https://www.twilio.com/try-twilio).
6.  Create a **.env** file and add below mentioned details in it.

```
# specify your port number here
PORT= PORT NUMBER HERE

# specify credentials of msg91 (messaging api) here.
accountSid = ACCOUNT SID HERE
authToken = AUTHORIZATION TOKEN HERE
messageFrom = YOUR VIRTUAL NUMBER HERE

# MongoDb PORT
MONGODB_URI = mongodb://localhost:27017/

# specify credentials for nodemailer(email api) here, please enable less secure apps on gmail.
mailUser = EMAIL ADDRRESS HERE (STRING)
mailPass = PASSWORD OF THE EMAIL SPECIFIED ABOVE HERE (STRING)
mailHost = HOST IP BY WHICH EMAILS WILL BE SENT (STRING)
mailPORT = PORT OF YOUR MAIL SERVER (generally 587)
```

7.  connect MongoDb at PORT 27017
8.  start the server  
    `node app`
9.  at the browser, go to `http://localhost:PORT/`
