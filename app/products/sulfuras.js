
class Sulfuras {
    constructor(name, quality, sellIn){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    updateProduct() {
        let item = {name: this.name, sellIn: this.sellIn, quality: this.quality};
        return item;
    }
}


module.exports = Sulfuras;