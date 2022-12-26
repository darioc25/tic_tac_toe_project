let tableCell = document.querySelectorAll(".table-cell");

function winCheck() {
    // Rows Check
    if(tableCell[0].classList.length == 2 && tableCell[1].classList.length == 2 && tableCell[2].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[1].classList[1]) && (tableCell[1].classList[1] == tableCell[2].classList[1])) {
            console.log("1° Row");
            return true;
        }
    }

    if(tableCell[3].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[5].classList.length == 2) {
        if((tableCell[3].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[5].classList[1])){
            console.log("2° Row");
            return true;
        }
    }

    if(tableCell[6].classList.length == 2 && tableCell[7].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[6].classList[1] == tableCell[7].classList[1]) && (tableCell[7].classList[1] == tableCell[8].classList[1])){
            console.log("3° Row");
            return true;
        }
    }

    // Columns Check
    if(tableCell[0].classList.length == 2 && tableCell[3].classList.length == 2 && tableCell[6].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[3].classList[1]) && (tableCell[3].classList[1] == tableCell[6].classList[1])) {
            console.log("1° Column");
            return true;
        }
    }

    if(tableCell[1].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[7].classList.length == 2) {
        if((tableCell[1].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[7].classList[1])) {
            console.log("2° Column");
            return true;
        }
    }

    if(tableCell[2].classList.length == 2 && tableCell[5].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[2].classList[1] == tableCell[5].classList[1]) && (tableCell[5].classList[1] == tableCell[8].classList[1])) {
            console.log("3° Column");
            return true;
        }
    }

    // Diagonals Check
    if(tableCell[0].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[8].classList[1])) {
            console.log("1° Diagonal");
            return true;
        }
    }

    if(tableCell[2].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[6].classList.length == 2) {
        if((tableCell[2].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[6].classList[1])) {
            console.log("2° Diagonal");
            return true;
        }
    }

    // No Matches
    console.log("No matches");
    return false;
}

function fullCheck() {
    let counter = 0;
    tableCell.forEach((cell) => {
        if(cell.classList.length == 2) {
            counter++;
        }
    });
    return ((counter == tableCell.length) ? true : false);
}

function isEmpty(arr) {
    if(arr.length == 1) {
        return true;
    } else {
        return false;
    }
}

tableCell.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.classList.add("cross");
    });
})

let move = ["cross", "circle"]

while(!winCheck() && !fullCheck()) {
    let randNum1 = Math.floor(Math.random() * 2);
    let randNum2 = Math.floor(Math.random() * 9);
    while(!isEmpty(tableCell[randNum2].classList)) {
        randNum2 = Math.floor(Math.random() * 9);
    }
    tableCell[randNum2].classList.add(move[randNum1]);
}