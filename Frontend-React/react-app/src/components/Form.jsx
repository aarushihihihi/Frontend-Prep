
function handlesubmit(event){
    event.preventDefault();
    console.log(event);
    
}
export default function Form(){
    return(
        <form onSubmit={handlesubmit}>
            <input placeholder="write........."/>
            <button>Submit</button>
        </form>
    )
}