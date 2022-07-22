const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos';


/* 

The for loops require 3 things:
1. an initialization
2. a condition
3. an increment/decrement expression

The initialization will be the starting point reference of the loop. The condition then will be the basis on how many times this loop will run. (Be careful of infinite loops). We can set most of the comparison operators in here. And lastly, the increment/decrement expression is the one responsible of moving along with the loop. This increments/decrements the value in the initialization.

.length property is very useful in using loops. This returns the length of the datatype it is referencing. Often times, we use this property on returning the length of an array, that we may or  may not know the exact length.


The for of loop is fairly new to JS. As wes said, it is used to loop through something 'iterable'. An iterable is anything that has length in it.
Wes also said that 'for of' loops are very useful in Promises. Which i dont have any idea rn 😂.

in the 'for in' loop, we tried to loop through the numbers array. And it only logged the index number instead of index value. The reason of this is we are actually getting the keys and it considered they numbers array as object instead.


While and Do-while loop runs infinitely if the condition supplied returns true.
This loop expects a condition as an argument, that will result a boolean value. After resulting a true, the block will then run and go back to the condition evaluation.

The difference of While-and Do while loop is that the Do-while loop is guaranteed to run atleast once. This is because the block will run first before evaluating the condition. 

*/


for (let i = 0; i<= numbers.length; i++) {
  console.log(numbers[i]);
}
  console.log("FOR OF LOOP");
for (const number of numbers) {
  console.log(number);
}

  console.log("FOR IN LOOP");
for (const number in numbers) {
  console.log(number);
}


const wes = {
  name: 'wes',
  age: 100,
  cool: true
}

for (const prop in wes) {
  console.log(prop);
}

const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1
};


function Human(name) {
  this.name = name;
}


Human.prototype = baseHumanStats;

const wes2 = new Human('wes');
console.log(Object.entries(wes2));

for (const prop in wes2) {
  console.log(prop);
}

let cool = true;
let i = 1;
while (cool === true) {
  console.log('You are cool');
  i++
  if (i > 100) {
    cool = false;
  }
}