// To prevent Auto Spelling Check
let body = document.querySelector("body");
body.spellcheck = false;


//For Menu-Bar Column
let menuBarPtags = document.querySelectorAll(".menu-bar p");
for (let i = 0; i < menuBarPtags.length; i++) {
  menuBarPtags[i].addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
      e.currentTarget.classList.remove("menu-bar-option-selected");
    } else {
      for (let j = 0; j < menuBarPtags.length; j++) {
        if (menuBarPtags[j].classList.contains("menu-bar-option-selected"))
          menuBarPtags[j].classList.remove("menu-bar-option-selected");
      }

      e.currentTarget.classList.add("menu-bar-option-selected");
    }
  });
}


//For Column
let columnTags = document.querySelector(".column-tags");
for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag-cell");
  div.innerText = String.fromCharCode(65 + i);
  columnTags.append(div);
}


//For Row
let rowNumbers = document.querySelector(".row-numbers");
for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-number-cell");
  div.innerText = i;
  rowNumbers.append(div);
}


//For Grid cell
let grid = document.querySelector(".grid");
for (let j = 1; j <= 100; j++) {
  let row = document.createElement("div");
  row.classList.add("row");

   //j = 100
  //i = 0; i + 65 => 65(A)  ==> A100
  //i = 1; i + 65 => 66(B)  ==> B1

  //  Z100

  for (let i = 0; i < 26; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-address", String.fromCharCode(i + 65) + j);

// Ol

    cell.contentEditable = true
    row.append(cell);
  }
  grid.append(row)
}