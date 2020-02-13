let arr=[1,2,3,4,5,6,7,7,8,8,9,0,0,0,1,3,3,3,4,22,22]


let results= arr.filter(function(item){

if(item>4)
return item;

})

console.log(results);

console.log(results.length);