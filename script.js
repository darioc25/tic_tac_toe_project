const tableCell = document.querySelectorAll(".table-cell");
const playerTurn = document.querySelector(".player-turn");
const userAlert = document.querySelector(".user-alert");

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

function isFullCheck(arr) {
    let counter = 0;
    arr.forEach((cell) => {
        if(cell.classList.length == 2) {
            counter++;
        }
    });
    return ((counter == arr.length) ? true : false);
}

const Move = new Array("cross", "circle");
let player = Move[0];

tableCell.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(!isFullCheck(tableCell) && !winCheck()) {
            if(cell.classList.length == 1) {
                if(player == Move[0]) {
                    cell.classList.add(Move[0]);
                    player = Move[1];
                } else {
                    cell.classList.add(Move[1]);
                    player = Move[0];
                }
                if(winCheck()) {
                    setTimeout(() => {
                        userAlert.classList.add("render");
                        userAlert.innerHTML = "<h1>You won 🎉</h1>";
                    }, 100);
                }
            } else {
                alert("Already taken!")
            }
        }
        if (isFullCheck(tableCell)){
            setTimeout(() => {
                userAlert.classList.add("render");
                userAlert.innerHTML = "<h1>It's a draw 😭</h1>";
            }, 100);
        }
        if(player == Move[0]) {
            playerTurn.innerHTML = "❌ is your turn!";
        } else {
            playerTurn.innerHTML = "⭕ is your turn!";
        }
    });
});