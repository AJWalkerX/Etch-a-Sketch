let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", ()=>{
    createSize(16);

    document.querySelector("body").addEventListener("click",(e)=>{
        if(e.target.tagName != "BUTTON"){
            click = !click;
        }
    });

    const btn_changeSize = document.getElementById("changeGrid");
    btn_changeSize.addEventListener("click", ()=>{
        let size = getSize();
        createSize(size);
    });
})

function createSize(size){
    const container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        container.insertAdjacentElement("beforeend", div);
    }
    let grid = container.children;
    if(grid.length > 0){
        for(let i = 0; i < grid.length; i++){
            grid[i].classList.add("grid");
        }
    }
}

function getSize(){
    let input = prompt("Enter a size of the board, between 2 and 100:");
    let massage = document.getElementById("message");
    if(input !== null && !isNaN(input) && input >= 2 && input <= 100){
        message.innerHTML = "Board size has been updated!"
        return input;
    }
    else{
        alert("Please enter a valid number!");
    }
}

function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if (color == "black"){
            this.style.backgroundColor = "black";
        }
        else if (color == "gray"){
            this.style.backgroundColor = "gray";
        }
        else if (color == "white"){
            this.style.backgroundColor = "white";
        }
    }    

}
function setColor(colorChoice){
    color = colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll(".grid");
    divs.forEach((div) => div.style.backgroundColor = "white");
}