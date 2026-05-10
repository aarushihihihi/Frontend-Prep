const Price=({oldPrice,newPrice})=>{
    let styles={
textDecorationLine:"line-through"
}
    
return(
    <div className="price">
    <span className="old" style={styles}>{oldPrice}</span>
    &nbsp;&nbsp;
    <span>{newPrice}</span>
    </div>
)
}

export default Price;