
// const itemStrategy = require('../itemStrategy');

class Item {
    constructor(name, quality, sellIn){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    decrementSellIn() {
        this.sellIn -= 1;
    }

}

module.exports = Item;
