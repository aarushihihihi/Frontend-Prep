import { useState } from "react";
import { getSum, getTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n,win}){


    let [number,setNumber]=useState(getTicket(n))


let whetherWinner=win(number);

let buy=()=>{
    setNumber(getTicket(n))
}



    return(
        <>
        <h1>Lottery Ticket</h1>
<Ticket ticket={number}/>
<Button onClick={buy}/>
{
    whetherWinner&&(
        <h1>Congratulations, you arewinner</h1>
    )
}



        </>
    )


}