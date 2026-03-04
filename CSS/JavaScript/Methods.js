const calc={
    add:function(a,b){
        return a+b;
    },

    sub :function(a,b){
        return a-b;
    },
    mul:function(a,b){
return a*b;
    }

}
console.log(calc);

console.log(calc.add(8,3));




let str="abcdabcdefgggh";
let ans="";

let uniqueCharacters=function(str){
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i);
    if(ans.indexOf(ch)==-1){
ans=ans+ch;    }

    }
    return ans;
}


console.log(uniqueCharacters(str));


let s="aedffflojioguaa";
let count=0;
let numberOfVowels=function(s){
for(let i=0;i<s.length;i++){
            let ch=s.charAt(i);

if((ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')){
    count++;
}
}
return count;
}

console.log(numberOfVowels(s));



let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;
let elementLargerThanNumber=function(arr){
    for(let i=0;i<arr.length;i++){
if(arr[i]>num){
    console.log(arr[i]);
    
}
    }
}

console.log(elementLargerThanNumber(arr));




let generateRandomNumber=function(start,end){
let diff=end-start;
let random=Math.floor(Math.random() *diff)+start;
return random;

}

console.log(generateRandomNumber(1,6));




let country=["Australia","Germany","United States Of America"];

let longestLength=function(country){

let ansIndex=0;

for(let i=0;i<country.length;i++){
let ansLemgth=country[ansIndex].length;
let currLemgth=country[i].length;
if(currLemgth>ansLemgth){
    ansIndex=i;
}

}
return country[ansIndex]



}



console.log(longestLength(country));
