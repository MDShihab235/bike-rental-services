const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";


//Mongodb Wrong ID Error
if(err.name === "CastError") {
  const message = `Resource not found invalid : ${err.path}`;
  err = new ErrorHandler(message, 400)
}


  //Mongo Dublicate Key Error
  if(err.code === 11000){
   const message = `Dublicate ${Object.keys(err.keyValue)} Entered`;
   err = new ErrorHandler(message, 400)
  }

  //Wrong JWT Error
  if(err.code === "jsonWebTokenError"){
    const message = 'Json Web Token is invalid,try again';
    err = new ErrorHandler(message, 400)
   }

   //JWT Expire Error
   if(err.code === "TokenExpiredError"){
    const message = 'Json Web Token is expired,try again';
    err = new ErrorHandler(message, 400)
   }


  res.status(err.statusCode).json({
      success: false,
      message : err.message,
      error : err.stack
      
  })

};
