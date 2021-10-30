var arr = [17, 9, 4, 82, 15, 36];
var arr2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
function calculateAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    return average;
}
console.log("The average of " + arr + " is " + calculateAverage(arr));
console.log("The average of " + arr2 + " is " + calculateAverage(arr2));
