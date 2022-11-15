// Constants definition
const NbrPixels = 960;
let RowNbr = 0;

const Container = document.getElementById("container");
const Input = document.getElementById("NbrInput");

while (isNaN(RowNbr) || RowNbr === 0 || RowNbr > 100) {
    RowNbr = Math.trunc(Number(prompt("How many rows do you want my boy ? - Maximum : 100")));
}

alert(RowNbr);

Container.style.gridTemplateColumns = `repeat(${RowNbr}, ${NbrPixels/RowNbr}px)`;
Container.style.gridAutoRows = `${NbrPixels/RowNbr}px`;

for (let i = 0; i < (RowNbr * RowNbr); i++) {
    const unit = document.createElement("div");
    unit.setAttribute("id", `unit${i}`);
    unit.classList.add("unit");

    unit.addEventListener("mouseover", () => {unit.style.backgroundColor = "red"});

    Container.appendChild(unit);
}