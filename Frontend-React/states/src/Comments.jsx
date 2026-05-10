import { useState } from "react"
import CommentsForm from "./CommentsForm"

export default function Comments(){
const[data,setData]=useState([{
      name:'@dfbcx nmz',
        reviews:1,
        comments:'drtfgyuhjnk'
}])

function addComment(newComment){
setData((currComments)=>
  
  [  ...currComments,newComment]
);
console.log("added comment ",newComment);

}

return(
    <>
    <div style={{border:'2px solid green'}}>
    <h1>All comments</h1>
    {data.map((datas,idx)=>(
      <p>{datas.comments}</p>

    ))}
    <p>{data[0].name}</p>


    </div>
    <hr/>
    <hr/>

    <CommentsForm addComment={addComment}/>
        </>

)

}