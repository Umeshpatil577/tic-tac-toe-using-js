let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#re");
let newbt = document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true; //turn of 0(it will be true for 0 turns and false for x's)



const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];






boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    
    if(turn0){ //0's turn 
        box.style.color="red";
        box.innerText = "O";
        turn0= false;
        
    }
    else{ // x's turn
        box.style.color="green";
        box.innerText= "X";
        turn0=true;

    }
    box.disabled= true; //after a click it wont be clickable.
   
    checkWinnner();

   
});
});









//this checkWinner fn wil check all the winning patterns on clicking a box;
const checkWinnner=()=>{ 
    for(let pattern of winPatterns){
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};


const showWinner=(winner)=>{
    msg.innerText= `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledd();
}




const resetGame=()=>{
    turn0=true;
    count =0;
    enable();
    msgContainer.classList.add("hide");
}



const disabledd=()=>{
    for(let box of boxes){
        box.disabled=true;
       
    }
}


const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



newbt.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);