const express = require('express');
const bodyParser = require('body-parser');
const validateCreditCard = require('./utils/validateCard');

const app = express();
app.use(bodyParser.json());

app.post('/validate-card', (req, res) => {
    const { cardNumber, expiryMonth, expiryYear } = req.body;

    if (!cardNumber || !expiryMonth || !expiryYear) {
        return res.status(400).send('Card number, expiry month, and expiry year are required.');
    }

    const { isCardNumberValid, isExpiryValid, cardType } = validateCreditCard(cardNumber, parseInt(expiryMonth), parseInt(expiryYear));

    const response = {
        isCardNumberValid,
        isExpiryValid,
        cardType,
    };

    res.json(response);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
