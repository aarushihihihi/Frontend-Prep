
const student={
    name:"aarushihihihihi",
    age:32,

    printInfo(){
        console.log(this);
        
        console.log(this.name);
        
    }
}

student.printInfo();


  function printInfo(){
        console.log(this);
        
        
    }


    printInfo();


    try{
 
    console.log(a);
   
    }
    catch(e){
        console.log("ewdbjhn");
        
    }

     console.log("hello");
    console.log("hello");   console.log("hello");
        console.log("hello");



        const sum=(a,b)=>(a+b);
console.log(sum(8,9));

console.log("gyfeeeeeee");


setTimeout(()=>{
console.log("heeeeeeeeeeeeeeeee");

},2000)

console.log("gyfeeeeeee");

console.log("gyfeeeeeee");

console.log("gyfeeeeeee");

console.log("gyfeeeeeee");

let id=
setInterval(()=>{
console.log("heeeeeeeeeeeeeeeee");

},2000)
console.log(id);


clearInterval(id)


// let id1=
// setInterval(()=>{
// console.log("er");

// },2000)
// console.log(id);



const stu={
    name:"aaru",
    prop:this,


    getName:function(){
        console.log(this);
        
console.log(this.name);
    },



    getMarks:()=>{  //arrow func -lexical scope that is why window & this.marks as undefined
        console.log(this);
        
        console.log(this.marks);
        
    }

}

stu.getName();

stu.getMarks();



let square=(num)=>num*num;

console.log((square(2)));

setTimeout(()=>{
    console.log("Hello world");
        console.log("Hello world");
            console.log("Hello world");
                console.log("Hello world");
                    console.log("Hello world");
    
},2000)



const arrayAverage=(arr)=>{
    let sum=0;
for(let i=0;i<arr.length;i++){

sum+=arr[i];

}
console.log('average is',sum/arr.length);

}

arrayAverage([3,3,3])


const isEven=(num)=>{
if(num%2==0){
    console.log("even");
    
}
else{
    console.log("odd");
    
}
}



isEven(2);
isEven(9)