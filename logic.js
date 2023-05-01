//DOMS
const gridContainer = document.getElementById("grid");
const original = document.createElement('div');
original.className = "col";

const clearButton = document.getElementById("clear");
const gridSize = document.getElementById("color");

let userGrid = 100;

// gridSize.addEventListener('click', () =>{
//     userGrid = prompt("Set a new Grid Size: ", 100);
// });

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

