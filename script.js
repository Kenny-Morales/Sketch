const canvasLength = 1000;

function userGridLength() {
    gridLength = prompt("Type in a grid size");
    return gridLength;
}

function sizeOfDivs() {
    gridLength = userGridLength();
    divSize = canvasLength / gridLength;
    return divSize;
}


