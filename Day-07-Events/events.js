const butts = document.querySelector('.butts');
const coolBtn = document.querySelector('.cool');
const buyBtns = document.querySelectorAll('button.buy');
const photoEl = document.querySelector(".photo");

function handleClick() {
  console.log('IT GOT CLICKED!!!!!!!!');
}

butts.addEventListener('click', handleClick);
coolBtn.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);


// buyBtns.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log(`clicked ${button.textContent}`);
    
//   })
// })

const handleByButtonClick = (event) => {
  const button = event.target;
  console.log("You clicked a button");
  // event.stopPropagation();
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
}

buyBtns.forEach(function(button){
  button.addEventListener('click', handleByButtonClick);
})

// window.addEventListener("click", function(event) {
//   console.log("you clicked the window");
//   console.log(event.target);
//   console.log(event.type);
//   console.log(event.bubbles);
// },
// { capture: true }
// );

photoEl.addEventListener("mouseenter", function(e) {
  console.log(e.currentTarget);
  console.log(this);
});