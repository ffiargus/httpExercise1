var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  var bufferString = '';

  response.on('data', function(data) {
    console.log('Chunk received. Length:',data.length);
    bufferString += data;
  });


  response.on('end', function() {
    console.log(bufferString);
    console.log('Response stream complete.');
  });

});