const canvasLength = 500;

function gridGenerator() {
    const button = document.getElementById("button");
    clearGrid(); // Clear the grid before generating a new one
    var gridLength = prompt("Type in grid size (Ex: 16 => 16 x 16)");
    var divNum = Math.pow(gridLength, 2);
    var divSize = canvasLength / gridLength;
    for (let i = 0; i < divNum; i++) {
        var div = document.createElement('div');
        div.classList.add("child");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.backgroundColor = 'white';

        div.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });

        document.getElementById("grid").appendChild(div);
    }
}

function clearGrid() {
    const grid = document.getElementById("grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

