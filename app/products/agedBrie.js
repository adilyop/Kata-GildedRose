
const QualityMaxValue = 50;
const SellInMinValue = 0;

class AgedBrie {
    constructor(name, quality, sellIn){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    incrementQuality(item) {
        if (item.quality < QualityMaxValue) {
            item.quality += 1;
        }
        return item;
    }
    decrementSellIn(item) {
        item.sellIn -= 1;
        return item;
    }
    updateProduct() {
        let item = {name: this.name, sellIn: this.sellIn, quality: this.quality};
        item = this.decrementSellIn(item);
        item = this.incrementQuality(item);
        if (item.sellIn < SellInMinValue) {
            item = this.incrementQuality(item);
        }
        return item;
    }
}


module.exports = AgedBrie;