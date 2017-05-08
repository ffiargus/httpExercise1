var getHTML = require('./https-functions');
var printHTML = require('./callbacks/print_uppercase');
// var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// function printHTML (html) {
//   console.log(html);
// }

getHTML(requestOptions, printHTML);