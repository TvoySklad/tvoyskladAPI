// app.js

const express = require('express');
const mongoose = require('mongoose');
const PromoCode = require('./models/PromoCode');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/promocodes', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

// Middleware to parse request bodies
app.use(express.json());

// Route to check if a promo code exists
app.get('/promo-codes/:code', async (req, res) => {
  const promoCode = await PromoCode.findOne({ code: req.params.code });
  if (promoCode) {
    if (promoCode.isUsed) {
      res.status(400).json({ error: 'Promo code already used' });
    } else {
      res.json(promoCode);
    }
  } else {
    res.status(404).json({ error: 'Promo code not found' });
  }
});

// Route to delete a promo code when payment is made
app.delete('/promo-codes/:code', async (req, res) => {
  const promoCode = await PromoCode.findOne({ code: req.params.code });
  if (promoCode) {
    if (promoCode.isUsed) {
      res.status(400).json({ error: 'Promo code already used' });
    } else {
      promoCode.isUsed = true;
      await promoCode.save();
      res.json({ message: 'Promo code marked as used' });
    }
  } else {
    res.status(404).json({ error: 'Promo code not found' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
