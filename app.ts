// app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const couponRoutes = require('./routes/couponRoutes');
const proxyRoutes = require('./routes/proxyRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coupons', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error: any) => {
    console.error('Failed to connect to MongoDB', error);
});

const app = express();

// allow cors
app.use(cors({
    origin: ['http://pay.tvoysklad.com', 'https://pay.tvoysklad.com', 'http://localhost:3000', 'https://localhost:3000']
}));

// Middleware to parse request bodies
app.use(express.json());

// Routes middleware
app.use('/coupons', couponRoutes);
app.use('/proxy', proxyRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
