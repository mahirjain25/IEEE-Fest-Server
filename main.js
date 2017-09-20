const express = require('express');
const app = express();
const router = require('./routes/api');

app.get('/', (req, resp) => resp.json('Invalid Route!'));
app.use('/api', router);

app.listen(3000, ()=> console.log('Server started on port 3000'));