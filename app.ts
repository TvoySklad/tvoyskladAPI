// app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
import axios from "axios";
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

// app.post('/proxy/register', async (req: Request, res: Response) => {
//     try {
//         console.log('Request to /proxy/register:', req.body);
//         const response = await axios.post('https://payment.alfabank.ru/payment/rest/register.do', req.body);
//         console.log('Response from Alfabank API:', response.data);
//         res.status(response.status).send(response.data);
//     } catch (error: any) {
//         console.error('Error from Alfabank API:', error.response.data);
//         res.status(error.response.status).send(error.response.data);
//     }
// });
//
// app.post('/proxy/check', async (req: Request, res: Response) => {
//     try {
//         const response = await axios.post('https://payment.alfabank.ru/payment/rest/getOrderStatus.do', req.body);
//
//         res.status(response.status).send(response.data);
//     } catch (error: any) {
//         res.status(error.response.status).send(error.response.data);
//     }
// });

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
