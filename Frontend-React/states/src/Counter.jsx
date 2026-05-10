
import {useState} from "react"
export default function Counter(){

    
const [state,setState]=useState(Math.random);  //initialization
console.log('componet is rendered');

console.log(`count =${state}`);

// let count=0;
function updatecount(){
setState((prevVal)=>{return prevVal+1});
setState((prevVal)=>{return prevVal+1});
setState((prevVal)=>{return prevVal+1});
setState((prevVal)=>{return prevVal+1});
setState((prevVal)=>{return prevVal+1});

// setState(state+2);

// setState(state+2);

console.log(`inc count inside func ${state}`);

    
}

// updatecount();

return(
    <>
    <h1 >{state}</h1>
    <button onClick={updatecount}>Increase</button>
        </>

)

}