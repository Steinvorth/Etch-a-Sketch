//DOMS
const gridContainer = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeGrid(){
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum){
    for(r = 0; r< rowNum; r++){
        let row = document.createElement('div');
        gridContainer.appendChild("row").className = "gridRow";

    }
}

function makeColumns(cellNum){
    for(c = 0; i <rows.length; c++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}