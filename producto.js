class Producto {
    constructor(...info) {
        this.sku = info[0];
        this.title = info[1];
        this.price = Number (info[2]);
    }
    getSku() {
        return this.sku;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
}
