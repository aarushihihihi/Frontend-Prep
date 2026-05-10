

export function Closures(){
function outer(){
    let a=10;
    function inner(){
        a=90;
        console.log('a',a+10);
        
    }
    return inner();
}

outer();

}