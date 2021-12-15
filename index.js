const express = require('express');
const cors = require('cors');
const { port } = require('./src/config/config');
const { serverRouter } = require('./src/routes/index');

const app = express();

// Middlewares 🕛
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 🚦
serverRouter(app);

// Start server 🚀
app.listen(port, () => console.log(`Server started on port ${port}`));
