class Shop {
    constructor(items=[]){
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(function(item) {
            item.updateQuality();
        });
        return this.items;
    }
}

module.exports = Shop;
