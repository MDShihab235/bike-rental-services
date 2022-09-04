const Service = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../midleware/catchAsyncError");
const Features = require("../utils/features");
const cloudinary = require("cloudinary");

// Create Service -- Admin
exports.createService = catchAsyncError(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "services",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    service
  });
});
   

// Delete product

exports.deleteService = catchAsyncError(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < service.images.length; i++) {
    await cloudinary.v2.uploader.destroy( service.images[i].public_id);
  }

  await service.remove();

  res.status(200).json({
    success: true,
    message: "product Delete Successfully",
  });
});

//get all product
exports.getAllServices = catchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler("This is testing error",500))
  const resultPerPage = 4;
  const productCount = await Service.countDocuments();
  const apiFeatures = new Features(Service.find(), req.query).search().filter();

  let products = await apiFeatures.query;
  // console.log(products.length);

  let filteredproductsCount = products.length;

  apiFeatures.pagination(resultPerPage);

  products = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    products,
    productCount,
    resultPerPage,
    filteredproductsCount,
  });
});

//get single product details
exports.getServiceDetails = catchAsyncError(async (req, res, next) => {
  const product1 = await Service.findById(req.params.id);
  
  if (!product1) {
    return next(new ErrorHandler("product Not Found", 404));
  }

  res.status(200).json({
    isSuccess: true,
    product1,
  });
});

//update product(Admin)
exports.updateService = catchAsyncError(async (req, res, next) => {
  let service = await Service.findById(req.params.id);

  if (!service) {
    return next(new ErrorHander("product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < service.images.length; i++) {
      await cloudinary.v2.uploader.destroy(service.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "services",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  service  = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    service,
  });
});

//Create Review and Update the Review
exports.createReview = catchAsyncError(async (req, res, next) => {
  // console.log(req);
  const { rating, comment, productId } = req.body;
  const newReview = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const reviewedProduct = await Service.findById(productId);

  const isReviewed = reviewedProduct.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    reviewedProduct.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString())
        (review.rating = rating), (review.comment = comment);
    });
  } else {
    reviewedProduct.reviews.push(newReview);
    reviewedProduct.numOfReviews = reviewedProduct.reviews.length;
  }

  let avg = 0;
  reviewedProduct.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  reviewedProduct.ratings = avg / reviewedProduct.reviews.length;

  await reviewedProduct.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getServiceReviews = catchAsyncError(async (req, res, next) => {
  const review = await Service.findById(req.query.id);
  
  if (!review) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
     allReview: review.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncError(async (req, res, next) => {
  const service = await Service.findById(req.query.productId);
  // console.log(service);
  if (!service) {
    return next(new ErrorHandler("service not found", 404));
  }

  const review = service.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  review.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (review.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / review.length;
  }

  const numOfReviews = review.length;

 await Service.findOneAndUpdate(
    req.query.productId,
    {
      review,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
// console.log( review, numOfReviews,ratings);
console.log(await Service.findById(req.query.productId));
  res.status(200).json({

    success: true,
    
  });
});

// Get All Service (Admin)
exports. getAdminServices = catchAsyncError(async (req, res, next) => {
  const products = await Service.find();

  res.status(200).json({
    success: true,
    products,
  });
});
