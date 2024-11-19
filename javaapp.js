let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
 const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //to generate rock,paper,scissor:
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");//seen ke liye
    msg.innerText = "game was draw. play again!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userwin) => {
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        console.log("you win!");//seen ke liye
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorepara.innerText = compScore;
        console.log("you loss!");//seen ke liye
        msg.innerText = "you loss!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choicce=",userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("comp Choicce=",compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            //scissors,paper:
            userwin = compChoice==="paper"? false:true;
        }else if (userChoice === "paper"){
            //rock,scissor:
            userwin = compChoice === "scissor"? false : true;
        }else{
            //rock,paper:
            userwin = compChoice === "rock"?false:true;
        }
         showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});