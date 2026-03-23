
const mongoose=require("mongoose")


const {Schema}=mongoose

main().then(()=>console.log("connection successful")
).catch(err=>console.log(err))
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relations")
}






const userSchema=new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
})


let User=mongoose.model("User",userSchema)


const addUsers=async()=>{

let user1=new User({
    username:"Aarushi",
    addresses:[{location:"Soth ex",city:"Delhi"},{
        location:"Thiruvanmaiyur",city:"Chennai"
    }]
})

let result=
await user1.save();
console.log(result);

}


addUsers();