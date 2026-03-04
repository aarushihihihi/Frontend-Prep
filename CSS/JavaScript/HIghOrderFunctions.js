

//takes one or multiple functions as argument


function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();

    }


}

let greet=function(){
    console.log("hello");
    
}


multipleGreet(greet,6)


//custom function to check whethere no is odd or even
function oddEvenTest(request){
    if(request=='odd'){
    let odd=function(n){
    console.log(!(n%2==0));
    
}
return odd;
    }
else if(request=='even'){
let even=function(n){
    console.log((n%2==0));
    
}
return even;

    }
    else{
        console.log("wrong request");
        
    }
}

let request='odd'


console.log(oddEvenTest("odd"));

let func=oddEvenTest(request);
func(12)