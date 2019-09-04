const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
	console.log("request for: " + req.url);
	res.sendFile(path.join(__dirname+'/frontend/Public/index.html'));
});

app.use(express.static('frontend/Public'));

const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`Listening on port ${port}...`));
