
//for each  : just for loop,doesnt return new array

let arr=[10,20,30];

arr.forEach(function (ele){
console.log(ele);

})


//map   : map() returns a new array with the returned values.

let num=[1,3,5,5,5];

let double=num.map((ele)=>{
    return ele*2;
})

console.log(double);




let students=[
    {
        name:"aaru",
        marks:100

    },{
        name:"sanu",
        marks:100
    },{
        name:"slk",
        marks:94
    }
]


let gpa=students.map((ele)=>{
    return ele.marks/10;
})

console.log(gpa);



//filter

let nums=[4,2,1,4,5,7,8,89,1,2,4,4,5,6,878];

let even=nums.filter((ele)=>(ele%2==0));
console.log(even);

let odd=nums.filter((ele)=>!(ele%2==0));
console.log(odd);



//every  -- returns true if every element of array gives true.else returns false

let elements=[0,2,4]
elements.every((ele)=>{
    console.log((ele%2==0));
    console.log("hello");
    
})


//some : returns true if some elements of array gives true for some function ,else returns false
let elements1=[0,1,3,52,4]
elements1.every((ele)=>{
    console.log((ele%2==0));
    console.log("hello");
    
})

//reduce: returns single value, reducer function with 2 variables for(accumulator,element)


let number=[1,2,3,4];

let finalVal=number.reduce((res,ele)=>{
    console.log(res);
    
    return res+ele;
})

console.log(finalVal);


let array=[45,89,23,14,89,12,100,];

// max=0;
// if(max<arr[i])
// {
//     max=arr[i]
// }


let maxNumber=array.reduce((max,ele)=>{
if(ele>max){  
    max=ele;
}
return max;
})

console.log('Max number', maxNumber);


let array2=[100,32,89,20,30,45,90];

let ans=array2.every((ele)=>{    
})
console.log(ans);




let arrr=[2,-1,-9,-6,40,-11];
function minNumber(arrr){
    let min=arrr[0];
for(let i=0;i<arrr.length;i++){
if(arrr[i]<min){
    min=arrr[i];
}
}
return min;
}

console.log(minNumber(arrr));


function minNumber1(arrr){  //min number find using reduce 
    let minN=arrr.reduce((min,ele)=>{
if(ele<min){
    min=ele
}
return ele;

    });
    return minN;
}


console.log(minNumber1(arrr));



//Default parameters -----

function sum(a,b=9){
    console.log(a+b);
    
}


sum(1)





let arrays=[9,4,5,6,2,3,1,3];
    console.log(Math.min(...arrays));
    
console.log(...arrr);


let chars=[..."hello"];
console.log(chars);


//Spread on object literals :

const data={
    name:"aarushihihihi",
    designation:"sde-4"
}


let datacopy={...data,id:348187}
console.log(data);
console.log(datacopy);

// Rest : 

function sumRest(...args){

}
function m(a,b,c,d)
{
    console.log(arguments);
    
}
m();


// function s(){
//     arguments.reduce((sum,ele)=>{   
//    return sum+ele
//     })
//    }

// console.log(s(3,4,2));


let names=["tony","stark","aaru gupta"];

// let winner=names[2];




let [winner,runnerUp,star]=names
console.log(winner);
console.log(star);



const obj1={
    name:"aaruuuuuuuruuuuururururuur",
    age:'sweet 20',
    company:'microsoft',
    designation:'Manager'
}

let {name:username,designation}=obj1;
console.log(username);
// console.log(name);
console.log(obj1);



let pq=[2,3,4,5,6,7];
let sqStore=pq.map((ele)=>{
return ele*ele;
})

console.log(sqStore);
let sumSquare=sqStore.reduce((res,ele)=>{
    return res+ele;
})

console.log(sumSquare);
const findAvg=sumSquare/pq.length;
console.log(findAvg);


let newArray=pq.map((ele)=>{
return ele+5;
})
console.log(newArray);


let arrayLow=["sanu","aaru","khu","nuuu"]

let upper=arrayLow.map((ele)=>{
    return ele.toLocaleUpperCase();
})
console.log(upper);


const doubleAndReturnArgs=(pq,...args)=>
[...pq,...args.map((v)=>{
  return  v*2;
})]


console.log(doubleAndReturnArgs([1,2,3],244));



const mergeObjects=(obj1,obj2)=>(
    ({...obj1,...obj2})
    
)


console.log(mergeObjects({a:1,b:2},{c:5,d:9})
);
