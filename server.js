var http = require('http');
var fs = require('fs');

const server = http.createServer().listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

const html = `
<!DOCTYPE html>
<html>
	<head>
		<title>coffe count</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
        <h1>coffe count</h1>
        <br/>
		<div id="countView" class="countView">will be here</div>
		<button id="btnAddCoffe" class="btnAddCoffe">add</button>
		<button id="btnMinusCoffe" class="btnMinusCoffe">Minus</button>
        <script src="script.js"></script>
	</body>
</html>
`;

const css = `
body {
	background-color: yellow;
	color: green;
}
`;

const script = `

console.log("Hello from Coffe-Count!");

var countView    = document.getElementById('countView');
var btnAddCoffe  = document.getElementById('btnAddCoffe');
var coffeCount = getCookie('coffe');

countView.innerHTML = coffeCount;

function minusCoffe(count = 0) {
	console.log("coffe in cookie: " + coffeCount);

	if(coffeCount) {
		coffeCount -- ;
		console.log(coffeCount);
		document.cookie = 'coffe=' + coffeCount;
		countView.innerHTML = coffeCount;
	}

	console.log(count + " coffe was added");

}
function addCoffe(count = 0) {
	console.log("coffe in cookie: " + coffeCount);

	if(coffeCount) {
		coffeCount ++ ;
		console.log(coffeCount);
		document.cookie = 'coffe=' + coffeCount;
		countView.innerHTML = coffeCount;
	}

	console.log(count + " coffe was added");

}
function getCookie(name) {
  if(!document.cookie){ return 'no one cookie'; }
  console.log('getCookie('+ name +')');
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

btnAddCoffe.addEventListener('click', function(){
	addCoffe(1);
});
btnMinusCoffe.addEventListener('click', function(){

	minusCoffe(1);

});

`;

server.on('request', (req, res) => { 
	console.log("request for: " + req.url);

	switch(req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html'});
			res.end(html);

		case '/style.css':
			res.writeHead(200, { 'Content-Type': 'text/css'});
			res.end(css);

		case '/script.js':
			res.writeHead(200, { 'Content-Type': 'text/javascript'});
			res.end(script);

		default: 
			res.writeHead(404, { 'Content-Type': 'text/plain'});
			res.end('404 Not dound!');

	}
	
});
