// Write a function to find the average value in an array of numbers
function avg(arr){
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total = (total / arr.length);
}


let average1 = avg([0,50]); //25
let average2 = avg([75,76,80,95,100]) //85.2

console.log(`Average of 0,50 is ${average1}
Average of 75,76,80,95,100 is ${average2}`);