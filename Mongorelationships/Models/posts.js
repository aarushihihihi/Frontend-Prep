

const mongoose=require("mongoose");

const {Schema}=mongoose;

main().then(()=>console.log("connection successful"))
.catch((err)=>console.log(err)
)


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relations")
}


const userSchema=new Schema({
    username:String,
    email:String
})



const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})



const User=mongoose.model("User",userSchema)
const Post=mongoose.model("Post",postSchema)



const addData=async()=>{
//     let user1=new User({
//         username:"aarushihihi",
//         email:"aaru@gmail.com"
//     });


//     let post1=new Post({
//         content:"Hello my name is AARU",
//         LIKES:10000000
//     })
//     post1.user=user1;
//    let res1= await user1.save();
//    let res2= await post1.save();


//     console.log(res1,res2);


let user=await User.findOne({username:"aarushihihi"})
console.log(user);
let post2=new Post({
    content:"enjoying mountain view",
    likes:78900,

})
post2.user=user;
post2.save();
     
}


addData();