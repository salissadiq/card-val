function validateCreditCard(cardNumber) {
    let cardType = "Unknown";

    switch (true) {
        case /^5[1-5][0-9]{14}$/.test(cardNumber):
            cardType = "MasterCard";
            break;
        case /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber):
            cardType = "Visa";
            break;
        case /^3[47][0-9]{13}$/.test(cardNumber):
            cardType = "American Express";
            break;
    }

    return cardType;
}

export default validateCreditCard

