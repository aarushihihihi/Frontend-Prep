import { useEffect, useState } from "react"


export default  function CounterNew(){

let [counter,setCounter]=useState(0)




let inc=()=>{
    setCounter(()=>counter+1)
}


useEffect(()=>{
     console.log('use efefct called');
    // inc();
    
},[])

return(
    <>
    <h1> Vlaues</h1>
    
    <p>counter = {counter}</p>
    <button onClick={inc}>Update</button>
    </>
)
}