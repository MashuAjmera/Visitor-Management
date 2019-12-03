# Visitor-Management

An entry management software hosted at http://visitormgmt.herokuapp.com for demo purpose only.

## Problem Known

Given the visitors that we have in office and outside, there is a need to for an entry management software.

## Proposed Solution

We need an application, which can capture the name, email address, phone no of the visitor and same information also needs to be captured for the host on the front end.

At the back end, once the user enters the information in the form, the backend should store all of the information with time stamp of the entry.

This should trigger an email and an SMS to the host informing him of the details of the visitor. There should also be a provision of the checkout time which the guest can provide once he leaves. This should trigger an email to the guest with the complete form.

## Approached Workflow

### Website Layout

**I have approached it primarily for co-working offices these days, where several workers from different companies share an office space with different cabins alloted.**

![Landing Page of the Website](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Landing%20Page.png?raw=true)
This is how the website looks in desktop or large screen. It's a one page website with all the functionalities to reduce user hassle and make the user experience better.

![Tablet Layout](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Tablet%20View%20Landing%20Page.png?raw=true "Tablet Layout")
This is the medium size screen layout of the website. The size and number of boxes change to adjust to the screen size.

![Mobile Layout](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Mobile%20View%20Landing%20Page.png?raw=true "Mobile Layout")
This is the small/ mobile screen layout of the website.

The checkout button is disabled because checkout is not possible without checking in. The UI design and font inspiration has been taken from [Innovacer](http://innovaccer.com "Innovacer")'s website.

### Adding Host

**The reception at the office shall have the computer with the software setup. As new renters come, the receptionist shall save their personal details, cabin number as hosts in the software.**
![Add Host](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Add%20Host.png?raw=true)
When an input box is hovered or selected, it glows and suggests what can be filled in. The _Add Host_ button turns black upon hover.

![Response of Adding Host](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Add%20Host%20Response.png?raw=true "Response of Adding Host")
As the user is registered, a notification pops up.

### Checking In Visitor

**Once a visitor walks in, the receptionist shall ask the visitor his/her personal details and whom he/she has come to visit, enters it on the software, selects the hosts and presses check in. Once the visitor checks in, Host gets an email and an SMS stating the visitor details.**
![Checking in a New Visitor](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Checkin.png?raw=true "Checking in a New Visitor")
Upon selecting the host, it turn pink to give user the feedback.

### Checking Out Visitor

**After the meeting or visit is over, and as the visitor gets out of the room, the receptionist presses check out. The visitor gets an email stating his visit details.**
![Checking Out](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Checkout.png?raw=true "Checking Out")

## Technology Used

I have created this responsive website **without** using any built-in frontend library (eg. bootstrap, jquery, etc.).

### Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Server Environment**: [Node.Js](https://nodejs.org/)
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

7.  start the server  
    `node app`
8.  at the browser, go to `http://localhost:PORT/`
