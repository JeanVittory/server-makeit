const express = require('express');
const getHandler = require('./handlers/getHandler');

const app = express();
const PORT = 8080;

app.get('/my-first-endpoint', getHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
