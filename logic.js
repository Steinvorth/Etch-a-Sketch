//DOMS
const gridContainer = document.getElementById("grid");
const original = document.createElement('div');
original.className = "col";

const clearButton = document.getElementById("clear");
const gridSize = document.getElementById("gridSize");
const rainbowButton = document.getElementById("rgb");

 // Display the default slider value
const output = document.getElementById("gridValue");
output.innerHTML = gridSize.value;

let userGrid = gridSize.value;

// Update the current slider value (each time you drag the slider handle)
gridSize.oninput = function() {
  output.innerHTML = this.value;
  userGrid = this.value;
  clearGrid();
  makeGrid();
}

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
            
            rainbowButton.addEventListener('click', () =>{
                if(rainbowButton.value == "OFF"){
                    rainbowButton.value = "ON";
                }
                else if(rainbowButton.value == "ON"){
                    rainbowButton.value = "OFF";
                }
            });

        }
    }
}

function clearGrid(){
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
}

//calls grid function
makeGrid();

