// Constants definition
const iNbrPixels = 960;
const sCaseColor = "green";
const bCaseColorRandom = true;
const iRGBMax = 255;


const eContainer = document.getElementById("container");
const eInput = document.getElementById("NbrInput");
const eButton = document.getElementById("TableButton");

eButton.addEventListener("click", () => fBuildNewTable(eInput.value));
eInput.addEventListener("keypress", (KeyboardEvent) => { if(KeyboardEvent.key == "Enter") {fBuildNewTable(eInput.value)} });


function fBuildNewTable(_iRowNbr)
{
    // Size safeguard
    if(_iRowNbr > 100) {
        alert ("Maximum size : 100 !");
        _iRowNbr = 100;
    }

    eContainer.style.gridTemplateColumns = `repeat(${_iRowNbr}, ${iNbrPixels/_iRowNbr}px)`;
    eContainer.style.gridAutoRows = `${iNbrPixels/_iRowNbr}px`;

    // Cleaning Table
    while (eContainer.firstChild) {
        eContainer.removeChild(eContainer.lastChild);
    }

    for (let i = 0; i < (_iRowNbr * _iRowNbr); i++) {
        const eUnit = document.createElement("div");
        eUnit.setAttribute("id", `unit${i}`);
        eUnit.classList.add("unit");
    
        eUnit.addEventListener("mouseover", () => {fColorCase(eUnit, sCaseColor, bCaseColorRandom)});
    
        eContainer.appendChild(eUnit);
    }
}

function fColorCase(_eUnit, _sColor, _bIndRandomColor)
{
    if (_bIndRandomColor == false)
    {
        _eUnit.style.backgroundColor = _sColor;
    }
    else
    {
        _eUnit.style.backgroundColor = `rgb(${fRandomNumber(iRGBMax)}, ${fRandomNumber(iRGBMax)}, ${fRandomNumber(iRGBMax)})`;
    }
}

function fRandomNumber(_iMax)
{
    return Math.floor(Math.random() * _iMax);
}