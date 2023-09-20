//This file contain utils functions for credit card validation


//This function for checks for valid card number using Luhn algorithm 
exports.validateCardNumber = (cardNumber) => {
    // Remove any non-digit characters
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is composed of digits only
    if (!/^\d+$/.test(cleanedCardNumber)) {
        return false;
    }

    // Check the card number length (between 13 and 19 digits)
    if (cleanedCardNumber.length < 13 || cleanedCardNumber.length > 19) {
        return false;
    }

    // This is where i used Luhn algorithm to validate the credit card number
    let sum = 0;
    let doubleUp = false;

    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanedCardNumber.charAt(i), 10);

        if (doubleUp) {
            if ((digit *= 2) > 9) digit -= 9;
        }

        sum += digit;
        doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
}

//This function Detect the credit card type e.g. MasterCard, Visa, and American Express
exports.detectCardType = (cardNumber) => {

    //Regex for masterCard
    const masterCardRegex = /^5[1-5][0-9]{14}$/;

    //regex for Visa
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

    //Regex for American Express
    const americanExpressRegex = /^3[47][0-9]{13}$/;

    //The below condition Detect the type of credit card by using the above Regex for each card type
    if (masterCardRegex.test(cardNumber)) {
        return "Master Card";
    } else if (visaRegex.test(cardNumber)) {
        return "Visa";
    } else if (americanExpressRegex.test(cardNumber)) {
        return "American Express";
    } else {
        return "Unknown";
    }
}


//This function validate card expiry date
//It uses last two digits of the year and check if both month and year are in future
exports.validateExpiryDate = (expiryMonth, expiryYear) => {

    const currentYear = new Date().getFullYear() % 100; // Get the last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // + 1 is added because January is 0 in JavaScript
    // This check if expiry month and year are valid and in the future
    const isMonthValid = !isNaN(expiryMonth) && expiryMonth >= 1 && expiryMonth <= 12 && expiryMonth >= currentMonth;
    const isYearValid = !isNaN(expiryYear) && expiryYear >= currentYear;

    // If both month and year are valid and both are in the future, return true
    return isMonthValid && isYearValid;
}

//This is the function that validate card CVV based on card type
//MasterCard and Visa has 3 digits CVV while American Express has 4 digits
//False will be returned if the Cvv is Invalid
//Otherwise true will be returned
exports.validateCVV = (cardType, cvv) => {
    let cvvLength;

    // Determine the CVV length based on card type
    switch (cardType) {
        case 'Visa':
            cvvLength = 3; // CVV for Visa is 3 digits
            break;
        case 'Master Card':
            cvvLength = 3; // CVV for MasterCard is 3 digits
            break;
        case 'American Express':
            cvvLength = 4; // CVV for American Express is 4 digits
            break;
        default:
            return false; // Unknown card type
    }

    // Check if CVV is numeric and has the correct length
    //return true if the cvv has a valid length based on card type
    return /^\d+$/.test(cvv) && cvv.length === cvvLength;
}
