//d. Given a list of products with prices, create a new array with products that cost more than $50.

let arr = [1,2,3,50,70,80,90];
let newArr = [];

let result = arr.filter(function(value){
    if(value >= 50){

        newArr.push(value);
    }
});
// console.log(newArr);
//

const ages = [10,20,30,40,50,60];
let myFilter = ages.filter(ageFilter);
console.log(myFilter);

function ageFilter(age){
    return age >= 30;
}
