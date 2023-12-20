const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/v1', userRoutes);






module.exports = app;