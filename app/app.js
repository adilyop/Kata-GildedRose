const AgedBrie = require('../app/products/agedBrie');
const Backstage = require('../app/products/backstage');
const Sulfuras = require('../app/products/sulfuras');
const DefaultProduct = require('../app/products/default');

const AgedBrieCase = 'Aged Brie';
const BackstageCase = 'Backstage passes to a TAFKAL80ETC concert';
const SulfurasCase = 'Sulfuras, Hand of Ragnaros';

class GildedRose {
    constructor(name, quality, sellIn){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    updateQuality() {
        let item = {};
        switch(this.name) {
            case AgedBrieCase:
                let agedBrie = new AgedBrie(this.name, this.quality, this.sellIn);
                item = agedBrie.updateProduct();
                break;
            case BackstageCase:
                let backstage = new Backstage(this.name, this.quality, this.sellIn);
                item = backstage.updateProduct();
                break;
            case SulfurasCase:
                let sulfuras = new Sulfuras(this.name, this.quality, this.sellIn);
                item = sulfuras.updateProduct();
                break;
            default:
                let defaultProduct = new DefaultProduct(this.name, this.quality, this.sellIn);
                item = defaultProduct.updateProduct();
                break;
        }
        return item;
    }
}


module.exports = GildedRose;