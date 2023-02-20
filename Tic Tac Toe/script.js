console.log("welcome to tic tac toe")
let music = new Audio("images/music.mp3")
let audioTurn = new Audio("images/ting.mp3")
let gameover = new Audio("images/gameover.mp3")
let turn ="X";

let isgameover = false;

//function to change the turn
const changeturn = () => {
    return turn === "X"?"0":"X"

}

//function to check for a win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !== "")){
           document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }

    })
    
}

// Game Logic
 music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); //change the element inside the box /span
    element.addEventListener('click' , (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeturn();
            
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "turn for : " + turn;
            }
        } 
    })


})

// add onclick to reset button

reset.addEventListener('click' ,(e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })

    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "turn for : " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})