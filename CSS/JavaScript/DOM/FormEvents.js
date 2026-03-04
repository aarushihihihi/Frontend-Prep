let form=document.querySelector("form");
form.addEventListener("submit",function(){

    event.preventDefault();
    alert("form submitted");
console.dir(form);
//     let inp=document.querySelector("#user");
//     let pass=document.querySelector("#pass");

//     console.dir(inp)
//     console.log(inp.value);
// console.log(pass.value);

    
})



let user=document.querySelector("#user");
user.addEventListener("change",function(){
console.log(" changed event");

    console.log("final value",this.value);
    
})


user.addEventListener("input",function(){
console.log("input event");

    console.log("final value",this.value);
    
})

