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

const numbers = [1, 2, 3, 4, 5];

[...'wes'];
Array.of(...'wes');
// console.log([...'wes']);

Array.from({ length: 10 })


/*
Static Methods
*/

// Make a function that creates a range from x to y with Array.from();
function createRange(x,y) {
  const range = Array.from({ length: y - x + 1}, (item, index) => {
  return index + x;
  });

  return range;
}

const rangeXtoY = createRange(3, 12);


// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(rangeXtoY));


// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(([key, value]) => {
  console.log(key, value);
})

/*
Instance Methods
*/

// Display all bun types with " or " - use join()

console.log(buns.join());

console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = "hot dogs, hamburgers, sausages, corn";
console.log(foodString.split(','));

// take the last item off toppings with pop()
const lastItem = toppings.pop();
console.log(lastItem);
// add it back with push()
toppings.push(lastItem);
// console.log(toppings);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
// console.log(firstItem);
// add it back in with unshift()
toppings.unshift(firstItem);
// console.log(toppings);

// Do the last four,but immutable (with spreads and new variables)

// Make a copy of the toppings array with slice()
let toppingSlice = toppings.slice(0);
console.log(toppingSlice.length);

// Make a copy of the toppings array with a spread
const spreadTopping = [...toppings]
console.log(spreadTopping);

// take out items 3 to 5 of your new toppings array with splice()
const takeOut = toppingSlice.slice(3, 5);
console.log(takeOut);

// find the index of Avocado with indexOf() / lastIndexOf()
console.log(toppingSlice.indexOf('Avocado'));
const wes = { name: "wes" };
const people = [{ name: "scott" }, wes];
console.log(people.indexOf(wes));
// Check if hot sauce is in the toppings with includes()
const hasHotSauce = toppingSlice.includes('hot sauce');

if (!hasHotSauce) {
  const reversed = [...toppingSlice].reverse();
  console.log("Original Sliced Copy", toppingSlice);
  console.log("Spead reverse", reversed);
}
// add it if it's not
// flip those toppings around with reverse()
console.log(hasHotSauce);


/*
Callback Methods
*/

console.log("THIS IS FROM THE CALL BACK METHDOS");

// find the first rating that talks about a burger with find()

console.log(feedback.find((singleFeedback) => singleFeedback.comment.includes("burg")));

// find all ratings that are above 2 with filter()
console.log('find all ratings that are above 2 with filter');

console.table(feedback.filter(rate => rate.rating > 2));

// find all ratings that talk about a burger with filter()
console.log(feedback.filter(talk => talk.comment.includes('burg')));

// Remove the one star rating however you like!
console.table(feedback.filter(review => review.rating !== 1))


// check if there is at least 5 of one type of meat with some()

const hasEnoughMeat = Object.values(meats).some(meatValue => meatValue > 5);

console.log(hasEnoughMeat);

// make sure we have at least 3 of every meat with every()
const enoughMeat = Object.values(meats).every(meatValue => meatValue > 3);
console.log(enoughMeat);
// sort the toppings alphabetically with sort()
console.log([...toppings].sort());
// sort the order totals from most expensive to least with .sort()
console.log([...orderTotals].sort((firstItem, nextItem) => nextItem - firstItem));
// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(function (a, b) {
  const aPrice = a[1];
  const bPrice = b[1];
  debugger;
  return bPrice - aPrice;
})

Object.fromEntries(productsSortedByPrice);
/*
Looping Methods (next)
*/