// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++){
//     console.log(i);
//     if (i>8) {
//         break;
//     }
// }

var numbers = [34, 44, 55, 66, 77, 88, 99];
// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90) {
//         break;
//     }
// }

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}