// import axios from 'axios';

let url ="https://catfact.ninja/fact";


let btn=document.querySelector('button');
let pT=document.querySelector('p');

btn.addEventListener("click",async ()=>{
    let r=await getDogImages();
    console.log(r,'r');
pT.innerHTML=r
    
    
});

fetch(url)
.then((response)=>{
    console.log(response);
response.json().then((data)=>{
console.log(data);

})    
})
.catch(()=>{
    console.log(console.error());
    
})


async function getFacts(){

try{
    let res=await fetch(url);
    console.log('res found :',res);

    
    let data=await res.json();
    console.log(data.fact);


    let res2=await fetch(url);
    console.log('found result 2',res2);
    
    let data2 =await res2.json();
console.log(data2,'data 2 found');

}
catch(err){
    console.log(err);
    
}
    }


getFacts();



async function getData(){

const apiCall=await axios.get(url);
console.log('axios calling api',apiCall);
console.log(apiCall.data.fact);
return apiCall.data.fact;

}

getData();



let dogUrl="https://dog.ceo/api/breeds/image/random";


async function getDogImages(){
    let result =await axios.get(dogUrl);
    console.log(result);

    return result.message;
    
}