console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item) {
    basket.push(item);
    return true;
}// end addItem();

function listItems() {
    if (basket.length === 0){
        console.log('basket is currently empty');
        return false;
    }
    // console.log(`Full list ${basket}\nItems line by line`);
    // ^THIS^ was used to test full list for clarity instead of line by line.
    for (let item of basket) {
        console.log(item);
    }
}// end listItems

function empty(){
    basket = [];
}


addItem('banana');
addItem('grapes');
addItem('pineapple');
addItem('cheese curds');

listItems();

empty();
listItems();

addItem('poptarts');
addItem('cherry');
addItem('pizza');
addItem('whiskey');
addItem('chicken');
addItem('Doritos');

listItems();

console.log('(expect true)')






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
