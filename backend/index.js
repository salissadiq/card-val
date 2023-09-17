const express = require('express');
const bodyParser = require('body-parser');
const { detectCardType, validateCardNumber, validateExpiryDate, validateCVV } = require('./utils/validateCard')
const app = express();
app.use(bodyParser.json());





app.post('/validate-card', (req, res) => {
    const { cardNumber, cardHolder, expiryMonth, expiryYear, cvv } = req.body;

    if (!cardNumber || !cardHolder || !expiryMonth || !expiryYear || !cvv) {
        return res.status(400).send('All the card fields are required.');
    }

    const isCardValid = validateCardNumber(cardNumber);
    const isExpiryValid = validateExpiryDate(parseInt(expiryMonth), parseInt(expiryYear));
    const cardType = detectCardType(cardNumber);
    const isCvvValid = validateCVV(cardType, cvv);
    const response = {
        isCardValid,
        cardType,
        isExpiryValid,
        isCvvValid,
    };
    if (!isCardValid || !isExpiryValid || cardType === 'Unknown' || !isCvvValid) {
        return res.status(400).json(response)
    }
    res.json(response);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Luhn algorithm to validate credit card numbers
// function isLuhnValid(cardNumber) {
//     let sum = 0;
//     let shouldDouble = false;

//     // Iterate through each digit in reverse order
//     for (let i = cardNumber.length - 1; i >= 0; i--) {
//         let digit = parseInt(cardNumber[i], 10);

//         if (shouldDouble) {
//             digit *= 2;
//             if (digit > 9) {
//                 digit -= 9;
//             }
//         }

//         sum += digit;
//         shouldDouble = !shouldDouble;
//     }

//     return sum % 10 === 0;
// }

// // Express endpoint to validate credit card details
// app.post('/validate-credit-card', (req, res) => {
//     const { cardNumber, cardHolder, expiryDate, cvv } = req.body;

//     // Validate card number using Luhn algorithm
//     const isCardNumberValid = isLuhnValid(cardNumber);

//     // Check card type based on the first digit of the card number
//     const cardType = cardNumber.startsWith('4') ? 'Visa' :
//         cardNumber.startsWith('5') ? 'MasterCard' :
//             cardNumber.match(/^3[47]/) ? 'American Express' :
//                 'Unknown';

//     // Dummy expiry date validation (you should implement a proper validation)
//     // const isExpiryValid = expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/);

//     // Dummy CVV validation (you should implement a proper validation)
//     // const isCvvValid = cvv.match(/^\d{3,4}$/);

//     // Construct the response based on validation results
//     const response = {
//         isCardNumberValid,
//         cardType,
//         // isExpiryValid,
//         // isCvvValid,
//         cardHolder
//     };

//     res.json(response);
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
