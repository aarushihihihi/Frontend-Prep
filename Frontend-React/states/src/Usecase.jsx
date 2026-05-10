import axios from "axios"
import { useEffect, useState } from "react";

export default function UseCase(){

const URL="https://official-joke-api.appspot.com/random_joke";

    const[jokes,setJokes]=useState({})



    const getJokes=async()=>{

        try{

const response=await axios.get(URL);

const data=response.data

setJokes({
    setup:data.setup,punchline:data.punchline
})

console.log(data);

        }
        catch(error){
            alert(error)
        }


    }






useEffect(()=>{
    
    
    async function getFirstJoke(){

const response=await axios.get(URL);

let data=response.data;
console.log(response);
setJokes({
    setup:data.setup,punchline:data.punchline
})

}
getFirstJoke();


},[])

    return(
        <>

        <button onClick={getJokes}>Get Jokes</button>

<h2>     {jokes.setup}

    </h2>

    <h4>{jokes.punchline}</h4>
{/* <li>

{
    jokes.map((funny)=>(
        funny.setup
    ))
}
</li> */}



        </>
    )
}