const canvasLength = 500;

function gridGenerator() {
    const button = document.getElementById("button");
    button.remove();
    var gridLength = prompt("Type in grid size (Ex: 16 => 16 x 16)");
    var divNum = Math.pow(gridLength, 2);
    var divSize = canvasLength / gridLength;
    for (i = 0; i < divNum; i++) {
        var div = document.createElement('div');
        div.classList.add("child");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.backgroundColor = 'white';
        
        div.addEventListener("mouseover", function() {
                this.style.backgroundColor = "black";
        });
        
        document.getElementById("grid").appendChild(div);
    }
}

