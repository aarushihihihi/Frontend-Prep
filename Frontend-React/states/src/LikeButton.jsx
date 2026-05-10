import { useState } from "react";

export default function LikeButton(){


const [like,setLike]=useState(false);


function handleLike(){
    setLike(!like);
}


let likeColor={color:"red"}

    return(
        <>
        {like?(


        
        <p onClick={handleLike}><i class="fa-solid fa-heart" style={likeColor}></i></p>
)
:(
        <p onClick={handleLike}><i className="fa-regular fa-heart"></i></p>
)}
       </>
    )


}