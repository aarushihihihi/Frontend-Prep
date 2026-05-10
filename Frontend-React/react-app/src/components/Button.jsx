

function printHello(event){
    console.log('event',event);
    
    console.log("hello babes");
    
}

function mouse(){
    console.log("mouse");
    
}

function Button(){


return(
    <>
<button onClick={printHello}>
    Click me
</button>
<button onMouseOver={mouse}>
click bro
</button>
<button onDoubleClick={mouse}>
click bro
</button>
    </>

)
}

export default Button

