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

# specify credentials of Twilio (messaging api) here.
accountSid = ACCOUNT SID HERE
authToken = AUTHORIZATION TOKEN HERE
messageFrom = YOUR VIRTUAL NUMBER HERE

# MongoDb PORT
MONGODB_URI = mongodb://localhost:27017/

# specify credentials for nodemailer(email api) here.
# please enable less secure apps on your mailing service if email doesn't get delivered.
mailUser = EMAIL ADDRRESS HERE
mailPass = PASSWORD OF THE EMAIL SPECIFIED ABOVE HERE
mailHost = HOST IP BY WHICH EMAILS WILL BE SENT
mailPORT = PORT OF YOUR MAIL SERVER (generally 587)
```

7.  start the server  
    `node app`
8.  at the browser, go to `http://localhost:PORT/`

## Demonstration
The website is hosted at https://visitor-management-e8et.onrender.com

### Website Layout

This is how the website looks in desktop or large screen. It's a one page website with all the functionalities to reduce user hassle and make the UX better. The checkout button is disabled because checkout is not possible without checking in.  
![Landing Page of the Website](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Landing%20Page.png?raw=true)

This is the medium size screen layout of the website. The size and number of boxes change to adjust to the screen size.
![Tablet Layout](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Tablet%20View%20Landing%20Page.png?raw=true "Tablet Layout")

This is the small/ mobile screen layout of the website. The main text boxes have been kept above so that the screen doesn't shift while entering details with a touch screen device, thus in-line with the better UX approach that has been taken.  
![Mobile Layout](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Mobile%20View%20Landing%20Page.png?raw=true "Mobile Layout")

### Adding the Host
The input text boxes glow and the _Add Host_ button turns black when hovered on or in focus.  
![Add Host](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Add%20Host.png?raw=true)

As the host is added, an alert pops up, notifying the user about it.  
![Response of Adding Host](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Add%20Host%20Response.png?raw=true "Response of Adding Host")

### Checking In Visitor

When an input box is selected, it glows and suggests what can be filled in from the list of saved form entries. Upon hovering or selecting the host, the box turns pink to let the user know.  
![Checking in a New Visitor](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Checkin.png?raw=true "Checking in a New Visitor") 
  
The user is notified with an alert that the message has been sent.  
  
The host is notified with a mail and SMS mentioning the visitor name, email address and phone number.  
![Visitor Checkin Mail](https://raw.githubusercontent.com/MashuAjmera/Visitor-Management/master/static/img/Visitor%20Request%20mail.png)
### Checking Out Visitor

Without checking out, new visitor cannot check in, thus maintaining a clear line of flow.  
![Checking Out](https://github.com/MashuAjmera/Visitor-Management/blob/master/static/img/Checkout.png?raw=true "Checking Out")
Upon checkout the visitor details are erased from the screen, making way for new user to check in. The information is obviously stored in the database for all these.  
The visitor is informed about the visit with an email containing his name, email, phone number, check-in time, checkout time, host name and address visited.  
![Visit details mail](https://raw.githubusercontent.com/MashuAjmera/Visitor-Management/master/static/img/visit%20details%20email.png)

### Handling Unintended User Actions
If the user doesn't fill all the required boxes, then an alert message pops up. Upon clicking *Ok*, the user is notified which textboxes are left unfilled.  
  
**Note**: The UI design inspiration has been taken from [Innovacer](http://innovaccer.com "Innovacer")'s website.
