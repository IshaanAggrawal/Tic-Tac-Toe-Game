let play=document.querySelectorAll(".cell");
let reset=document.querySelector("#reset");
let message=document.querySelector("p");
let messagepar=document.querySelector(".message")
let player=true;
let count=0;
const winpat=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];
message.innerText="player 1";
play.forEach((cell)=>{
    cell.addEventListener('click', () => { 
        if(player){
            message.innerText="player 2";
            cell.innerText="x";
            player=false;
        }
        else{
            cell.innerText="o";
            message.innerText="player 1";
            player=true;
        }
        cell.disabled = true;
        count++;
        let win=checkwin();
        if(count===9 && !win){
            messagepar.style.backgroundColor="#ffb482";
            message.innerText = "It's a draw!";
        }
    })
});
function checkwin(){
    for (let pattern of winpat) {
        let pos1Val = play[pattern[0]].innerText;
        let pos2Val = play[pattern[1]].innerText;
        let pos3Val = play[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="x" ) {
            messagepar.style.backgroundColor="#ffb482";
            message.innerText="Congrats Player 1 wins !";
            return true;
        }
            if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="o" ) {
            messagepar.style.backgroundColor="#ffb482";
            message.innerText="Congrats Player 2 wins !";
            return true;
        }
        }
        }
        return false;
}

reset.addEventListener('click', () => {
    play.forEach((cell) => {
        cell.innerText = "";
        cell.disabled = false;
    });
    messagepar.style.backgroundColor="cyan";
    count = 0;
    message.innerText = "Player 1";
    player = true;
});
