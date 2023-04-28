//DOMS
const gridContainer = document.getElementById("grid");
const original = document.createElement('div');
original.className = "col";


//makes grid with divs
function makeGrid(){
    for(let r = 0; r < 16; r++){
        const row = document.createElement('div');
        row.className = "row";
        gridContainer.appendChild(row);
        for(let c = 0; c < 16; c++){
            let clones = original.cloneNode(true);
            clones.addEventListener('mouseover', ()=>{
                clones.style.backgroundColor ='red';
            });
            row.appendChild(clones);
        }
    }
}

//calls grid function
makeGrid();

