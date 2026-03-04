/*

Scope : determines accessibility of variables,objects and functions from different parts of the code

> Function
> Block
> Lexical
> Global scope


Function Scope :     variables defined inside a function are not accesible(visible) from outside the function.


Block  Scope :

Variables declared inside a {} block cannot be accessed outside the block(let,const)
 
Lexical Scope : nested func
a variable defned outside a function can be accessible inside another function defined after the variable declaration.The opposite is not true





*/

let sum=54;  //global scope
function calc(a,b){
    // let sum=a+b;  //func scoped
}
calc(1,2);
console.log(sum);  //sum is not defined





{
    var a=10;
}
console.log(a);
{
    let b=10;
}
// console.log(b);   // a is not defined (ref error)




function outerFunc(){  //lexical scope
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
        
    }
    
    innerFunc();
}

outerFunc();





let sum2=function calc(){
    console.log("func");
    
}
sum2();