// import modules
var dotenv = require('dotenv') // used to securely load our secret email credential
var nodemailer = require('nodemailer');
var express = require('express');
var bodyParser = require('body-parser');

// loading secret email credentials
dotenv.config();

// initialize email transporter
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SERVER_ID,
    pass: process.env.EMAIL_SERVER_PASSWORD
  }
});

// define email sending logic
function sendFeedbackEmailToAdmin(request, response) {
  var data = request.body;

  var mailOptions = {
    from: 'My Landing Page <atbemailserver@gmail.com>', // this will be our email server address
    to: 'atbemailserver@gmail.com', // change this to your email
    subject: 'Message from ' + data.name + '<' + data.email + '>',
    html: data.text
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
      response.status(400).send("<h1>Bad thing happened!<h1>")
    } else {
      console.log(info);
      response.status(204).send();
    };
  });
}


// initialize server application
var app = express();

// initialize body-parser i.e. user input extractor
app.use(bodyParser.urlencoded({
  extended: false
}))

// set up the feedback routes
app.post('/feedback', sendFeedbackEmailToAdmin)

// set up the index route
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});