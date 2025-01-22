//c. Create a function that takes an array of numbers and returns the sum of all numbers.

const arr= [1,2,1,1]

function sumOfArr(elements){
    let sum = 0;
    for(let i=0 ; i<=arr.length-1 ; i++){
        sum = sum + elements[i];
    }
    console.log(sum);
    
}
sumOfArr(arr)


////------------------------sort string------------

const str = ["jaydeep" , "AS" , "gajera","vijaybhai"];

str.push("myname");
console.log(str);
str.pop()
console.log(str);
str.unshift("unshift");
console.log(str);
str.shift("unshift");
console.log(str);
str.reverse();
console.log(str);




