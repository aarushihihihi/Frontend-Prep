let btn=document.querySelector('button')


console.dir(btn)

btn.onmousenter=function(){
    console.log("you entered a button");
    
}
// console.log(btn.onclick);


// btn.onclick=function(){
//     console.log("button clicked !!!!");
    
// }

// function sayhhhh(){
//     console.log("rebd");
    
// }



let buttons=document.querySelectorAll("button");
for(btnss of buttons)
{

// btn.onclick=sayhhhh();

}


btn.addEventListener('onclick',clicked());
btn.addEventListener('onclick',love());


function clicked(){
    console.log("you clicked me !!!");
    
}


function love(){
    console.log("u love me????????");
    
}
