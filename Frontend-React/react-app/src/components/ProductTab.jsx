import { Product } from "../Product"
import '../../public/style.css'

export const ProductTab=()=>{

    let features=["bad","good","excellent"]
    // let f2={a:"bad",b:"hjk"}
    return(
        <div className="tab">
        <Product title="hello" desc="greetings" features={features}/>
                <Product title="good to see u" desc="it's nice to see you"/>
        <Product title="welcome " desc="wlcm coder......" features={features}/>


    </div>
    )
}