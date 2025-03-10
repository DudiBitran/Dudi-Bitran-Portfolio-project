const list = document.querySelector("ul");
const inputItem = document.querySelector("#item");
const btn = document.querySelector("button");

// Load items from localStorage
//checking if the the localStorage is empty and put a clear array instead
const items = JSON.parse(localStorage.getItem("items")) || [];
items.forEach(addItemToList);

btn.addEventListener("click", () => {
  const newItem = inputItem.value.trim();

  if (newItem === "") {
    alert("Please Enter an Item!");
  } else if (items.includes(newItem)) {
    alert("Item already added!");
  } else {
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    addItemToList(newItem);
    inputItem.value = "";
    inputItem.focus();
  }
});

function addItemToList(itemText) {
  const itemList = document.createElement("li");
  itemList.textContent = itemText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("itemBtn");
  deleteBtn.textContent = "Delete";

  itemList.appendChild(deleteBtn);
  list.appendChild(itemList);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(itemList);
    removeFromLocalStorage(itemText);
  });
}

//this function remove the item from the array in the localStorage
function removeFromLocalStorage(itemText) {
  const index = items.indexOf(itemText);
  //checking if the item is existing in the array
  if (index > -1) {
    //taking the location in the array and delete only 1 item
    items.splice(index, 1);
    //update the localStorgae after the changes
    localStorage.setItem("items", JSON.stringify(items));
  }
}
