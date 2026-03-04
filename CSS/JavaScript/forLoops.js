console.log("1");
for(let i=1;i<=10;i++){
    console.log(i);
    
}

for(let i=10;i>=0;i--){
console.log(i);

}

console.log('Printing even numbers');
for(let i=1;i<=15;i++){
if(i%2==0){
    
    console.log(i);
    
}    
}

console.log('Printing even numbers');

for(let i=2;i<=15;i=i+2){
    
    console.log(i);
    

}

console.log('Printing odd numbers');
for(let i=1;i<=15;i++){
if(i%2!=0){
    
    console.log(i);
    
}    
}



for(let i=1000;i>=2;i=i-2){
    console.log(i);
    
}




for(let i=0;i>=10;i++){
    console.log(i);
    
}

let num= prompt("write your number you  wish to print table for");


for(let i=1;i<=10;i++){
    console.log(`${num} *${i}`,i*num);
    
}

for(let i=1;i<=3;i++){

    console.log('outer running',i);
    
    for(let j=1;j<=3;j++){
        console.log('inner running',j);
        
        console.log(j);
        
    }
}


// let i=10;
// while(i){
//     console.log(i);
//     i++;
    
// }


let favMovie="PK";
let guess=prompt("Guess movie");
while(guess!=favMovie){

if(guess!='quit'){
break;
}


console.log("wrong");
guess=prompt("Guess movie again")
}

if(guess==favMovie){
    console.log("fav movie entered,You guessed correct");
    
}


let ik=1;
while(ik<=5){
        if(ik==3){
        break;
    }
    console.log(ik);
    ik++;

}


let fruits=["kiwi","chiku","mango","apple","cucumber"];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
    
}

for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
    
}


let arrays=[["aaru","gupta"],["sanu","gudu"]];
console.log(arrays.length);

for(let i=0;i<arrays.length;i++){
    // console.log(`List ${i}`);
    console.log(i,arrays[i]);
    
for(let j=0;j<arrays[i].length;j++){
console.log(j,arrays[i][j]);

}


}




// FOR OF LOOP :


let fruits1=["kiwi","chiku","mango","apple","cucumber"];

for(a of fruits1){
    console.log(a);
    
}

for(j of "aaru"){
    console.log(j);
    
}


let array=[["aaru","gupta","khu","nu"],["sanu","gudu"]];

for(ls of array){
    console.log(ls);
    for(individual of ls){
        console.log(individual);
        
    }
    
}