
const express=require("express");
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
const ejsMate=require("ejs-mate");
app.engine("ejs",ejsMate)
const port =8080;

const joi=require("./schema.js")

const wrapAsync=require("./utils/wrapAsync.js")
const ExpressError=require("./utils/ExpressError.js")
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
const mongoose=require("mongoose");
const Listing = require("./models/listings.js");
const ListingSchema = require("./schema.js");

const URL="mongodb://127.0.0.1:27017/wanderlust"
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.json()); // for parsing JSON

app.use(express.static(path.join(__dirname,"/public")))



async function main(){

await mongoose.connect(URL)

}


main().then(()=>{
    console.log("connected to db");
    
})
.catch((err)=>console.log(err));





app.get("/",(req,res)=>{
    res.send("working fine")
})


const validateListing=(req,res,next)=>{
let {error}=ListingSchema.validate(req.body);
if(error){
    let errMsg=error.details.map((el)=>el.message).join("")
    throw new ExpressError(400,errMsg)
}
    next()
}



// app.get("/testlisting",async(req,res)=>{
//     const sampleListing=new Listing({
//         title:"my home",
//         description:"beach",
//         price:4000,
//         location:"goa",
//         country:"India"

//     });

//     await sampleListing.save();
//     console.log("saved");
//     res.send("saved")
    
// })


// Index Route

app.get("/listings",async(req,res)=>{


  const allListings=  await Listing.find({});

  res.render("listings/index.ejs",{allListings})
})

app.get("/listing/new",(req,res)=>{
    res.render("listings/new.ejs")
})



//error handling 





app.post("/listing/new",
    validateListing,
  wrapAsync( async(req,res,next)=>{

if(!req.body.listing){
    throw new ExpressError(400,"Send valid data for listing")
}



let listing=new Listing(req.body.listing);

await listing.save();
console.log(listing);

res.redirect("/listings")

}
  )

)

//show route : get by id


app.get("/listings/:id",validateListing,async(req,res)=>{
    let {id}= req.params;
const listing =await Listing.findById(id);

res.render("show.ejs",{listing})
})



app.get("/listings/:id/edit",async(req,res)=>{


let {id} =req.params;
const listing =await Listing.findById(id);
res.render("listings/edit.ejs",{
    listing
})

})


app.put("/listings/:id/edit",validateListing,async(req,res)=>{
     let {id} =req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
     console.log(listing);
     res.redirect("/listings")
     
})


app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
})


app.all(/.*/,(req,res,next)=>{
    next(new ExpressError(404,"Page not found"))
})



app.use((err,req,res,next)=>{
let {statusCode=500,message}=err;
res.render("Errors.ejs",{
    statusCode,message
})

})



app.listen(port,()=>{
    console.log(`listening to port`,port);
    
})