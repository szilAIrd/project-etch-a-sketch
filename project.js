// Grid size is 16x16
let gridX = 16;
let gridY = 16;

function createGrid(){
    const container = document.createElement("div")
    container.classList.add("container");


    for (let i=1;i<=gridX**2;i++){
        const gridElement = document.createElement("div")
        gridElement.classList.add("gridElement")
        gridElement.addEventListener("mouseover", setBlack)

        container.appendChild(gridElement)
    }

    bodyElement = document.body;
    bodyElement.appendChild(container)
    return (`Grid ${gridX}x${gridX} was created!`, container)
}

function setBlack(e){
    e.currentTarget.style.backgroundColor="black"
}



createGrid()