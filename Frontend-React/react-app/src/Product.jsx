import { Description } from "./components/Description"
import { Title } from "./components/Tilte"

import '../public/style.css'
 const Product=({title,desc,features=[]})=>{
    console.log(features);

    const list=features.map((item)=>(<li>{item}</li>))
let styles={backgroundColor: list.length>0?"pink":""}
    return (
        <>
        <div className="product" style={styles}>

<h1>{title}</h1>
<h2>{desc}</h2>   
{
list.length>0?
<ul>{list}</ul>  
 :"No list"
}
        </div>
                </>

    )
}

export {Product}