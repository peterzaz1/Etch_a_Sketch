const container = document.querySelector(".container");

let col = parseInt(prompt("colums"));
let rows = parseInt(prompt("rows"));

for (let i = 0; i < col; i++) {
  let div = document.createElement("div");
  div.classList.add("cont");
  for (let j = 0; j < rows; j++) {
    let childDiv = document.createElement("childDiv");
    childDiv.classList.add("color-box");
    div.appendChild(childDiv);
  }
  container.appendChild(div);
}

const divs = document.querySelectorAll(".color-box");

divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.background = "blue";
  });
});
