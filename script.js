const canvasLength = 500;

function gridGenerator() {
    var gridLength = prompt("Type in grid size (Ex: 16 => 16 x 16)");
    var divNum = Math.pow(gridLength, 2);
    var divSize = canvasLength / gridLength;
    for (i = 0; i < divNum; i++) {
        var div = document.createElement('div');
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.backgroundColor = 'blue';
        document.getElementById("grid").appendChild(div);
    }
}
gridGenerator();

