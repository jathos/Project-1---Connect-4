//******WORKING VARIABLES******
const mainBoard = document.getElementById('mainBoard');
const columnADOM = document.getElementById('columnA');
const columnBDOM = document.getElementById('columnB');
const columnCDOM = document.getElementById('columnC');
const columnDDOM = document.getElementById('columnD');
const columnEDOM = document.getElementById('columnE');
const columnFDOM = document.getElementById('columnF');
const columnGDOM = document.getElementById('columnG');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');
const e5 = document.getElementById('e5');
const e6 = document.getElementById('e6');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');
const g6 = document.getElementById('g6');
let playerTurn = "red";
let columnAHeight = 0;
let columnBHeight = 0;
let columnCHeight = 0;
let columnDHeight = 0;
let columnEHeight = 0;
let columnFHeight = 0;
let columnGHeight = 0;
const columnA = [a1, a2, a3, a4, a5, a6];
const columnB = [b1, b2, b3, b4, b5, b6];
const columnC = [c1, c2, c3, c4, c5, c6];
const columnD = [d1, d2, d3, d4, d5, d6];
const columnE = [e1, e2, e3, e4, e5, e6];
const columnF = [f1, f2, f3, f4, f5, f6];
const columnG = [g1, g2, g3, g4, g5, g6];
let playerRedMoves = [];
let playerBlueMoves = [];
const allVerticalWinConditions = [
    "a1a2a3a4", "a2a3a4a5", "a3a4a5a6",
    "b1b2b3b4", "b2b3b4b5", "b3b4b5b6",
    "c1c2c3c4", "c2c3c4c5", "c3c4c5c6",
    "d1d2d3d4", "d2d3d4d5", "d3d4d5d6",
    "e1e2e3e4", "e2e3e4e5", "e3e4e5e6",
    "f1f2f3f4", "f2f3f4f5", "f3f4f5f6",
    "g1g2g3g4", "g2g3g4g5", "g3g4g5g6",
];
const allHorizontalWinConditions = [
    "a1b1c1d1", "b1c1d1e1", "c1d1e1f1", "d1e1f1g1",
    "a2b2c2d2", "b2c2d2e2", "c2d2e2f2", "d2e2f2g2",
    "a3b3c3d3", "b3c3d3e3", "c3d3e3f3", "d3e3f3g3",
    "a4b4c4d4", "b4c4d4e4", "c4d4e4f4", "d4e4f4g4",
    "a5b5c5d5", "b5c5d5e5", "c5d5e5f5", "d5e5f5g5",
    "a6b6c6d6", "b6c6d6e6", "c6d6e6f6", "d6e6f6g6",
];
//these variables are all possible diagonal win combinations
const columnADiagonalStarts = ["a1", "a2", "a3", "a4", "a5", "a6"];
const columnADiagonalWins = [
    ["b2", "c3", "d4"],
    ["b3", "c4", "d5"],
    ["b4", "c5", "d6"],
    ["b3", "c2", "d1"],
    ["b4", "c3", "d2"],
    ["b5", "c4", "d3"]
];
const columnBDiagonalStarts = ["b1", "b2", "b3", "b4", "b5", "b6", "b5", "b2", "b3", "b3", "b4", "b4"];
const columnBDiagonalWins = [
    ["c2", "d3", "e4"],
    ["c3", "d4", "e5"],
    ["c4", "d5", "e6"],
    ["c3", "d2", "e1"],
    ["c4", "d3", "e2"],
    ["c5", "d4", "e3"],
    ["a6", "c4", "d3"],
    ["a1", "c3", "d4"],
    ["a4", "c2", "d1"],
    ["a2", "c4", "d5"],
    ["a3", "c5", "d6"],
    ["a5", "c3", "d2"]
];
const columnCDiagonalStarts = ["c1", "c2", "c3", "c4", "c5", "c6", "c2", "c2", "c3", "c3", "c3", "c3", "c4", "c4", "c4", "c4", "c5", "c5"];
const columnCDiagonalWins = [
    ["d2", "e3", "f4"],
    ["d3", "e4", "f5"],
    ["d4", "e5", "f6"],
    ["d3", "e2", "f1"],
    ["d4", "e3", "f2"],
    ["d5", "e4", "f3"],
    ["b1", "d3", "e4"],
    ["d1", "b3", "a4"],
    ["e5", "d4", "b2"],
    ["d4", "b2", "a1"],
    ["a5", "b4", "d2"],
    ["b4", "d2", "e1"],
    ["a6", "b5", "d3"],
    ["b5", "d3", "e2"],
    ["e6", "d5", "b3"],
    ["d5", "b3", "a2"],
    ["b6", "d4", "e3"],
    ["d6", "b4", "a3"]
];
const columnDDiagonalStarts = ["d1", "d2", "d3", "d1", "d2", "d3", "d4", "d5", "d6", "d4", "d5", "d6", "d2", "d2", "d3", "d3", "d3", "d3", "d4", "d4", "d4", "d4", "d5", "d5"];
const columnDDiagonalWins = [
    ["e2", "f3", "g4"],
    ["e3", "f4", "g5"],
    ["e4", "f5", "g6"],
    ["c2", "b3", "a4"],
    ["c3", "b4", "a5"],
    ["c4", "b5", "a6"],
    ["e3", "f2", "g1"],
    ["e4", "f3", "g2"],
    ["e5", "f4", "g3"],
    ["c3", "b2", "a1"],
    ["c4", "b3", "a2"],
    ["c5", "b4", "c5"],
    ["e1", "c3", "b4"],
    ["c1", "e3", "f4"],
    ["f1", "e2", "c4"],
    ["e2", "c4", "b5"],
    ["f5", "e4", "c2"],
    ["e4", "c2", "b1"],
    ["f6", "e5", "c3"],
    ["e5", "c3", "b2"],
    ["b6", "c5", "e3"],
    ["c5", "e3", "f2"],
    ["e6", "c4", "b3"],
    ["c6", "e4", "f3"]
];
const columnEDiagonalStarts = ["e1", "e2", "e3", "e4", "e5", "e6", "e2", "e2", "e3", "e3", "e3", "e3", "e4", "e4", "e4", "e4", "e5", "e5"];
const columnEDiagonalWins = [
    ["d2", "c3", "b4"],
    ["d3", "c4", "b5"],
    ["d4", "c5", "b6"],
    ["d3", "c2", "b1"],
    ["d4", "c3", "b2"],
    ["d5", "c4", "b3"],
    ["d1", "f3", "g4"],
    ["f1", "d3", "c4"],
    ["c5", "d4", "f2"],
    ["d4", "f2", "g1"],
    ["g5", "f4", "d2"],
    ["f4", "d2", "c1"],
    ["c6", "d5", "f3"],
    ["d5", "f3", "g2"],
    ["g6", "f5", "d3"],
    ["f5", "d3", "c2"],
    ["d6", "f4", "g3"],
    ["f6", "d4", "c3"]
];
const columnFDiagonalStarts = ["f1", "f2", "f3", "f4", "f5", "f6", "f2", "f3", "f3", "f4", "f4", "f5"];
const columnFDiagonalWins = [
    ["e2", "d3", "c4"],
    ["e3", "d4", "c5"],
    ["e4", "d5", "c6"],
    ["e3", "d2", "c1"],
    ["e4", "d3", "c2"],
    ["e5", "d4", "c3"],
    ["g1", "e3", "d4"],
    ["g4", "e2", "d1"],
    ["g2", "f4", "d5"],
    ["g5", "e3", "d2"],
    ["g3", "e5", "d6"],
    ["g6", "e4", "d3"]
];
const columnGDiagonalStarts = ["g1", "g2", "g3", "g4", "g5", "g6"];
const columnGDiagonalWins = [
    ["f2", "e3", "d4"],
    ["f3", "e4", "d5"],
    ["f4", "e5", "d6"],
    ["f3", "e2", "d1"],
    ["f4", "e3", "d2"],
    ["f5", "e4", "d3"]
];

currentBackground = "crateria";
playerImage = "url('css/samuslogo.jpg')"

//these variables are used in the showWinScreen function
const winScreenContainer = document.getElementById('wincontainer');
const winScreenMessage = document.getElementById('winmessage');
// const leftSupport = document.getElementById('leftsupport');
// const rightSupport = document.getElementById('rightsupport');




//******FUNCTIONS********

//these function check for vertical wins only
function checkPlayerBlueVerticalWin() {
    let turnMovesToString = playerBlueMoves.join("");
    for (const ele of allVerticalWinConditions) {
        let winOrNo = turnMovesToString.includes(ele);
        if (winOrNo == true) {
            return showWinScreen();
        }
    };
};

function checkPlayerRedVerticalWin() {
    let turnMovesToString = playerRedMoves.join("");
    for (const ele of allVerticalWinConditions) {
        let winOrNo = turnMovesToString.includes(ele);
        if (winOrNo == true) {
            return showWinScreen();
        }
    };
};

//this function allows the vertical win condition function to work
function sortToCheckHorizontalWin() {
    if (playerTurn == "blue") {
        let swapLetters = playerBlueMoves.map(function (ele) {
            let newElement = `${ele[1]}${ele[0]}`;
            return newElement;
        });
        swapLetters.sort();
        let completedSort = swapLetters.map(function (ele) {
            let newerElement = `${ele[1]}${ele[0]}`;
            return newerElement;
        });
        return completedSort;
    } else {
        let swapLetters = playerRedMoves.map(function (ele) {
            let newElement = `${ele[1]}${ele[0]}`;
            return newElement;
        });
        swapLetters.sort();
        let completedSort = swapLetters.map(function (ele) {
            let newerElement = `${ele[1]}${ele[0]}`;
            return newerElement;
        });
        return completedSort;
    }
};

//these functions check for horizontal wins only
function checkPlayerRedHorizontalWin() {
    playerRedMoves = sortToCheckHorizontalWin();
    let turnMovesToString = playerRedMoves.join("");
    for (const ele of allHorizontalWinConditions) {
        let winOrNo = turnMovesToString.includes(ele);
        if (winOrNo == true) {
            return showWinScreen();
        }
    };
};

function checkPlayerBlueHorizontalWin() {
    playerBlueMoves = sortToCheckHorizontalWin();
    let turnMovesToString = playerBlueMoves.join("");
    for (const ele of allHorizontalWinConditions) {
        let winOrNo = turnMovesToString.includes(ele);
        if (winOrNo == true) {
            return showWinScreen();
        }
    };
};

//these functions check for diagonal wins according to column
function checkColumnADiagonalWinBlue() {
    for (i = 0; i < columnADiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnADiagonalStarts[i])) {
            let winOrNot = columnADiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnADiagonalWinRed() {
    for (i = 0; i < columnADiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnADiagonalStarts[i])) {
            let winOrNot = columnADiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnBDiagonalWinBlue() {
    for (i = 0; i < columnBDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnBDiagonalStarts[i])) {
            let winOrNot = columnBDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnBDiagonalWinRed() {
    for (i = 0; i < columnBDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnBDiagonalStarts[i])) {
            let winOrNot = columnBDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnCDiagonalWinBlue() {
    for (i = 0; i < columnCDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnCDiagonalStarts[i])) {
            let winOrNot = columnCDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnCDiagonalWinRed() {
    for (i = 0; i < columnCDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnCDiagonalStarts[i])) {
            let winOrNot = columnCDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnDDiagonalWinBlue() {
    for (i = 0; i < columnDDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnDDiagonalStarts[i])) {
            let winOrNot = columnDDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnDDiagonalWinRed() {
    for (i = 0; i < columnDDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnDDiagonalStarts[i])) {
            let winOrNot = columnDDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnEDiagonalWinBlue() {
    for (i = 0; i < columnEDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnEDiagonalStarts[i])) {
            let winOrNot = columnEDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnEDiagonalWinRed() {
    for (i = 0; i < columnEDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnEDiagonalStarts[i])) {
            let winOrNot = columnEDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnFDiagonalWinBlue() {
    for (i = 0; i < columnFDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnFDiagonalStarts[i])) {
            let winOrNot = columnFDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnFDiagonalWinRed() {
    for (i = 0; i < columnFDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnFDiagonalStarts[i])) {
            let winOrNot = columnFDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnGDiagonalWinBlue() {
    for (i = 0; i < columnGDiagonalStarts.length; i++) {
        if (playerBlueMoves.includes(columnGDiagonalStarts[i])) {
            let winOrNot = columnGDiagonalWins[i].every(function (ele) {
                return playerBlueMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};

function checkColumnGDiagonalWinRed() {
    for (i = 0; i < columnGDiagonalStarts.length; i++) {
        if (playerRedMoves.includes(columnGDiagonalStarts[i])) {
            let winOrNot = columnGDiagonalWins[i].every(function (ele) {
                return playerRedMoves.includes(ele);
            })
            if (winOrNot == true) {
                showWinScreen();
            } else {
                i + 1;
            }
        } else {
            i + 1;
        }
    }
};


//these functions log the move that the player just selected, then sorts the playermove array
function logPlayerMoveColumnA() {
    if (playerTurn == "red") {
        let moveChosen = columnA[columnAHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnA[columnAHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnB() {
    if (playerTurn == "red") {
        let moveChosen = columnB[columnBHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnB[columnBHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnC() {
    if (playerTurn == "red") {
        let moveChosen = columnC[columnCHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnC[columnCHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnD() {
    if (playerTurn == "red") {
        let moveChosen = columnD[columnDHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnD[columnDHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnE() {
    if (playerTurn == "red") {
        let moveChosen = columnE[columnEHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnE[columnEHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnF() {
    if (playerTurn == "red") {
        let moveChosen = columnF[columnFHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnF[columnFHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

function logPlayerMoveColumnG() {
    if (playerTurn == "red") {
        let moveChosen = columnG[columnGHeight].getAttribute('id');
        playerRedMoves.push(moveChosen);
        playerRedMoves.sort();
    } else {
        let moveChosen = columnG[columnGHeight].getAttribute('id');
        playerBlueMoves.push(moveChosen);
        playerBlueMoves.sort();
    }
};

//this function alternates between red and blue
function alternatePlayer() {
    if (playerTurn == "red") {
        playerTurn = "blue";
        playerImage = "url('css/metroidlogo.jpg')"
    } else {
        playerTurn = "red";
        playerImage = "url('css/samuslogo.jpg')"
    }
};

//this function capitalizes the winning player name for the win screen
function capitalizePlayer() {
    let firstLetter = playerTurn[0];
    let remainingLetters = "";
    let capitalizedPlayer = "";
    if (playerTurn == "red") {
        remainingLetters = `${playerTurn[1]}${playerTurn[2]}`;
        capitalizedPlayer = firstLetter.toUpperCase() + remainingLetters;
    } else {
        remainingLetters = `${playerTurn[1]}${playerTurn[2]}${playerTurn[3]}`;
        capitalizedPlayer = firstLetter.toUpperCase() + remainingLetters;
    }
    return capitalizedPlayer;
};

//this function creates a 'play again' button to display on the win screen
winMessageContainer = document.getElementById('winmessagecontainer');
function showButton() {
    let newButton = document.createElement('button');
    newButton.setAttribute('id', 'winbutton');
    winMessageContainer.appendChild(newButton);
    newButton.innerText = "PLAY AGAIN?";
    newButton.addEventListener('click', function () {
        location.reload();
    });
};

//this function shows the win screen
function showWinScreen() {
    mainBoard.style.display = 'none';
    winScreenContainer.style.display = 'flex';
    winMessageContainer.style.display = 'flex';
    confetti({ spread: 180 });
    if (playerTurn == "blue") {
        winScreenMessage.innerText = `Metroids Win!`;
    } else {
        winScreenMessage.innerText = 'Samus Wins!';
    }
    showButton();
}

//******EVENT LISTENERS******

columnADOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnA()
    columnA[columnAHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnADiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnADiagonalWinRed();
    };
    ++columnAHeight;
});

columnBDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnB();
    columnB[columnBHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnBDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnBDiagonalWinRed();
    };
    ++columnBHeight;
});

columnCDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnC();
    columnC[columnCHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnCDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnCDiagonalWinRed();
    };
    ++columnCHeight;
});

columnDDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnD();
    columnD[columnDHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnDDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnDDiagonalWinRed();
    };
    ++columnDHeight;
});

columnEDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnE();
    columnE[columnEHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnEDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnEDiagonalWinRed();
    };
    ++columnEHeight;
});

columnFDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnF();
    columnF[columnFHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnFDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnFDiagonalWinRed();
    };
    ++columnFHeight;
});

columnGDOM.addEventListener('click', function () {
    alternatePlayer();
    logPlayerMoveColumnG();
    columnG[columnGHeight].style.backgroundImage = playerImage;
    if (playerTurn == "blue") {
        checkPlayerBlueVerticalWin();
        checkPlayerBlueHorizontalWin();
        checkColumnGDiagonalWinBlue();
    } else {
        checkPlayerRedVerticalWin();
        checkPlayerRedHorizontalWin();
        checkColumnGDiagonalWinRed();
    };
    ++columnGHeight;
});


//these are my post-graduation updates to the code to make it Metroid themed
const phendranaMusic = new Audio('https://metroid.retropixel.net/games/mprime/music/mp27.mp3');
const crateriaMusic = new Audio('https://metroid.retropixel.net/games/metroid3/music/sm09.mp3');
const leftButton = document.getElementById('button-left');
const rightButton = document.getElementById('button-right');
const audioPlayer = document.getElementById('crateria-audio');

function changeBackground() {
    if (currentBackground == "crateria") {
        document.body.style.backgroundImage = "url('css/MetroidPrimePhendrana.gif')";
        phendranaMusic.play();
        audioPlayer.pause();
        crateriaMusic.pause();
        audioPlayer.style.display = 'none';
        leftButton.style.display = 'block';
        rightButton.style.display = 'none';
        currentBackground = "phendrana";
    } else {
        phendranaMusic.pause();
        crateriaMusic.play();
        document.body.style.backgroundImage = "url('css/SuperMetroidCrateriaRain.gif')";
        leftButton.style.display = 'none';
        rightButton.style.display = 'block';
        currentBackground = "crateria";
    };
};
