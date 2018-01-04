const Item = require('./item');
const SellInMinValue = 0;
const QualityMinValue = 0;

class CommonItem extends Item{
    constructor(name, quality, sellIn){
        super(name, quality, sellIn)
    }
    decrementQuality() {
        if (this.quality > QualityMinValue) {
            this.quality -= 1;
            if (this.sellIn < SellInMinValue) {
                this.quality -= 1;
            }
        }
    }
    updateQuality () {
        this.decrementSellIn();
        this.decrementQuality();
    }
}

module.exports = CommonItem;
