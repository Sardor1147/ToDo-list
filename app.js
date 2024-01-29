let del = document.getElementById("delete");
let edit = document.getElementById("edit");
let form = document.getElementById("form");
let list = document.getElementById("list");
let item = document.getElementById("item");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let inputValue = evt.target[0].value;

  let item = document.createElement("li");
  item.className = "item";
  list.appendChild(item);

  let txt = document.createElement("p");
  txt.textContent = inputValue;
  item.appendChild(txt);

  let button = document.createElement("button");
  button.textContent = "delete";
  button.className = "delete";
  item.appendChild(button);

  let btn = document.createElement("button");
  btn.textContent = "edit";
  btn.className = "edit";
  item.appendChild(btn);

  evt.target[0].value = null;

  button.addEventListener("click", (evt) => {
    item.remove();
  });

  btn.addEventListener("click", (evt) => {
    txt.contentEditable = true;
    btn.textContent = "done";

    if (txt.className != "yellow") {
      txt.className = "yellow";
    } else {
      txt.className = "item__txt";
      btn.textContent = "edit";
      txt.contentEditable = false;
    }
  });
});

del.addEventListener("click", (evt) => {
  item.remove();
});

edit.addEventListener("click", function () {
  let book = document.getElementById("book");
  book.contentEditable = true;
  edit.textContent = "done";

  if (book.className != "yellow") {
    book.className = "yellow";
  } else {
    book.className = "item__txt";
    edit.textContent = "edit";
    book.contentEditable = false;
  }
});
// if (window.location.reload() = true) {
//   confirm('hello')

// }
