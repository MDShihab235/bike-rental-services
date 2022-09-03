const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database")
// const v8 = require("v8")


// const totalHeapSize = v8.getHeapStatistics().total_available_size
// console.log(totalHeapSize);
// let totalHeapSizeInGB = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2)
// console.log(totalHeapSizeInGB);
 

//Handling Uncaught Error/Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the the server due to Uncaught Exception`);
    process.exit(1);
})


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}
  
//database connection
connectDatabase()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  


const server = app.listen(process.env.PORT,()=>{
    console.log(`Hello, i am working on http://localhost:${process.env.PORT}`);
})



//Unhandle Promise Rejection 
process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to unhandle promise rejection`)
    server.close(()=>{
        process.exit(1)
    });
})
