function hello(){
    console.log("hello");
    
}
hello()

age=78

function isAdult(){
    if(age>18){
        console.log("adult");
        
    }
    else{
        console.log("not adult");
        
    }
}

isAdult();


function poem(){
    console.log("johnny joghnny yes pappa,eating sugar no papa");
    
}
poem();


function DiceNumber(){
    let random=Math.floor(Math.random()*6)+1;
console.log(random);

}
DiceNumber();


function printName(name){
    console.log(name);
    
}


printName("AAryshihihihi")

function sum(a,b){
    console.log(a+b);
    
}
sum(2,3)
sum(7843920,748329)

function name(name){
    console.log(name);  //oder imp
    
}
name()



function findAverage(a,b,c){
    console.log(`average of ${a},${b} ,${c} is :`+(a+b+c)/3);
    
}
findAverage(10,20,30)
findAverage(2,1)



function printTable(num){
    for(let i=1;i<=10;i++){
console.log(`${num} *${i}`,num*i);

    }
}
printTable(5);

function printAdd(a,b){
let c=a+b;
return c;
console.log('jklk');

}
printAdd()
console.log(printAdd(printAdd(1,4),5));

console.log(printAdd(2,3));



function sumNumber1toN(n){
    let sum=0;
for(let i=1;i<=n;i++){
sum=sum+i;
}
return sum;
}

let sumNumber=sumNumber1toN(10);
console.log(sumNumber);


let str=["aaru","gupta","aarushihihi"];

function stringConcatenation(str){
    let result="";
for(let i=0;i<str.length;i++){
result+=str[i];
}
return result;
}

let string=stringConcatenation(str);
console.log(string);
