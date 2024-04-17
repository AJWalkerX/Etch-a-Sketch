
const container = document.getElementById("grid-container");
const gridResetBtn = document.getElementById("resetGrid");

function createGrid(numSquarePerSide){

    const squareSize = 960 / numSquarePerSide;

    for(let i = 0; i < numSquarePerSide * numSquarePerSide; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    
    //Painting the squares with mouse
    const squares = container.querySelectorAll(".square");
    squares.forEach(squareHover =>{
    squareHover.addEventListener("mouseenter", ()=>{
        squareHover.setAttribute("style", "background: gray");
    });
});
}
gridResetBtn.addEventListener("click", ()=>{
    const numSquarePerSide = prompt("Enter the number of squares per side:");
    if (numSquaresPerSide !== null && !isNaN(numSquaresPerSide) && numSquaresPerSide > 0 && numSquaresPerSide <= 100) {
        createGrid(parseInt(numSquaresPerSide));
      } else {
        alert("Please enter a valid number between 1 and 100.");
      }
});
createGrid(16);



