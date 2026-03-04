


// function saveToData(data,success,failure){


//     let internetSpeed=Math.floor(Math.random()*10)+1;

//     document.querySelector('body').append(internetSpeed)
//     if(internetSpeed>4){
// success(); 
//    }
//     else{
// failure()    ;    
//     }
// }




// saveToData("aarushi",()=>{
// console.log("data saved");

// },()=>{
// console.log("weak connection");

// })

function saveData(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;

        document.querySelector('body').append(internetSpeed)
        if(internetSpeed>4){
            resolve();
        }
        else{
            reject();
        }
    })
}

saveData("aarushihiu")
.then(()=>{
    console.log("data 1 resolved");

    return saveData("gupta")
    
})
.then(()=>{
        console.log("data2 resolved");
        
    })
.catch(()=>{
    console.log("rejected");
    
    
})
