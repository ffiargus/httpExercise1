var https = require('https');


module.exports = function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');

    var bufferString = '';

    response.on('data', function(data) {
      console.log('Chunk received. Length:',data.length);
      bufferString += data;
    });


    response.on('end', function() {
      callback(bufferString);
      console.log('Response stream complete.');
    });

  });

};

// function printHTML (html) {
//   console.log(html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };

// getHTML(requestOptions, printHTML);