const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name:'rock',
        emoji:'<img src="images/rock1.png" width="200px">',
        beats: 'scissors'
    },
    {
        name:'paper',
        emoji:'<img src="images/paper.png"width="200px">',
        beats: 'rock'
    },
    {
        name:'sissors',
        emoji:'<img src="images/scissors.png" width="200px">',
        beats:'paper'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click' , e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)

    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection , computerSelection)
    const computerWinner = isWinner(computerSelection , selection);
    addSelectionresult(computerSelection , computerWinner)
    addSelectionresult(selection , yourWinner) 

    if(yourWinner) 
    {
       incrementScore(yourScoreSpan);
    }
    if(computerWinner)
    {
       incrementScore(computerScoreSpan);
    }
   

   
}
function isWinner(selection , opponnentSelection){ // function to decide who is the winner 
    return selection.beats === opponnentSelection.name;
}



function addSelectionresult(selection , winner){
    const div = document.createElement('div');
    div.innerHTML = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
     finalColumn.after(div);
}


function randomSelection(){ //function for random from the array SELECTIONS 
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex];
}

function incrementScore(scoreSpan){ // function by which the score is incremented
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}
