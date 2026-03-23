const stu1={
    name:"aarushi",
    desig:"tech lead",
    comapny:"google",
    pay:"40lpa",
    getIncreament:function(){
        return this.pay;
    }
}

const stu2={
    name:"joy",
    desig:"manager",
    comapny:"google",
    pay:"40lpa",
    getIncreament:function(){
        return this.pay;
    }
}

const stu3={
    name:"sanuu",
    desig:"manager",
    comapny:"google",
    pay:"40lpa",
    getIncreament:function(){
        return this.pay;
    }
}


let arr=[2,4,52,1];
let arr2=["hi",2,1,31,3,2,4,52,1];


arr.sayHello=()=>{
    console.log("hello arr2");
    
}

arr2.sayHello=()=>{
    console.log("hello aar2");
    
}


// arr.__proto__
arr.__proto__.push=(n)=>{console.log("pushing number",n)}


Array.prototype;
String.prototype;




function maker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`name is ${this.name}`);
            
        }
    };
    return person
}

let p1=maker(12,4);
console.log(p1);

console.log(p1.talk());


//constructors  doesn't return anything ,starts with capital letters

function Person(name,age){
this.name=name;
this.age=age;
}

let p3=new Person("aaruuu",89)
console.log(p3.name);

let p4=new Person("sanuuuuuuuuuu",89)
console.log(p4.name);


Person.prototype.talk=function(){
    console.log(`hi my name is ${this.name}`);
    
}

class PersonClass{
constructor(name,age){
this.name=name;
this.age=age;

}
talk(){
console.log(`hello ${this.name}`);
}

}

let per1=new PersonClass("aaru",902)
let per2=new PersonClass("aaru",902)
console.log(per1);


class Teacher extends PersonClass{
constructor(name,age,subject,talk){
    super(name,age,talk)  //parent class constructor cslled
    this.subject=subject;
}
}

let t1=new Teacher("aarushihihi",99);
t1.talk();