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
let timer;

// Update the current slider value (each time you drag the slider handle)
gridSize.oninput = function() {
  output.innerHTML = gridSize.value;
  userGrid = gridSize.value;
  clearGrid();
  clearTimeout(timer);
  timer = setTimeout(makeGrid, 500);
  
}

//makes grid with divs
function makeGrid(){

    for(let r = 0; r < userGrid; r++){

        const row = document.createElement('div');
        row.className = "row";
        gridContainer.appendChild(row);

        for(let c = 0; c < userGrid; c++){

            let clones = original.cloneNode(true);

            rainbowButton.addEventListener('onclick', toggle);
            
            clones.addEventListener('mouseover', ()=>{
                if(rainbowButton.value == "OFF"){
                    clones.style.backgroundColor = 'black';
                }
                else{
                    let red, green, blue;
                    clones.style.backgroundColor = randomColor();
                }
                
            });

            row.appendChild(clones);
            
            //clear button
            clearButton.addEventListener('click',() =>{
                clones.style.backgroundColor = 'white';
            });
        }
    }
}

function clearGrid(){
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
}

function toggle(button){
    if(button.value == "OFF"){
        button.value = "ON";
    }
    else{
        button.value = "OFF";
    }
}

function randomColor(){
    let black = Math.floor(Math.random()*10);
    
    if(black === 0){
        return "rgb(0,0,0)"
    }
    else{
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }    
}
//calls grid function
makeGrid();

