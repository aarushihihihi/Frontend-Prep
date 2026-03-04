
let btn=document.querySelector('button');

let inp=document.querySelector('input');
btn.addEventListener("click",async ()=>{

    let country=document.querySelector("input").value;
    console.log(country);
    
    let display=await getColleges(country);
    console.log(display);
    show(display)
    
})


async function show(display){

    let list=document.querySelector("#list")
for(col of display){
    console.log(col.name);
    let lists=document.createElement("li");
    lists.innerHTML=col.name;
    list.appendChild(lists);

}
}


let url=`http://universities.hipolabs.com/search?country=`;


async function getColleges(country){
let response=await axios.get(url+country);
console.log(response.data);
return response.data;

}

