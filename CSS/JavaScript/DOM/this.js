


// let btn=document.querySelector('button');

// let p=document.querySelector('p')

// btn.addEventListener("click",style)
// p.addEventListener("click",style)


// function style( ){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue"
// }


let btn=document.querySelector('button');

btn.addEventListener("click",function(e){
    console.log(e);
    
})


let inp=document.querySelector('input');

inp.addEventListener("keydown",function(e){
if(e.code=='ArrowUp'){
    console.log("char moves forward");
    
}   
})