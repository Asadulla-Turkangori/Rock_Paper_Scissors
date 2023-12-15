let moves = document.querySelectorAll(".container");

let userScore = 0;
let compScore = 0;

let endTag = document.querySelector("h3");


let selectrandom = ()=>{
    let arr = ["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*3)];
}


let countWinner = (userWin)=>{
    if(userWin){
        userScore++;
        document.querySelector("#userpara").innerText = userScore;
    }
    else{
        compScore++;
        document.querySelector("#comppara").innerText = compScore;
    }
}



moves.forEach((move) =>{
    move.addEventListener("click",()=>{
        let userchoice = move.getAttribute("id");
        let compchoice = selectrandom();

        if(userchoice === compchoice){
            endTag.innerText = "Its a Draw Try Again!";
            endTag.style.backgroundColor="wheat";
        }
        else{
            let userWin = true;
            if(userchoice === "rock"){
                userWin = compchoice == "paper"? false:true;
            }
            else if(userchoice === "paper"){
                userWin = compchoice == "scissors"? false:true;
            }
            else{
                userWin = compchoice == "rock"? false:true;
            }
            if(userWin){
                endTag.innerText = `User Won ${userchoice} beats ${compchoice}`;
                endTag.style.backgroundColor = 'lightgreen';
            }
            else{
                endTag.innerText = `Computer Won ${compchoice} beats ${userchoice}`;
                endTag.style.backgroundColor = 'red';
            }
            countWinner(userWin);
        }
        
    });
})
