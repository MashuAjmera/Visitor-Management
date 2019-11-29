# Visitor-Management

An entry management software

## Problem Solved

Given the visitors that we have in office and outside, there is a need to for an entry management software.

## Solution Proposed

We need an application, which can capture the name, email address, phone no of the visitor and same information also needs to be captured for the host on the front end.
At the back end, once the user enters the information in the form, the backend should store all of the information with time stamp of the entry.
This should trigger an email and an SMS to the host informing him of the details of the visitor. There should also be a provision of the checkout time which the guest can provide once he leaves. This should trigger an email to the guest with the complete form which should include:

## Tech Stack Used

Frontend: HTML5, CSS3, JavaScript  
Server Environment: Node.Js  
Backend: Express  
Database: MongoDb

## Workflow

Once visitor checks in and enters his details in the web-app, Host gets an email and an SMS stating the visitor details.
After the meeting or visit is over, and visitor checks out, visitor gets an email stating his visit details.

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

At the browser, go to `localhost:5000/`

### Hosted at http://visitormgmt.herokuapp.com
