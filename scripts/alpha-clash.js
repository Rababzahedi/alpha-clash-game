// function play(){
//     // step 1: hide the home screen.to hide the screen add class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //  show the home ground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed.innerText);

    // stop the game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not (right or wrong key pressed)
    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

    // --------------------------------------------------------------------------------------------------------------------------
        // update score
        // 1.get the current score 
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     const newScore = currentScore + 1;

    //     // show the updated score
    //    currentScoreElement.innerText = newScore;

    // --------------------------------------------------------------------------------------------------------------------------
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // //step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // currentLife = parseInt(currentLifeText);
        // //step 2: reduce the life count
        // const newLife = currentLife - 1;
        // //step 3: display the updated life count
        // currentLifeElement.innerText = newLife;
       //---------------------------------------------------------------------------------------------------------------------------
       const currentLife = getTextElementValueById('current-life');
       const updatedLife = currentLife - 1;
       setTextElementValueById('current-life', updatedLife); 

       if(updatedLife === 0){
            console.log("game over");
            gameOver();
       }
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step 1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log("your random alphabet",alphabet);

    // set randomly regenerated alphabet to the string(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score 
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
