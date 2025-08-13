const express = require('express');
const cors = require('cors');

const app = express();

// express dot json
app.use(express.json())

// cors
app.use(cors())


module.exports = app