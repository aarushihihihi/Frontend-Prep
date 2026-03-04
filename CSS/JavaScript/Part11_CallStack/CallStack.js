


// function sayHello(){
//     console.log("hellloo");
    
// }


// function aaru(){
//     console.log("aaaaaaaaaaaarrrrrrrrrrruuuuuuuuuuu");
    
// }

// sayHello();
// aaru();



function one(){
    return 1;
}


function two(){
    return one() +one();
}


function three(){

    let ans =two() +one();
    console.log(ans);
    
}

three();



let h1=document.querySelector('h1');

function changeColor(color,delay){


    return new Promise((resolve,reject)=>{
  setTimeout(()=>{
h1.style.color=color;

resolve("color changed");
// nextColor()

    },delay)
    })
  
}


changeColor("red",1000)
.then(()=>{
    console.log("red color");
    return changeColor("orange",1000)
}).then(()=>{
    console.log("orange color");
    return changeColor("pink",1000)
    
})

// changeColor("red",1000,()=>
// {
// changeColor("yellow",1000,()=>{
//     changeColor("green",1000)
// })

// })
// changeColor("green",2000)



 


let reqP=changeColor("red",1000,"pink");
console.log(reqP);



