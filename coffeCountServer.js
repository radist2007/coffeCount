const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/frontend/Public/index.html'));
});

app.use(express.static(__dirname + '/frontend/Public/css'));
app.use(express.static(__dirname + '/frontend/Public/js'));

const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`Listening on port ${port}...`));
