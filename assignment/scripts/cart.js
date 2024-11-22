console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log('Basket:', basket);

// let Items = ['kale', 'spinach', 'tacos', 'burritos'];
// for (let index = 0; index < Items.length; index++) {
//  addItem;
// }

function addItem(item) {
    basket.push(item);
    console.log('addItems:', item);
    return true;
}

addItem('Pizza')

addItem('Spaghetti')

addItem('Tacos')

addItem('Onions')

console.log(basket);

function listItems() {
for (let index = 0; index < basket.length; index++) {
    console.log(basket[index]); 
}
}
listItems();

function empty() {
    basket.length = 0;
    console.log(basket);
}

// let basket = []













// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
