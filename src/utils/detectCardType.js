function detectCardType(cardNumber) {
    const firstFourDigits = cardNumber.substring(0, 4);

    if (/^5[1-5]/.test(firstFourDigits)) {
        return "MasterCard";
    } else if (/^4/.test(firstFourDigits)) {
        return "Visa";
    } else if (/^3[47]/.test(firstFourDigits)) {
        return "American Express";
    } else {
        return "Unknown";
    }
}

export default detectCardType

