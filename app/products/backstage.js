
const QualityMaxValue = 50;
const QualityMinValue = 0;
const SellInFirstThreshold = 5;
const SellInSecondThreshold = 10;
class Backstage {
    constructor(name, quality, sellIn) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    incrementQuality(item) {
        if (item.quality < QualityMaxValue) {
            item.quality += 1;
        }
        if(item.sellIn <= 0) {
            item.quality = QualityMinValue;
        } else if(item.sellIn <= SellInFirstThreshold) {
            item.quality += 2;
        } else if(item.sellIn <= SellInSecondThreshold) {
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
        return item;
    }
}

module.exports = Backstage;
