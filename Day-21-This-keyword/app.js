const myDate = new Date('August 11, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());
console.log(typeof myDate);
console.log(myDate instanceof Date);

const arr = ['wes', 'kait'];
console.log(typeof arr);
console.log(arr instanceof Array);

const span = document.createElement('span');
console.log(span);

function Pizza(toppings = [], customer, id) {
  console.log('Making a pizza', this);
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}

const pepperoni = new Pizza(['Pepper', 'Onions'], 'wes');

console.log("This is an instance of Pizza", pepperoni);
console.log(pepperoni.constructor);
console.log(pepperoni instanceof Pizza);


const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

function tellMeAboutTheButton() {
  console.log('outside', this)
  setTimeout(() => {
    console.log('inside', this);
    this.textContent = "You Clicked Me";
  }, 1000)
}
button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);