var skycolor = 'white'

var phones = ['apple', 'samsung', 'walton', 'htc', 'oppo'];
phones[3] = xiomi;

// check oppo exists in an array

if (phones.indexOf('oppo') == -1) {
    console.log('opps! amir khan oppo is missing');
}

// if lg is available
if (phones.indexOf('lg') != -1) {
    console.log('lg is available');
}

// loop

var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++){

}

// function 
function addThreeNum(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
addThreeNum(88, 44, 55);

// objects 
var microphone = {
    brand: 'blue yeti',
    price: 334,
    color: 'black'
}
