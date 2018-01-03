const SellInMinValue = 0;
const QualityMinValue = 0;

class DefaultProduct {
    constructor(name, quality, sellIn){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    decrementQuality(item) {
        if (item.quality > QualityMinValue) {
            item.quality -= 1;
            if (item.sellIn < SellInMinValue) {
                item.quality -= 1;
            }
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
        item = this.decrementQuality(item);
        return item;
    }
}

module.exports = DefaultProduct;
