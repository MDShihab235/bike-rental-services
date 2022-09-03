// const Service = require("../models/workerServiceModel");
// const ErrorHandler = require("../utils/errorHandler");
// const catchAsyncError = require("../midleware/catchAsyncError");
// const Features = require("../utils/features");
// const cloudinary = require("cloudinary");

// // Create Service -- Worker
// exports.createService = catchAsyncError(async (req, res, next) => {
//   let images = [];

//   if (typeof req.body.images === "string") {
//     images.push(req.body.images);
//   } else {
//     images = req.body.images;
//   }

//   const imagesLinks = [];

//   for (let i = 0; i < images.length; i++) {
//     const result = await cloudinary.v2.uploader.upload(images[i], {
//       folder: "services",
//     });

//     imagesLinks.push({
//       public_id: result.public_id,
//       url: result.secure_url,
//     });
//   }

//   req.body.images = imagesLinks;
//   req.body.user = req.user.id;

//   const service = await Service.create(req.body);

//   res.status(201).json({
//     success: true,
//     service
//   });
// });