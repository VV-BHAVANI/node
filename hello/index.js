/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demo.html', function(err, data) {
res.write(data);
console.log("running");
    return res.end();
});
}).listen(3006);*/
 //console.log("running");

  /*var fs = require('fs');
  //var data='Hello conteeeeent!';
  fs.writeFile('demofile1.txt','dsaaaaaa',function(err) {
    if(err)
    {
    console.log(err);
    }
  console.log('Saved!');
  });*/


/*var fs = require('fs');
fs.appendFile('demofile1.txt',' This is my text.',function(err) {
  if(err)throw err;
console.log('Updated!');
  });*/
/*  var fs = require('fs');
  fs.writeFile('demofile1.txt','This is my text',function(err) {
    if(err) throw err;
    console.log('Replaced!');
  });*/
 // Create a new file using the appendFile() method:
var fs = require('fs');
//create a file named mynewfile.txt:
fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
