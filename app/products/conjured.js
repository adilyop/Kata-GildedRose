const Item = require('./item');
const QualityMaxValue = 50;
const SellInMinValue = 0;

class Conjured extends Item {
    constructor(name, quality, sellIn) {
        super(name, quality, sellIn);
    }

    incrementQuality() {
        if (this.quality < QualityMaxValue) {
            this.quality -= 2;
        }
    }

    updateQuality() {
        this.decrementSellIn();
        this.incrementQuality();
    }
}

module.exports = Conjured;
