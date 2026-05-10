import { useState } from "react"

export default function Forms(){

let [fullName,setFullName]=useState('');

let [username,setUserName]=useState('');


let [formData,setFormData]=useState({
    fullName:'',
    username:''
})


let handleSubmit=(event)=>{
    event.preventDefault();
    console.log('formdata',formData);
    
    setFormData({
       fullName:'',
    username:''  
    })
}

const handleINputChange=(event)=>{

console.log(event.target.value);
let fieldName=event.target.name;
let newValue=event.target.value;
console.log(fieldName);

setFormData((prevVal)=>{

    return {...prevVal,[fieldName]:newValue}  //    prevVal[fieldName]=newValue;

})

}





return(
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username"></label>
<input placeholder="enetr you name" type="text" value={formData.fullName} 
onChange={handleINputChange}
 id="fullName"
name="fullName"

/>
<hr></hr>
<input placeholder="enetr you name" type="text" value={formData.username} 
onChange={handleINputChange} 
id="username"
name="username"
/>

<button>Submit</button>
    </form>
    </>
)


}