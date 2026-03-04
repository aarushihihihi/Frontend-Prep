

let max=prompt("Enter max number")

let userNum=prompt("Enter a number");
let random=Math.floor(Math.random() *max) +1;
console.log(random);
prompt("Random num is",random)

while(true){
if(userNum=='quit'){
    console.log("Game quitted !!");
    break;
}

if(userNum==random){
    alert("Bingo,Number matched !!!!");
    break;
}

else if(userNum<random){
    userNum=prompt("hint:your guess was too small")
}
else{
    userNum=prompt("hint:your guess was too large")

}



}
