var express = require('express');
var app = express();

function test() {
  if (x === 0) {
    doSomething();
  } else if (x === 1) {
    doSomethingElse();
  }
}

app.get('/', function (req, res) {
  test();
  console.log('chorrada');
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('Example app listening on port 3000!');
});