


async function greet(){

 throw   "helo";
    return "nothing returned from func."
}


greet().then(()=>{
    console.log("promise fulfilled");
    
})
.catch(()=>{
    console.log("rejected promiseeee");
    
})

console.log("greet called",greet());


let demo=async=()=>{
    return 10;
}
console.log(demo());






function getNum(){
return new Promise((resolve,reject)=>{
    console.log("returning random number");
    
    return 10;
})
}

async function demo2(){
    await getNum();
}


console.log(demo2());
