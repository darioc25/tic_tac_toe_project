const tableCell = document.querySelectorAll(".table-cell");
const playerTurn = document.querySelector(".player-turn");
const userAlert = document.querySelector(".user-alert");
const userAlertText = document.querySelector(".user-alert-text");
const restartBtn = document.querySelector("#restart-game");
const scoreNumber = document.querySelector(".score-number");

function winCheck() {
    // Rows Check
    if(tableCell[0].classList.length == 2 && tableCell[1].classList.length == 2 && tableCell[2].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[1].classList[1]) && (tableCell[1].classList[1] == tableCell[2].classList[1])) {
            return [true, tableCell[0].classList[1]];
        }
    }

    if(tableCell[3].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[5].classList.length == 2) {
        if((tableCell[3].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[5].classList[1])){
            return [true, tableCell[3].classList[1]];
        }
    }

    if(tableCell[6].classList.length == 2 && tableCell[7].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[6].classList[1] == tableCell[7].classList[1]) && (tableCell[7].classList[1] == tableCell[8].classList[1])){
            return [true, tableCell[6].classList[1]];
        }
    }

    // Columns Check
    if(tableCell[0].classList.length == 2 && tableCell[3].classList.length == 2 && tableCell[6].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[3].classList[1]) && (tableCell[3].classList[1] == tableCell[6].classList[1])) {
            return [true, tableCell[0].classList[1]];
        }
    }

    if(tableCell[1].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[7].classList.length == 2) {
        if((tableCell[1].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[7].classList[1])) {
            return [true, tableCell[1].classList[1]];
        }
    }

    if(tableCell[2].classList.length == 2 && tableCell[5].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[2].classList[1] == tableCell[5].classList[1]) && (tableCell[5].classList[1] == tableCell[8].classList[1])) {
            return [true, tableCell[2].classList[1]];
        }
    }

    // Diagonals Check
    if(tableCell[0].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[8].classList.length == 2) {
        if((tableCell[0].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[8].classList[1])) {
            return [true, tableCell[0].classList[1]];
        }
    }

    if(tableCell[2].classList.length == 2 && tableCell[4].classList.length == 2 && tableCell[6].classList.length == 2) {
        if((tableCell[2].classList[1] == tableCell[4].classList[1]) && (tableCell[4].classList[1] == tableCell[6].classList[1])) {
            return [true, tableCell[2].classList[1]];
        }
    }

    // No Matches
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
let crossScore = 0;
let circleScore = 0;
let win = false;

tableCell.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(!isFullCheck(tableCell) && !winCheck()[0]) {
            if(cell.classList.length == 1) {
                if(player == Move[0]) {
                    cell.classList.add(Move[0]);
                    player = Move[1];
                } else {
                    cell.classList.add(Move[1]);
                    player = Move[0];
                }
                if(winCheck()[0]) {
                    setTimeout(() => {
                        userAlert.classList.remove("no-render");
                        userAlert.classList.add("render");
                        if(winCheck()[1] == "cross") {
                            userAlertText.innerHTML = "❌ is the winner!";
                            crossScore++;
                        } else {
                            userAlertText.innerHTML = "⭕ is the winner!";
                            circleScore++;
                        }
                        scoreNumber.innerHTML = `${crossScore} : ${circleScore}`;
                    }, 100);
                    win = true;
                }
            } else {
                alert("Already taken!")
            }
        }
        if (!win && isFullCheck(tableCell)){
            setTimeout(() => {
                userAlert.classList.remove("no-render");
                userAlert.classList.add("render");
                userAlertText.innerHTML = "It's a draw 😭";
            }, 100);
        }
        if(player == Move[0]) {
            playerTurn.innerHTML = "❌ is your turn!";
        } else {
            playerTurn.innerHTML = "⭕ is your turn!";
        }
    });
});

restartBtn.addEventListener("click", () => {
    tableCell.forEach((cell) => {
        if(cell.classList[1] == "cross") {
            cell.classList.remove("cross");
        } else if(cell.classList[1] == "circle") {
            cell.classList.remove("circle");
        }
    });
    win = false;
    player = Move[0];
    userAlert.classList.add("no-render");
    playerTurn.innerHTML = "Make a move!";
});