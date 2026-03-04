


let array =[10,20,30,40]
array.push(90);
array.pop();
console.log(array);
array.unshift("hihi")
console.log(array);

array.shift();
console.log(array);

let jk=["a","b","c"]
let y=jk.shift();
console.log('yyyyyyyyyyyyyyyyyy',y);

let 
students =[23,"aaru"
    ,"sanu","khu","nu","su"]
console.log(students[0]);

//Typeof array : objects

let emp=[];
console.log(emp);
console.log(typeof(students[0]));
 students[0]="aardu";
 console.log(students[0]);
 

 let a="hjjj";
 console.log(a);
 a="jjff";
 console.log(a);
 






 let start =["january","july","march","august"];

 start.shift();
  start.shift();
 
 start.unshift("june")
 start.unshift("july")
 console.log(start);
 console.log( start.indexOf("j"));
 

 console.log(start.includes("july"));
 


 let str1=["10","hihihi",89.764]
 let str2=["789383",'ss'];
 console.log(str1.concat(str2));
 
 console.log(str1.reverse());
 console.log(str1);
 
 




 let fruits =["kiwi","mango","chiku","banana","strawberry"]

 console.log( fruits.slice());  // [ 'kiwi', 'mango', 'chiku', 'banana', 'strawberry' ]


 
 console.log( fruits.slice(2)); //[ 'chiku', 'banana', 'strawberry' ]

 console.log( fruits.slice(2,4)); //[ 'chiku', 'banana', 'strawberry' ]


 console.log(fruits.slice(7));  // []


 console.log(fruits.slice(-4));   //last 4 elements ----- [ 'mango', 'chiku', 'banana', 'strawberry' ]
 


console.log(fruits.splice(4));   //[ 'strawberry' ] removes this element

console.log(fruits);


console.log(fruits.splice(0,1));   //delete 1 element from 0 th index [ 'mango', 'chiku', 'banana' ]

console.log(fruits);

console.log(fruits.splice(0,3));
console.log(fruits.splice(0,0,"klo"));
console.log(fruits.splice(1,0,"koploj"));

console.log(fruits);



let days=["mon","tue","wed","thru","fri","sat","sun"]
console.log(days);
console.log(days.sort());


console.log(days);


let num=[290,100,42,67]
console.log(num.sort());



 let st=["january","july","march","august"];
console.log(st.splice(0,2,"june","july"));
console.log(st);


let lan=["c","c++","js","python","java","c#","sql"];
console.log(lan.reverse().indexOf("js"));



//Address References

[1]==[1]

console.log([1]==[1]);  //diffrent address


let arr1=[1]
let arr2=[1]
console.log(arr1===arr2);

let arr3=arr2;
console.log(arr2===arr3);
console.log(arr3);




const g=[90,89];

console.log(g);
console.log(g.push(6));

console.log(g);


let nums=[[2,3],[8,6],[0,1]];
console.log(nums);
console.log(nums.length);
console.log(nums[0][1]);



let tictoe=[['X',,'0'],['','X',''],['O','','X']]
console.log(tictoe);




let array1=[7,9,0,-2];
let n=3
console.log(array1.slice(0,n));


console.log(array1.slice(arr1.length-n));


let sr="";
console.log(sr.length>0);

let yq="a";
console.log(yq);

let ind=0;
if(yq[ind]==yq[ind].toLocaleLowerCase()){
    console.log("lower");
    
}


let trail="                 kl            yujnd         ";
console.log(trail.trim());


let op=[90,23,12];
let item=90;
if(op.indexOf(item)!=-1){
    console.log("found");
    
}