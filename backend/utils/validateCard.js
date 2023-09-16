function validateCreditCard(cardNumber, expiryMonth, expiryYear) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const masterCardRegex = /^5[1-5][0-9]{14}$/;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const americanExpressRegex = /^3[47][0-9]{13}$/;

    const isCardNumberValid =
        masterCardRegex.test(cardNumber) ||
        visaRegex.test(cardNumber) ||
        americanExpressRegex.test(cardNumber);

    const isExpiryValid =
        !isNaN(expiryMonth) &&
        !isNaN(expiryYear) &&
        expiryMonth >= 1 &&
        expiryMonth <= 12 &&
        expiryYear >= currentYear &&
        (expiryYear > currentYear || expiryMonth >= currentMonth);

    let cardType = "Unknown";
    if (masterCardRegex.test(cardNumber)) {
        cardType = "MasterCard";
    } else if (visaRegex.test(cardNumber)) {
        cardType = "Visa";
    } else if (americanExpressRegex.test(cardNumber)) {
        cardType = "American Express";
    }

    return {
        isCardNumberValid,
        isExpiryValid,
        cardType,
    };
}
module.exports = validateCreditCard