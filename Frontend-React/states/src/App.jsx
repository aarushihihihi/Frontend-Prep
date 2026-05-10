import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './Counter'
import LikeButton from './LikeButton'
import { Closures } from './Closures'
import { LudoBoard } from './LudoBoard'
import Todo from './Todo'
import Lottery from './LotteryGame/LotteryTicket.jsx'
import TicketNum from './LotteryGame/TicketNum.jsx'
import Ticket from './LotteryGame/Ticket.jsx'
import Forms from './Form.jsx'
import CommentsForm from './CommentsForm.jsx'
import Comments from './Comments.jsx'
import CounterNew from './CounterNew.jsx'
import UseCase from './Usecase.jsx'

function App() {

  let win=(number)=>{
return number[0]===0;
  }
  const [count, setCount] = useState(0)

  return (
    <>

    <UseCase/>
    {/* <CounterNew/> */}
    {/* <Comments/> */}
    {/* <CommentsForm/> */}
    {/* <Forms/> */}
    {/* <Lottery n={5} win={win}/> */}
    {/* <Ticket ticket={[0,1,2]}/> */}
    {/* <TicketNum num={5}/>
        <TicketNum num={5}/>

    <TicketNum num={5}/> */}

    {/* <Lottery/> */}
    {/* <Todo/> */}
    {/* <LudoBoard/> */}
    {/* <Closures/>
    <LikeButton/>
<h1>States</h1>
<Counter/> */}
    </>

  )
}

export default App
