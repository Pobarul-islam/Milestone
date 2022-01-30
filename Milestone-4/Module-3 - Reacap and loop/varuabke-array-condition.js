var bootleChor = "yellow"
var waterQuantity = 1;
var isFull = false;

//array

var items = ["bottle", 'samay', 'kamal', 'jamal'];
items.indexOf('samay');
items.push('evaly');
items.push('watch');
items.pop();



//conditionals

if (items.length >= 4) {
    console.log('You have too many stuff on your desk.');
}
else if (items.length == 4) {
    console.log('you only have one hail items');
}
else {
    console.log("kochu khabo bandorbon jabo");
}