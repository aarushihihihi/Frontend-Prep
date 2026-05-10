

import '../../public/style.css'
import Content from './Content';
const Card=()=>{
    const oldPrice=["$1000","$2000","$3000"]
        const newPrice=["$3000","$6000","$9000"]
    
    return(
<>
        <div className="all-card">

<Content title="Logistic" image="https://example.com/image.jpg" oldprice={oldPrice[0]} newprice={newPrice[0]}/>

<Content title="mi" image="https://example.com/image.jpg" oldprice={oldPrice[1]} newprice={newPrice[1]}/>

<Content title="samsung" image="https://example.com/image.jpg" oldprice={oldPrice[2]} newprice={newPrice[2]}/>
        </div>
        </>

    )
}

export default Card;