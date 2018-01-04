const chai = require('chai');
const expect = chai.expect;
const CommonItem = require('../app/products/commonItem');
const AgedBrie = require('../app/products/agedBrie');
const Backstage = require('../app/products/backstage');
const Sulfuras = require('../app/products/sulfuras');
const Shop = require('../app/shop');

describe('gilded Rose Kata Test: \n', () => {
    it('default product: should decrement sellIn & quality', () => {
        const shop = new Shop([ new CommonItem("common item", 10, 10) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal('common item');
        expect(items[0].quality).to.equal(9);
        expect(items[0].sellIn).to.equal(9);
    });
    it("default product: should decrement sellIn, The Quality of an item is never negative", function() {
        const shop = new Shop([ new CommonItem("common item", 0, -1) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("common item");
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-2);
    });
    it("default product: when sellIn is negative, quality decrease twice", function() {
        const shop = new Shop([ new CommonItem("common item", 10, -1) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("common item");
        expect(items[0].quality).to.equal(8);
        expect(items[0].sellIn).to.equal(-2);
    });
    it("Aged Brie: should quality increment & sellIn decrease", function() {
        const shop = new Shop([ new AgedBrie("Aged Brie", 10, 10) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Aged Brie");
        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(9);
    });
    it("Aged Brie: should quality degrease twice if sellIn is negative", function() {
        const shop = new Shop([ new AgedBrie("Aged Brie", 5, 0) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Aged Brie");
        expect(items[0].quality).to.equal(7);
        expect(items[0].sellIn).to.equal(-1);
    });
    it("Aged Brie: when quality is greater than 50", function() {
        const shop = new Shop([ new AgedBrie("Aged Brie", 52, 10) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Aged Brie");
        expect(items[0].quality).to.equal(52);
        expect(items[0].sellIn).to.equal(9);
    });
    it("Aged Brie: when sellIn is negative and quality is greater than 50", function() {
        const shop = new Shop([ new AgedBrie("Aged Brie", 51, 0) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Aged Brie");
        expect(items[0].quality).to.equal(51);
        expect(items[0].sellIn).to.equal(-1);
    });
    it("Backstage: should quality increment twice", function() {
        const shop = new Shop([ new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).to.equal(12);
        expect(items[0].sellIn).to.equal(9);
    });
    it("Backstage: if sellin is negative, quality get null", function() {
        const shop = new Shop([ new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, -1) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-2);
    });
    it("Backstage: if sellin is negative, quality get null even quality is more than 50", function() {
        const shop = new Shop([ new Backstage("Backstage passes to a TAFKAL80ETC concert", 49, -1) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-2);
    });
    it("Backstage: should quality increment", function() {
        const shop = new Shop([ new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 15) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).to.equal(16);
        expect(items[0].sellIn).to.equal(14);
    });
    it("Sulfuras:should quality is stable", function() {
        const shop = new Shop([ new Sulfuras("Sulfuras, Hand of Ragnaros", 10, 10) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).to.equal(10);
        expect(items[0].sellIn).to.equal(10);
    });
    it("Sulfuras:should quality is stable even sellin is negative", function() {
        const shop = new Shop([ new Sulfuras("Sulfuras, Hand of Ragnaros", 10, -1) ]);
        const items = shop.updateQuality();
        expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).to.equal(10);
        expect(items[0].sellIn).to.equal(-1);
    });
});