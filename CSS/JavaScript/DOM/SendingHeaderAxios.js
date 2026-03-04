

let url="https://icanhazdadjoke.com";



async function getJokes(){


    try{
        const config={
            headers:{
                Accept:"application/json"
            }
        };
const response=await axios.get(url,config);
console.log(response.data);
    }
    catch(err){
        console.log(err);
        
    }

}

getJokes();