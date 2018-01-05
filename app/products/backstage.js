const Item = require('./item');
const QualityMaxValue = 50;
const QualityMinValue = 0;
const SellInFirstThreshold = 5;
const SellInSecondThreshold = 10;

class Backstage extends Item{
    constructor(name, quality, sellIn) {
        super(name, quality, sellIn)
    }
    incrementQuality() {
        if (this.quality < QualityMaxValue) {
            this.quality += 1;
        }
        if(this.sellIn <= 0) {
            this.quality = QualityMinValue;
        } else if(this.sellIn <= SellInFirstThreshold) {
            this.quality += 2;
        } else if(this.sellIn <= SellInSecondThreshold) {
            this.quality += 1;
        }
    }

    updateQuality () {
        this.decrementSellIn();
        this.incrementQuality();
    }
}

module.exports = Backstage;
