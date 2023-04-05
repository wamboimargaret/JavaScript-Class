const items = [2,3,4,"seed",[7,9]];
const a = new Array(2,3,"seed",true);
console.log(items);
console.log(a)

console.log(items[3]);
console.log(items[4][1]);

//add an item to end of an array//
console.log("PUSH")
items.push(6);
console.log(items);
//start of an array//
console.log("UNSHIFT")
items.unshift("Fruit");
console.log(items);
console.log()
//remove in the end
items.pop();
console.log(items);
//removes at the start
items.shift();
console.log(items);
console.log("SEE")
//Given an array of numbers,retuen an array x with each item multiplied by 4//

let num = [1,3,4,6,9,34];
let x = num.map(function(item){
  return  item * 4
})
console.log(x);

let x1 = [];
num.forEach(function(item){
 x1.push(item * 4)
})

console.log(x1);


//Array concatenation//
let mix = items.concat(num)
console.log(mix);

let b = [false,"false",...num];
console.log(b);

let [z,w,y] = [1,2,3];
console.log({z});
console.log({w});
console.log({y});