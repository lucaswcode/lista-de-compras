const addItem = document.querySelector("#add-item");
const list = document.querySelector("#list");
const form = document.querySelector("form");
const itemDelete = document.querySelector(".item-delete");
const closeMessage = document.querySelector(".close-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (addItem.value === "") {
    alert("Por favor, adicione um item à lista.");
  } else {
    listItem = document.createElement("li");
    inputItem = document.createElement("input");
    inputItem.type = "checkbox";

    spanItem = document.createElement("span");
    spanItem.textContent = addItem.value;

    iconDelete = document.createElement("img");
    iconDelete.setAttribute("src", "./assets/icons/bin.svg");

    iconDelete.addEventListener("click", () => {
      if (inputItem.checked) {
        itemDelete.classList.remove("hidden");
        listItem.remove();
      } else {
        alert("Selecione o item para removê-lo.");
      }
    });

    listItem.append(inputItem);
    listItem.append(spanItem);
    listItem.append(iconDelete);
    list.append(listItem);
    addItem.value = "";
  }
});

closeMessage.addEventListener("click", () => {
  itemDelete.classList.add("hidden");
});
