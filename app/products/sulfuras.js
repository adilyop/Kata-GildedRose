const Item = require('./item');

class Sulfuras extends Item {
    constructor(name, quality, sellIn) {
        super(name, quality, sellIn)
    }

    updateQuality() {
    }
}

module.exports = Sulfuras;
