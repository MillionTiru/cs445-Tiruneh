const arr = [17,9,4,82,15,36];
const arr2 = [9,4,1,7,2,3,5,8,10,6];
    
function calculateAverage (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum/arr.length;
    let fixed = average.toFixed(2);
    return fixed;

    
}
console.log("The average of " + arr + " is " + calculateAverage(arr));
console.log("The average of " + arr2 + " is " + calculateAverage(arr2));
