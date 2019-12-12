const express = require('express');
const path = require('path');
const app = express();

app.use(
    express.json(),
    express.urlencoded({extended: true}),
    express.static(__dirname + '/public/dist/public')
);

require('./server/config/mongoose.config');

app.all('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '/public/dist/public/index.html'))
);

app.listen(8000, () => console.log('Server is ready to go on port 8000!'))
