var getHTML = require('../https-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printLEET (html) {
  console.log(html.replace(/[a]/g,'4')
    .replace(/[e]/gi,'3')
    .replace(/[o]/gi,'0')
    .replace(/[l]/gi,'1')
    .replace(/[s]/gi,'5')
    .replace(/[t]/gi,'7')
    .replace(/ck/gi,'x')
    .replace(/er/gi,'0r')
    .replace(/you/gi,'j00')
    );
}

getHTML(requestOptions, printLEET);
