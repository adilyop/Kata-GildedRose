const Item = require('./item');
const QualityMaxValue = 50;
const SellInMinValue = 0;

class AgedBrie extends Item{
    constructor(name, quality, sellIn){
        super(name, quality, sellIn);
    }
    incrementQuality() {
        if (this.quality < QualityMaxValue) {
            this.quality += 1;
        }
        // return item;
    }
    updateQuality () {
        this.decrementSellIn();
        this.incrementQuality();
        if (this.sellIn < SellInMinValue) {
            this.incrementQuality();
        }
        // return item;
    }
}

module.exports = AgedBrie;
