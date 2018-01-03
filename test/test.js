
const chai = require('chai');
const expect = chai.expect;
const GildedRose = require('../app/app');

describe('gilded Rose Kata Test: \n', () => {
    it('default product: should decrement sellIn & quality', () => {
        let gildedRose = new GildedRose("default product", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal('default product');
        expect(item.quality).to.equal(9);
        expect(item.sellIn).to.equal(9);
    });
    it("default product: should decrement sellIn, The Quality of an item is never negative", function() {
        let gildedRose = new GildedRose("default product", 0, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("default product");
        expect(item.quality).to.equal(0);
        expect(item.sellIn).to.equal(-2);
    });
    it("default product: when sellIn is negative, quality decrease twice", function() {
        let gildedRose = new GildedRose("default product", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("default product");
        expect(item.quality).to.equal(8);
        expect(item.sellIn).to.equal(-2);
    });
    it("Aged Brie: should quality increment & sellIn decrease", function() {
        let gildedRose = new GildedRose("Aged Brie", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(11);
        expect(item.sellIn).to.equal(9);
    });
    it("Aged Brie: should quality degrease twice if sellIn is negative", function() {
        let gildedRose = new GildedRose("Aged Brie", 5, 0);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(7);
        expect(item.sellIn).to.equal(-1);
    });
    it("Aged Brie: when quality is greater than 50", function() {
        let gildedRose = new GildedRose("Aged Brie", 52, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(52);
        expect(item.sellIn).to.equal(9);
    });
    it("Aged Brie: when sellIn is negative and quality is greater than 50", function() {
        let gildedRose = new GildedRose("Aged Brie", 51, 0);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(51);
        expect(item.sellIn).to.equal(-1);
    });
    it("Backstage: should quality increment twice", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(12);
        expect(item.sellIn).to.equal(9);
    });
    it("Backstage: if sellin is negative, quality get null", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(0); // check this
        expect(item.sellIn).to.equal(-2);
    });
    it("Backstage: if sellin is negative, quality get null even quality is more than 50", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 49, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(0);
        expect(item.sellIn).to.equal(-2);
    });
    it("Backstage: should quality increment", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 15, 15);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(16);
        expect(item.sellIn).to.equal(14);
    });
    it("Sulfuras:should quality is stable", function() {
        let gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(item.quality).to.equal(10);
        expect(item.sellIn).to.equal(10);
    });
    it("Sulfuras:should quality is stable even sellin is negative", function() {
        let gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(item.quality).to.equal(10);
        expect(item.sellIn).to.equal(-1);
    });
});