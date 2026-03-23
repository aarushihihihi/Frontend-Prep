


const mongoose=require("mongoose");

let {Schema}=mongoose
main().then(()=>console.log('connection to db succesfull')).catch((err)=>console.log(err))

async function main(){

await mongoose.connect("mongodb://127.0.0.1:27017/relations");


}


const orderSchema=new Schema({
item:String,
price:Number
})


const customerSchema=new Schema({
    name:String,
    orders:[
        {type:Schema.Types.ObjectId,ref:'Order'}
    ]
})



// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre middleware");
    
// })



customerSchema.post("findOneAndDelete",async(customer)=>{
    console.log(customer,'c');
    
if(customer.orders.length){
   let res=await Order.deleteMany({_id:{$in:customer.orders}})
   console.log(res);
   
}    
})


const Order=mongoose.model("Order",orderSchema);

const Customer=mongoose.model("Customer",customerSchema);


// const addCustomer=async()=>{

//     let cust1=new Customer(
//         {name:"Aarushi"}
//     );

// let order1=await Order.findOne({item:"momos"})

// let order2=await Order.findOne({item:"samosa"})


// cust1.orders.push(order1);
// cust1.orders.push(order2);

// let res=await cust1.save();
// console.log(res);



// }

const findCustomer=async()=>{
    let res=await Customer.find({}).populate("orders");
    console.log(res[0]);
    
}
findCustomer();

// addCustomer();



// const addOrder=async()=>{
//     let res=await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"burger",price:150},
//         {item:"momos",price:60}
    
//     ]
    
//     )
    
//     console.log(res);
    
// }


// addOrder();



// const addCustomer=async()=>{
//     let cust1=new Customer({
//         name:'JOy'
//     })



//     let newOrder=new Order({
//         name:"pizza",
//         price:400
//     })

//     cust1.orders.push(newOrder);
//     await newOrder.save();
//     await cust1.save();
// }


//  addCustomer();




const delCust=async()=>{
    let data =await Customer.findByIdAndDelete("69c173c28e06d4291163a029");
    console.log(data);
    
}

delCust();