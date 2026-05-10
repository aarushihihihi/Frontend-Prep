import Price from "./Price";

const Content=(props)=>{




    return(
        <>
        <div div className="card">

        <h1>{props.title}</h1>
        <img src={props.image} />
        <Price oldPrice={props.oldprice} newPrice={props.newprice} />
        </div>
        
        </>
    )
}

export default Content;