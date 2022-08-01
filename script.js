console.log("Hello Welcome")
let music = new Audio("music.mp3")
let AudioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let gameover = false

let turn = "X"

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// function to check for a win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if(boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML && boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML && boxtexts[e[0]].innerHTML !== ""){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerHTML + " Wins"
            gameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            AudioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innertext = "Turn for " + turn;
            }
        }
    })
})

// Add onclick lister to the reset button
reset.addEventListener('click',()=>{
  let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText = '';
    })
    turn="X"
    gameover=false
    document.getElementsByClassName("info")[0].innertext = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})


