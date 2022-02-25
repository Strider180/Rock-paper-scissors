// Rock paper scissors game
// computerPlay function will randomly return 'Rock', 'Paper', 'Scissors'
// playerSelection vs computerSelection, returns a string that will declare the winner of the round.
// 5 games will be played
// Inputs should be case insensitive.
//use prompt() to get input from the user


//1. Welcome message, ask if player would like to play a game vs. computer.
//2. Prompt user to select rock, paper, scissors.  Save variable in "playerSelection"
//3. Computer randomizes rock, paper, or scissor then store in "computerSelection"
//4. Compare variables to determine outcome of the round: player wins, player loses, or draw.
//5. Iterate through 5 rounds.  Keep score.  Determine winner with 3 outcomes: player wins, player loses, player draws.  
//6. Add function for overtime in case of a draw?
let win = 0;
let lose = 0;
let draw = 0;
let round = 1;

game()

function computerPlay() {
    const choices = ['rock','paper','scissors'];
    const result =  choices[Math.floor(Math.random()*choices.length)];
    console.log(`Roshambo Bot threw out ${result}!`)
    return result;
}

function playRound() {
    console.log(`\n---------------------------------- \nRound ${round}! `)
    const playerSelection = prompt(`Your turn! Select rock, paper, or scissors.`).toLowerCase(); //player picks, turns input into all lowercase
    console.log(`You threw out ${playerSelection}!`)
    const computerSelection = computerPlay()
    const gameResult = true;

    switch (gameResult) {
        case (playerSelection === `rock` && computerSelection === `scissors`): 
            console.log("Boom! Rock beats scissors. You Win!");
            win += 1;
            break;
        case (playerSelection === `rock` && computerSelection === `paper`): 
            console.log("Ah shucks. Rock loses to paper. Roshambo Bot Wins!");
            lose += 1;
            break;
        case (playerSelection === `paper` && computerSelection === `rock`): 
            console.log("Good job! Paper beats rock. You Win!");
            win += 1;
            break;
        case (playerSelection === `paper` && computerSelection === `scissors`): 
            console.log("Ouch. Paper loses to scissors. Roshambo Bot Wins!");
            lose += 1;
            break;
        case (playerSelection === `scissors` && computerSelection === `paper`): 
            console.log("Score! Scissors beats paper. You Win!");
            win += 1;
            break;
        case (playerSelection === `scissors` && computerSelection === `rock`): 
            console.log("Ploop. Scissors gets crushed by rock. Roshambo Bot Wins!");
            lose += 1
            break;
        default:
            console.log(`You and Roshambo Bot both played ${playerSelection}. This round is a draw.`);
            draw += 1;
    }
    console.log(`Your score is currently Win:${win} Loss:${lose} Draw:${draw}`);
    round += 1;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    finalScore()
}

function finalScore() {
    console.log(`\n----------------------------\nFINAL SCORE:\n`);
    console.log(` Wins: ${win} \n Loss: ${lose} \n Draws: ${draw}\n`);
    if (win > lose) {
        console.log("Congratulations! You did it!  You beat the Roshambo Bot!")
    } else if (lose > win) {
        console.log("Yikes.  It looks like the Roshambo Bot beat you.")
    } else {
        console.log("After 5 rounds, it's a draw!")
    }
}