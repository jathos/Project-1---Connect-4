//these variables are currently in use by working functions
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
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
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


//I'm not sure if these variables are needed yet
const allVerticalWinConditions = ["a1a2a3a4", "a2a3a4a5", "a3a4a5a6"];


//******WORKING FUNCTIONS********

//this code will add alternating color "chips" into each circle (ex is for button1)
// button1.addEventListener('click', function() {
//     alternatePlayer();
//     a1.style.backgroundColor = playerTurn;
// });

//this code allows the chips to stack on top of each other (ex is for columnA)
//     columnA[columnAHeight].style.backgroundColor = playerTurn;
//     ++columnAHeight;

//these function log the move that the player just selected, then sorts the playermove array
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
    } else {
        playerTurn = "red";
    }
};

//******EVENT LISTENERS******

 button1.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnA()
     columnA[columnAHeight].style.backgroundColor = playerTurn;
     console.log(playerBlueMoves);
     ++columnAHeight;
 });

 button2.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnB();
     columnB[columnBHeight].style.backgroundColor = playerTurn;
     ++columnBHeight;
 });

 button3.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnC();
     columnC[columnCHeight].style.backgroundColor = playerTurn;
     ++columnCHeight;
 });

 button4.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnD();
     columnD[columnDHeight].style.backgroundColor = playerTurn;
     ++columnDHeight;
 });

 button5.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnE();
     columnE[columnEHeight].style.backgroundColor = playerTurn;
     ++columnEHeight;
 });

 button6.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnF();
     columnF[columnFHeight].style.backgroundColor = playerTurn;
     ++columnFHeight;
 });

 button7.addEventListener('click', function() {
     alternatePlayer();
     logPlayerMoveColumnG();
     columnG[columnGHeight].style.backgroundColor = playerTurn;
     ++columnGHeight;
 });

//******TEST FUNCTIONS******

    
    

function checkPlayerBlueVerticalWin() {
        let turnMovesToString = playerBlueMoves.join("");
        for (const ele of allVerticalWinConditions) {
            let winOrNo = turnMovesToString.includes(ele);
            console.log(winOrNo);
            if (winOrNo == true) {
                return console.log("Win!");
            }
        };
};

 
