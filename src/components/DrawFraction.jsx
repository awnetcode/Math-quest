class MixedFraction {
    constructor(intPart, numerator, denominator) {
        this.intPart = intPart || this.drawNumber();
        this.numerator = numerator || this.drawNumber();
        this.denominator = denominator || this.drawNumber();
    }

    //funkcja losująca liczbę w przedziale 1-10
    drawNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Funkcja do konwersji na liczbę dziesiętną
    toDecimal() {
        return this.intPart + (this.numerator / this.denominator);
    }
}

export default MixedFraction;