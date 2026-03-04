

let img=document.getElementById("mainImg")
console.log(img.id);



let smallImages=document.getElementsByClassName("ol;dImg");
for(let i=0;i<smallImages.length;i++){

    smallImages[i].src="assets/spiderman_img.png"
    console.dir(smallImages[i].src);
    console.log('value is changed');
    
}


let tags=document.getElementsByTagName('P');
console.log('tags : ',tags);

// document.getElementsByTagName('P')[0].innerHTML="AARUUUUUUUUU"

console.log('ppp',document.querySelector('p')
);

console.log(document.querySelector("#myId")
);

console.log(document.querySelector('#description')
);

console.log(document.querySelector('.myClass'));

console.log(document.querySelector("div a"));

console.log(document.querySelectorAll("p"))



console.log('inner text',document.getElementById("mainImg").innerText="My page aarushihihihihihi ");



let paraValue=document.querySelector('p')
console.log('paraValue',paraValue);

let innerHTML=paraValue.innerHTML
console.log('innerHTML : ',innerHTML);


let innerText=paraValue.innerText

console.log('innerText',innerText);


let textContent=paraValue.textContent
console.log('textContent',textContent);


let img1=document.querySelector('img');
console.log('img1',img1);
console.log(img.setAttribute('id','spiderman'));
console.dir(document.querySelector('spiderman'));


let img2=document.querySelector('img');
console.log(img2.classList);


let heading2=document.querySelector('h1');
heading2.classList.add('green');

let heading=document.querySelector('h1');
heading.classList.add('underline');

console.log(heading.classList.contains('underline'));


let h4=document.querySelector("h1");
console.log(h4.parentElement);
console.log(h4.childElementCount);

console.log(h4.children);

let ulChild=document.querySelector("ul");
console.log(ulChild.children);


console.log(ulChild.children[0]);
console.log(ulChild.children[1].previousElementSibling);
console.log(ulChild.children[1].nextElementSibling);


let img3=document.querySelector("img")
console.log(img3.previousElementSibling
);


let head=document.querySelector("h1");
head.style.color='yellow';
console.log(head.style.color='yellow');


//adding element
let create=document.createElement('P');
console.dir(create);


create.innerText="hi created a new paragaraph";


let body=document.querySelector("body");
body.appendChild(create);

console.dir(body);


let box=document.querySelector('.box');
box.appendChild(create)
console.dir(box);


box.append("fwygedfjkgvl"); //content+elements (last)
box.prepend('dnnfn');

let btn=querySelector('btn');

box.insertAdjacentElement('beforebegin',btn)

