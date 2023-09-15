function splitCardNumber(cardNumber) {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    const groupSize = 4;
    const groups = [];
    for (let i = 0; i < cleanedCardNumber.length; i += groupSize) {
        groups.push(cleanedCardNumber.slice(i, i + groupSize));
    }

    return groups.join(' ');
}

export default splitCardNumber