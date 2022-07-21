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

    /*
    Looping Methods

    log the topping
    log the next topping if there is one
    log the previous topping if there is one
    if it's the last item in the array, log "goodbye"
  */

function logToppings(topping, index, originalArray) {
  const nextItem = originalArray[index + 1];
  const prevItem = originalArray[index - 1];
  
  console.log(topping);
  nextItem ? console.log("The next item is ", nextItem) : null;
  prevItem ? console.log("The previous item is ", prevItem) : null;
  index === originalArray.length - 1 ? console.log('goodbye') : null
  console.log("----------------- 🍕");
  
  // debugger;
}


toppings.forEach(logToppings);

function addArms(face) {
  return `👋${face}👋`
}

const toys = faces.map(addArms);
console.log(toys);

console.log(faces);

function bosify(name) {
  return `${name} bos`;
}
// function capitalize(word) {
//   return `${word[0].toUppercase()}${word.slice(1)}`;
// }
// const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
// console.log(fullNames);

const taxedTotal = orderTotals.map(total => total * 1.13);
console.log(taxedTotal);


const cleanPeople = people.map((person) => {
  const birthday = new Date(person.birthday).getTime();
  const now = Date.now();
  const age = Math.floor((now - birthday) / 31536000000);
  return {
    age,
    name: `${person.names.first} ${person.names.last}`,
  };
})

console.table(cleanPeople);


const over40 = cleanPeople.filter((person) => {
  return person.age > 40;
})

console.table(over40);

function findById(id) {
  function isStudent(student) {
    return student.id === id;
  }
  return isStudent;
}

const student1 = students.find(findById('565a'));
console.log(student1);


function findByProp(prop, valueLookingfor) {
  return function isStudent(student) {
    return student[prop] === valueLookingfor;
  }
}

const student2 = students.find(findByProp('last_name', 'Puckring'));

console.log(student2);