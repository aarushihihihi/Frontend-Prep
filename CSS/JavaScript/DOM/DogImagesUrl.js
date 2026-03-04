

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let result=await getDogImages();
    console.log(result);
let image=document.querySelector("#result");

    image.setAttribute('src',result)


    
});



let url="https://dog.ceo/api/breeds/image/random";


async function getDogImages(){
    try{
    let response=await axios.get(url);
    console.log(response.data);
    
    return response.data.message;

    }
    catch(error){
        console.log(error);
        
    }
}

