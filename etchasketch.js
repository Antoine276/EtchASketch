// Constants definition
const NbrPixels = 960;

const Container = document.getElementById("container");
const Input = document.getElementById("NbrInput");
const Button = document.getElementById("TableButton");

Button.addEventListener("click", () => BuildNewTable(Input.value));
Input.addEventListener("keypress", (KeyboardEvent) => { if(KeyboardEvent.key == "Enter") {BuildNewTable(Input.value)} });


function BuildNewTable(rownbr)
{
    // Size safeguard
    if(rownbr > 100) {
        alert ("Maximum size : 100 !");
        rownbr = 100;
    }

    Container.style.gridTemplateColumns = `repeat(${rownbr}, ${NbrPixels/rownbr}px)`;
    Container.style.gridAutoRows = `${NbrPixels/rownbr}px`;

    // Cleaning Table
    while (Container.firstChild) {
        Container.removeChild(Container.lastChild);
    }

    for (let i = 0; i < (rownbr * rownbr); i++) {
        const unit = document.createElement("div");
        unit.setAttribute("id", `unit${i}`);
        unit.classList.add("unit");
    
        unit.addEventListener("mouseover", () => {unit.style.backgroundColor = "red"});
    
        Container.appendChild(unit);
    }
}