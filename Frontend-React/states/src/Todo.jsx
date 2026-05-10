import { useState } from 'react'
import './todo.css'
import {v4 as uuidv4} from "uuid"

export default function Todo(){



let [task,setTask]=useState([{task:"sample",id:uuidv4(),isDone:false}]);
let [newTask,setNewTask]=useState('');

function addTask(){

    setTask((prevTask)=>{
        return [...prevTask,{task:newTask,id:uuidv4()}]

    })
  
setNewTask('')
    
}

let updateTodo=(e)=>{
    setNewTask(e.target.value);
    
}


let deleteTodo=(id)=>{
console.log(id);

setTask((prevTodods)=>
    prevTodods.filter((prevTodods)=>prevTodods.id!=id)
)
// let filteredTasks=task.filter((tasks)=>tasks.id!=id)
// console.log(filteredTasks);

// setTask(filteredTasks)


}

let upperTodo=(id)=>{
console.log(id);

setTask((prevTodods)=>

prevTodods.map((todo)=>{
    
    if(todo.id==id){
    return{
        ...todo,task:todo.task.toUpperCase()
    }
}
else{
    return todo;
}
}
)
)
// let filteredTasks=task.filter((tasks)=>tasks.id!=id)
// console.log(filteredTasks);

// setTask(filteredTasks)


}



let upperCase=()=>{

    // console.log(todo);
setTask((prevTodos)=>prevTodos.map((todo)=>{
  return {
        ...todo,task:todo.task.toUpperCase(),
    }
    
})
)

}

let styles={
    textDecoration:'line-through'
}

let markAsDone=(id)=>{

    setTask((prevTodos)=>
        prevTodos.map((todo)=>{
  if(todo.id==id){
    console.log(todo.id,'id of todo');
    
    console.log(todo,'todo print');
    
return {
    ...todo,isDone:true
}
  }
  else{
    return todo
  }
        })
    )

    
}






return(
    <>
    
    <div className="area">

    <input placeholder="Enter your task" value={newTask} onChange={updateTodo}/>

    <button onClick={addTask} className='btn'>Add</button>
        </div>
        <ul>
            {
                task.map((tasks)=>(

<li key={tasks.id} style={tasks.isDone?styles:{}} >{tasks.task} 

<button onClick={()=>upperTodo(tasks.id)}>UpperOne</button>

<button onClick={()=>deleteTodo(tasks.id)}>Delete</button>

<button onClick={()=>markAsDone(tasks.id)}>Mark as Done</button>

</li>

                ))
            }
        </ul>
    <button onClick={()=>upperCase()}>Upercase all</button>

    </>
)


}