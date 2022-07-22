const toppings = [
      "Mushrooms ",
      "Tomatoes",
      "Eggs",
      "Chili",
      "Lettuce",
      "Avocado",
      "Chiles",
      "Bacon",
      "Pickles",
      "Onions",
      "Cheese",
    ];

    const students = [
      {
        id: "11ce",
        first_name: "Dall",
        last_name: "Puckring",
      },
      {
        id: "2958",
        first_name: "Margarete",
        last_name: "Brandi",
      },
      {
        id: "565a",
        first_name: "Bendicty",
        last_name: "Woodage",
      },
      {
        id: "3a16",
        first_name: "Micki",
        last_name: "Mattes",
      },
      {
        id: "f396",
        first_name: "Flory",
        last_name: "Gladeche",
      },
      {
        id: "de5f",
        first_name: "Jamill",
        last_name: "Emilien",
      },
      {
        id: "54cb",
        first_name: "Brett",
        last_name: "Aizikowitz",
      },
      {
        id: "9135",
        first_name: "Lorry",
        last_name: "Smallman",
      },
      {
        id: "978f",
        first_name: "Gilly",
        last_name: "Flott",
      },
    ];

    const people = [
      {
        birthday: "April 22, 1993",
        names: {
          first: "Keith",
          last: "Buckley",
        },
      },
      {
        birthday: "January 3, 1975",
        names: {
          first: "Larry",
          last: "Heep",
        },
      },
      {
        birthday: "February 12, 1944",
        names: {
          first: "Linda",
          last: "Bermeer",
        },
      },
    ];

    const buns = ["egg", "wonder", "brioche"];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7,
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: "Love the burgs", rating: 4 },
      { comment: "Horrible Service", rating: 2 },
      { comment: "Smoothies are great, liked the burger too", rating: 5 },
      { comment: "Ambiance needs work", rating: 3 },
      { comment: "I DONT LIKE BURGERS", rating: 1 },
    ];

    const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];

    const inventory = [
      { type: "shirt", price: 4000 },
      { type: "pants", price: 4532 },
      { type: "socks", price: 234 },
      { type: "shirt", price: 2343 },
      { type: "pants", price: 2343 },
      { type: "socks", price: 542 },
      { type: "pants", price: 123 },
    ];


let orderTotal = 0;

orderTotals.forEach(order => {
  orderTotal = order + orderTotal;
})


/*
Reduce loops through the array and returns a single item from that array. This method expects 2 arguments; a callback function, and iniitial value.

The callback function parameter comes from the array values. Then after evaluation or doing something in the callback function, that value will be returned and set as the new initial value of the reduce method. Then loop will continue then.


In the callback function, it uses 2 parameters, the previous value, and the current value, respectively. The parameter reference is pointing in the array.


Based on my searching (not too sure tho), reduce is a recursive function. (Recursive functions runs itself on execution).

*/
console.log(orderTotal);

const totalOrder = orderTotals.reduce(tallyNumbers);

function tallyNumbers(tally, currentTotal) {
  console.log(`The current tally is ${tally}`);
  console.log(`The current total is ${currentTotal}`);
  console.log('--------');
  return tally + currentTotal;
}

console.log(totalOrder);


function inventoryReducer(totals, item) {
  console.log(`Looping over ${item.type}`); 
  totals[item.type] = totals[item.type] + 1 || 1;
  return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalPrice = inventory.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);

console.clear();

const text = `
[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
If you were to provide an initialValue as the second argument to reduce(), the result would look like this:
The value returned by reduce() in this case would be 20.
Examples
Sum all the values of an array`;
console.log(text);

const lowercase = char => char.toLowerCase();
const result = text
  .split("")
  .filter(isValid)
  .map(lowercase)
  .reduce(instanceCounter, {})

console.log(result);

function isValid(char) {
  if (char.match(/[a-z0-9]/i)) {
    return true;
  }
  return false;
}

function instanceCounter(count, char) {
  count[char] ? (count[char] = count[char] + 1 ): (count[char] = 1); 
  return count;
}


function sortByValue(a, b) {
  return a[1] - b[1];
}


const sorter = Object.entries(result).sort(sortByValue);

console.log(sorter);