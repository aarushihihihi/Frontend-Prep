let addTask=document.querySelector('button')

let inp=document.querySelector('input')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')


btn.addEventListener("click",function(){

let item=document.createElement("li");
item.innerText=inp.value;

let del=document.createElement("button");
del.innerHTML="delete";
del.classList.add("delete")
ul.appendChild(item);
item.appendChild(del)
    console.log("clicked");
    console.log(inp.value);
inp.value="";
    
})


ul.addEventListener("click",function(e){
    console.log(e.target);
        console.log(e.target.nodeName);

    console.log("button clicked");
    if(e.target.nodeName=='BUTTON'){
        let itemList=e.target.parentElement;
        console.log(itemList);
        itemList.remove();
        console.log("delete");
        
    }
})


// let delBtn=document.querySelectorAll(".delete");
// for(del of delBtn){
//     del.addEventListener("click",function(){
//         console.log("dleted item");
//         let parent=this.parentElement;
//         console.log(parent);
        
//     })
// }