
let todo=[];
let req=prompt("Please enter your choice")



while(req!=='quit'){
if(req=='quit'){
    console.log("quitting app");
    break;
    
}


if(req=='add'){
    let items=prompt("Please enter the task")
    todo.push(items);
    console.log('task added',todo);
    
}
else if (req=='list'){
    console.log("------------------");
    for(t of todo){
        console.log(t);
        
    }
    
}
else if(req=='delete'){

    let index=prompt("Enter the ind you want to dleet",)
    console.log(todo);
    todo.splice(index,1);
    console.log('task deleted');
    
}
else{
    console.log("wrong choice");
    
}

req=prompt("enter another choice")
}