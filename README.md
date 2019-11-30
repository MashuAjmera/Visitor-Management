# Visitor-Management

An entry management software hosted at http://visitormgmt.herokuapp.com for demo only.

## Problem Known

Given the visitors that we have in office and outside, there is a need to for an entry management software.

## Proposed Solution

We need an application, which can capture the name, email address, phone no of the visitor and same information also needs to be captured for the host on the front end.
At the back end, once the user enters the information in the form, the backend should store all of the information with time stamp of the entry.
This should trigger an email and an SMS to the host informing him of the details of the visitor. There should also be a provision of the checkout time which the guest can provide once he leaves. This should trigger an email to the guest with the complete form which should include:

## Approached Workflow

I have approached it primarily for co-working offices these days, where several workers from different companies share an office space with different cabins alloted.

The reception at the office shall have the computer with the software setup. As new renters come, the receptionist shall save their personal details, cabin number as hosts in the software.

Once a visitor walks in, the receptionist shall ask the visitor his/her personal details and whom he/she has come to visit, enters it on the software, selects the hosts and presses check in. Once the visitor checks in, Host gets an email and an SMS stating the visitor details.

After the meeting or visit is over, and as the visitor gets out of the room, the receptionist presses check out. The visitor gets an email stating his visit details.

## Tech Stack Used

Frontend: HTML5, CSS3, JavaScript  
Server Environment: Node.Js  
Backend: Express  
Database: MongoDb

## Installation Guidelines

### Prerequisite Softwares

[Node JS](https://nodejs.org/en/download/) | [MongoDb](https://www.mongodb.com/download-center/community)

### Execution

download the repository [here](https://github.com/MashuAjmera/Visitor-Management/archive/master.zip)  
Connect MongoDb at PORT `27017`  
Open Terminal at the location of the repository and type:

```
npm install
node app
```

At the browser, go to `http://localhost:5000/`
