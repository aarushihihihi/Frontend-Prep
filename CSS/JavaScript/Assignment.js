arr=[1,2,3,4.5,6,2,3]
num =2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
arr.splice(i,1);

}
}

console.log(arr);



let number=287152;
let str = number.toString();

let count=0;
for(let i=0;i<str.length;i++){

count++;

}
console.log(count,'no of digits');



let no=287152;
let str1 = no.toString();

let sum=0;
for(let i=0;i<str1.length;i++){
sum=sum+Number(str1.charAt(i));
}
console.log(sum);




let f=7;
let factorial=1;
for(let i=1;i<f;i++){
    factorial=factorial*i;
}
console.log(factorial);



let ar=[2,4,6,8,9,12,1,9];
let largest=0;
for(let i=0;i<ar.length;i++){
    if(largest<ar[i]){
        largest=ar[i];
    }
}
console.log(largest);
