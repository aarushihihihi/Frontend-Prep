let btn=document.querySelector('button')
console.dir(btn)




function changeColor(){
console.log('color changes');


let a=Math.floor(Math.random()*200);
let b=Math.floor(Math.random()*200);
let c=Math.floor(Math.random()*200);

let randomColor=`rgb(${a},${b},${c})`;

document.body.style.backgroundColor=randomColor;

let h1=document.createElement('h1');
h1.innerHTML=randomColor;
document.querySelector('body').append(h1);



}

btn.addEventListener("click",changeColor)

