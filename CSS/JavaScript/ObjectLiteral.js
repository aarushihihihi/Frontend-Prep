let obj={
    name:"aarushi",
    age:23,
    course:["apna clg","striver"]
}
console.log(obj);
console.log(obj.course);
console.log(obj.course[1]);
console.log(obj.course.push("udemy"));
console.log(obj.course);


console.log(obj.age);


const twitter={
    username:"@aarushihihihi",
    content:"DSA",
    likes:20000,
    reposts:100,
    tags:["sanu","aaru"]
}
console.log(twitter);
console.log(twitter["username"]);


let prop="reposts";   //variable declare 
console.log(twitter[prop]);



const o={
    1:"rebhjrf",
    null:'frdcj'
}
console.log(o.null);
o.null="aaru";
console.log(o.null);
console.log(o);
o.gender="Female";
console.log(o);
delete o[1];
delete o.null;
console.log(o);






const objOfObjs={
    sanu:{
        grade:'a',
        name:'btech'
    },
    aarushi:{
        course:'dsa',
        cmpny:"cdac"
    }
}
console.log(objOfObjs);

console.log(objOfObjs.sanu.name);

console.log(objOfObjs.aarushi);


// Array Of Objects :

const array=[
    {
        name:"aarushi",
        desig:"sde"
    },{
        name:"sanu",
        des:"dev"
    }
]
console.log(array);
console.log(array[1].des);
array[1].des="Senior software dev"
console.log(array[1]);


console.log(Math.abs(-12));
console.log(Math.pow(2,6));

console.log(Math.floor(2.9));
console.log(Math.ceil(6.8));
console.log(Math.ceil(6.01)); 
console.log(Math.random());  //between 0 to 1 (excluse 1)





//Random Number b/w 1 to 10

let num=Math.floor(Math.random()*10)+1;
console.log(num);



//b/w 1 and 100


let num1=Math.floor(Math.random()*100)+1;
console.log(num1);


//b/w 21 and 25


let num2=Math.floor(Math.random()*5)+21;
console.log(num2);
