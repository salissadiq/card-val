// Importing the 'express' library, which simplifies creating a server and API end points in Node.js
const express = require('express');

// Importing 'body-parser' to parse incoming request bodies form the client in a middleware
const bodyParser = require('body-parser');

// Importing 'cors' to enable Cross-Origin Resource Sharing for the server
const cors = require('cors');

// Importing functions from a custom module for validating credit card details
const { detectCardType, validateCardNumber, validateExpiryDate, validateCVV } = require('./utils/validateCard');

// Creating an instance of the express application
const app = express();

// Enabling Cross-Origin Resource Sharing
app.use(cors());

// Parsing incoming request bodies as JSON
app.use(bodyParser.json());

// Endpoint to handle a POST request to validate card details
app.post('/validate-card', (req, res) => {
    // Extracting card details from the request body
    const { cardNumber, cardHolder, expiryMonth, expiryYear, cvv } = req.body;

    // Checking if all required card fields are provided from the client
    if (!cardNumber || !cardHolder || !expiryMonth || !expiryYear || !cvv) {
        return res.status(400).send('All the card fields are required.');
    }

    // Validating the card number (this is the function that uses luhn algorith for card validation)
    const isCardValid = validateCardNumber(cardNumber);

    // Validating the expiry date
    const isExpiryValid = validateExpiryDate(parseInt(expiryMonth), parseInt(expiryYear));

    // Detecting the card type (Visa, MasterCard, American Express, or Unknown)
    const cardType = detectCardType(cardNumber);

    // Validating the CVV based on the card type
    const isCvvValid = validateCVV(cardType, cvv);

    // Constructing the response object
    const response = {
        isCardValid,
        cardType,
        isExpiryValid,
        isCvvValid,
    };

    // Handling invalid card details with appropriate response and status code
    if (!isCardValid || !isExpiryValid || cardType === 'Unknown' || !isCvvValid) {
        return res.status(400).json(response);
    }

    // Sending the response with valid card details
    res.json(response);
});

// Defining the port to run the server, defaulting to 5000 if not provided
const PORT = process.env.PORT || 5000;

// Starting the server and listening on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
