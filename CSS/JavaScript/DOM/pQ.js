


let p=document.createElement('p');
p.innerText="HEY I'M RED";
document.querySelector('body').append(p)
console.dir(p)
p.classList.add('red')


let h3=document.createElement('h3');
h3.innerText="I am nlue h3";
document.querySelector('body').append(h3);
h3.classList.add('blue')


let div=document.createElement('div');


document.querySelector('body').append(div)
div.classList.add('div')
let h1=document.createElement('h1');

let p1=document.createElement('p1');
h1.innerText="I am in div";
div.append(h1)



// document.querySelector('body').append(h1);

p1.innerText="ME TOO !!";
div.append(p1);

// document.querySelector('body').append(p1);


let q5=document.createElement('q5');
q5.innerHTML="Apna College <b>Delta</b> Practice"

document.querySelector('body').append(q5)

let q4=document.createElement('h1');
q4.innerHTML="<u>DOM PRACTICE</u>";

document.querySelector('body').append(q4)
q4.classList.add('purple')



let input=document.createElement('input');
let btn=document.createElement('button')

btn.innerHTML="Click me";
document.querySelector('body').append(input)
document.querySelector('body').append(btn)


btn.setAttribute("id","btn")
input.setAttribute('placeholder','username')

btn.classList.add("#btn");



