import { useState } from "react";
import { useFormik } from "formik";
export default function CommentsForm({addComment}){

    const[name,setName]=useState('');
   
    // const[formData,setFormData]=useState({
        // name:'',
        // password:'',
        // reviews:1,
        // comments:''
    // })


const validate=values=>{
    const errors={};
    if(!values.name){
        errors.name='Name is required'
    }
    return errors
}


const formik=useFormik({
    initialValues:{
 name:'',
        password:'',
        reviews:1,
        comments:''
    },
    validate,
    onSubmit:values=>{
        alert(JSON.stringify(values,null,2))
    }
})



// const handleSubmit=(e)=>{



    
//     console.log('formdata',formData);
    
// addComment(formData)
// e.preventDefault();
// setFormData({
//     name:'',
//         password:'',
//         reviews:1,
//         comments:''
// })


// }
//     const handleInputChane=(event)=>{

//         setFormData((prevVal)=>
            
//             {
//                return{ 
//                 ...prevVal,[event.target.name]:event.target.value
//                }
//             }


//     )}

    return(
        <>

<form onSubmit={formik.handleSubmit}>

        <h1>Comment Formssssssssssssss!!!!!!!!!!!!!!!!!!!!</h1>
        <label htmlFor="name">Name : </label>
        <input placeholder="Enter your name"  type="text" value={formik.values.name} onChange={formik.handleChange} name="name"/>
        {formik.touched.name && formik.errors.name && (
  <p style={{ color: "red" }}>{formik.errors.name}</p>
)}
        <hr/>
        <label htmlFor="password">Password</label>
        <input placeholder="Enter your password"  type="password" value={formik.values.password} onChange={formik.handleChange}  name="password"/>



        <hr/>
                <label htmlFor="comments">Add Comments : </label>
<textarea rows={5} cols={8} placeholder="Enter your comments"  name="comments" value={formik.values.comments} onChange={formik.handleChange} ></textarea>
        <hr/>

        <label htmlFor="review">Reviews</label>

        <input placeholder="Enter  Reviews"  type="number"  name="reviews" value={formik.values.reviews} onChange={formik.handleChange}  min={1} max={5}/>
                <hr/>
<button type="submit">Submit</button>
</form>

        </>
    )
}