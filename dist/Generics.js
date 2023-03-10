"use strict";
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
