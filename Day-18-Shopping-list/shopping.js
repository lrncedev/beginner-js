const shoppingForm = document.querySelector(`.shopping`);
const list = document.querySelector(`.list`);

//* We'll need an array to hold the state (aka our shopping list items)
let items = [];

function handleSubmit(event) {
  event.preventDefault();

  const name = event.currentTarget.item.value;
  if (!name) {
    return;
  }

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);

  event.currentTarget.reset();
  //? Fire off a custom event to signal our items being updated
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
  const html = items
    .map(
      (item) => `
        <li class="shopping-item">
          <input 
            type="checkbox"
            value="${item.id}"
            ${item.complete ? "checked" : ""}
          />
          <span className="itemName">${item.name}</span>
          <button
            aria-label="Remove ${item.name}"
            value="${item.id}"
          >
            &times;
          </button>
        </li>`,
    )
    .join("");

  list.innerHTML = html;
}

function saveToLocalStorage() {
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem("items"));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function delegateEvents(event) {
  const id = parseInt(event.target.value);
  if (event.target.matches("button")) {
    deleteItem(id);
  }
  if (event.target.matches(`input[type="checkbox"]`)) {
    markAsComplete(id);
  }
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", saveToLocalStorage);
list.addEventListener("click", delegateEvents);
window.addEventListener("load", restoreFromLocalStorage);