const canvasLength = 1000;

function userGridLength() {
    gridLength = prompt("Type in grid size (Ex: 16 => 16 x 16)");
    return gridLength;
}

function sizeOfDivs() {
    gridLength = userGridLength();
    divSize = canvasLength / gridLength;
    return divSize;
}

function numOfDivs() {
    gridLength = userGridLength();
    divNum = Math.pow(gridLength, 2);
    return (divNum);
}

function gridGenerator() {
    divNum = numOfDivs();
    divSize = sizeOfDivs();
    for (i = 0; i < divNum; i++) {
    var div = document.createElement("div");
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    document.getElementById("grid").appendChild(div);
    };
}

