const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos';


for (let i = 0; i<= numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
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