import { useState } from "react";

export function LudoBoard(){

    const [moves,setMoves]=useState({blue:0,green:0,red:0,yellow:0})

let [arr,setArr]=useState(["no moves"])
    function updateblue(){
        setMoves(
        (prev)=>{

         return   {...moves,blue:moves.blue+1

         }
        });

        arr.push("blue moves");
        setArr([...arr,"movess"])
        console.log(arr);
        
        }
    
           function updateylw(){
        setMoves(
        (prev)=>{

         return   {...moves,yellow:moves.yellow+1

         }
        });
        }
          function updategreen(){
        setMoves(
        (prev)=>{

         return   {...moves,green:moves.green+1

         }
        });
        }
          function updateylw(){
        setMoves(
        (prev)=>{

         return   {...moves,yellow:moves.yellow+1

         }
        });
        }
    


    return(
        <div className="board">
          <p>{arr}</p>
        <p>Blue :{moves.blue} </p>
        <button onClick={updateblue}>+1</button>
         <p>Yellow :{moves.yellow} </p>
        <button onClick={updateylw}>+1</button>
         <p>Green :{moves.green}</p>
        <button onClick={updategreen}>+1</button>
         <p>Red :{moves.red} </p>
        <button onClick={updateylw}>+1</button>
        </div>
    )




}