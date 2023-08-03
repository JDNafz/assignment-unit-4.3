console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
function addItem(item) {
    if (isFull()){
        console.log("basket is full, do not add item")
        return false;
    }
    console.log('pushing',item);
    basket.push(item);
    return true;
}// end addItem();

function empty(){
    basket = [];
}

function isFull(thing){
    //really frustrating that creating isFull automatically calls extra tests that calls isFull behind the scenes. i.e. "Kale", undefined,
    if (basket.length < maxItems) {
        console.log("not full.");
        return false;
    }
    console.log("full",thing);
    return true;
}

function listItems() {
    if (basket.length === 0){
        console.log('basket is currently empty');
        return false;
    }
    // console.log(`Complete list ${basket}\nItems line by line`);
    // ^THIS^ was used to test full list for clarity instead of line by line.
    for (let item of basket) {
        console.log(item);
    }
}// end listItems

function removeItem(item){
    console.log('basket:',basket,"removing", item,".");
    
    let index = basket.indexOf(item);
    let removed = basket[index]
    if (removed == item) {
    basket.splice(index,1);
    console.log('basket after removal:', basket);
    return removed;
    }
    console.log("item not found to remove");
    return null;
}


addItem('banana');
removeItem('cherry');

// addItem('grapes');
// addItem('pineapple');
// addItem('cheese curds');
// addItem('chicken tendies');
// addItem('toilet paper');

// listItems();

// empty();
// listItems();

// addItem('poptarts');
// addItem('cherry');
// addItem('pizza');
// addItem('whiskey');
// addItem('chicken');
// addItem('Doritos');

// listItems();



console.log("------------END OF MY TESTS------------------")

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
