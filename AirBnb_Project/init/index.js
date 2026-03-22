

const mongoose=require("mongoose")
const data=require("./data.js")


const Listing = require("../models/listings.js");

const URL="mongodb://127.0.0.1:27017/wanderlust"

async function main(){

await mongoose.connect(URL)

}


main().then(()=>{
    console.log("connected to db");
    
})
.catch((err)=>console.log(err));


const initDb=async()=>{
    Listing.deleteMany({});
    Listing.insertMany(data.data)
    console.log("data was added");
    
}


initDb();