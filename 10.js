let arr= [1,2];
let arrayLike={
    0:"abc",
    [Symbol.isConcatSpreadable]:true
    
};

console.log(arr.concat(arrayLike));