//DOMS
const gridContainer = document.getElementById("grid");
const original = document.createElement('div');
original.className = "col";

const clearButton = document.getElementById("clear");
const gridSize = document.getElementById("gridSize");

let userGrid = 100;

gridSize.addEventListener('click', () =>{
    newGrid = prompt("Set a new Grid Size: ", userGrid);
    if (newGrid !== null) { //check if user clicked "cancel"
        newGrid = parseInt(newGrid); //convert input to integer
        if (!isNaN(newGrid) && newGrid > 0 && newGrid <=100) { //check if input is a number greater than 0
            userGrid = newGrid;
            gridContainer.innerHTML = ""; //clear the grid container
            makeGrid(); //create new grid with updated size
        } else {
            alert("Please enter a valid number greater than 0 or less than 100."); //display error message
        }
    }
});

//makes grid with divs
function makeGrid(){
    for(let r = 0; r < userGrid; r++){

        const row = document.createElement('div');
        row.className = "row";
        gridContainer.appendChild(row);

        for(let c = 0; c < userGrid; c++){

            let clones = original.cloneNode(true);
            clones.addEventListener('mouseover', ()=>{
                clones.style.backgroundColor = 'black';
            });

            row.appendChild(clones);

            //clear button
            clearButton.addEventListener('click',() =>{
                clones.style.backgroundColor= 'white';
            });
        }
    }
}

//calls grid function
makeGrid();

