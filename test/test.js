
const chai = require('chai');
const expect = chai.expect;
const GildedRose = require('../app/app');

describe('gilded Rose Kata Test: \n', () => {
    it('should return input when input is not multiple of 3 and 5', () => {
        let gildedRose = new GildedRose("itmeName", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal('itmeName');
        expect(item.quality).to.equal(9);
        expect(item.sellIn).to.equal(9);
    });
    it("should quality increment if name is Aged Brie", function() {
        let gildedRose = new GildedRose("Aged Brie", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(11);
        expect(item.sellIn).to.equal(9);
    });
    it("should quality increment if name is Backstage passes to a TAFKAL80ETC concert", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(12);
        expect(item.sellIn).to.equal(9);
    });
    it("should for an item, Once the sell by date has passed, Quality degrades twice as fast", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(0); // check this
        expect(item.sellIn).to.equal(-2);
    });
    it("should for an item, The Quality of an item is never negative", function() {
        let gildedRose = new GildedRose("itmeName", 0, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("itmeName");
        expect(item.quality).to.equal(0);
        expect(item.sellIn).to.equal(-2);
    });
    it("should for an item = Aged Brie, actually increases in Quality the older it gets", function() {
        let gildedRose = new GildedRose("Aged Brie", 5, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(6);
        expect(item.sellIn).to.equal(9);
    });
    it("should for an item = Aged Brie and sellIn is negative degrease twice", function() {
        let gildedRose = new GildedRose("Aged Brie", 5, 0);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(7);
        expect(item.sellIn).to.equal(-1);
    });
    it("should for an item = Sulfuras, Hand of Ragnaros quality is stable", function() {
        let gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 10, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(item.quality).to.equal(10);
        expect(item.sellIn).to.equal(10);
    });
    it("when sellIn is negative", function() {
        let gildedRose = new GildedRose("itmeName", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("itmeName");
        expect(item.quality).to.equal(8);
        expect(item.sellIn).to.equal(-2);
    });
    it("should return when name is Backstage passes to a TAFKAL80ETC concert and quality is more than 50", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 49, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(0);
        expect(item.sellIn).to.equal(-2);
    });
    it("should retunr when quality is more than 50", function() {
        let gildedRose = new GildedRose("Aged Brie", 52, 10);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(52);
        expect(item.sellIn).to.equal(9);
    });
    it("should quality increment if name is Backstage passes to a TAFKAL80ETC concert", function() {
        let gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 15, 15);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Backstage passes to a TAFKAL80ETC concert");
        expect(item.quality).to.equal(16);
        expect(item.sellIn).to.equal(14);
    });
    it("when sellIn is negative and name is Sulfuras, Hand of Ragnaros", function() {
        let gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 10, -1);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Sulfuras, Hand of Ragnaros");
        expect(item.quality).to.equal(10);
        expect(item.sellIn).to.equal(-1);
    });
    it("should for an item = Aged Brie and sellIn is negative degrease twice", function() {
        let gildedRose = new GildedRose("Aged Brie", 51, 0);
        const item = gildedRose.updateQuality();
        expect(item.name).to.equal("Aged Brie");
        expect(item.quality).to.equal(51);
        expect(item.sellIn).to.equal(-1);
    });
});