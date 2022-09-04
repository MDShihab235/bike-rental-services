const express = require("express");
const {
  getAllServices,
  createproduct,
  updateService,
  deleteService,
  getServiceDetails,
  createReview,
  getServiceReviews,
  deleteReview,
  getAdminServices,
  createBlog,
  createService
 
} = require("../controllers/productControler");
const { isAuthenticatedUser, authorizeRoles } = require("../midleware/auth");

const router = express.Router();

// router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"), createproduct);
router.route("/products").get(getAllServices);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateService);
// router
//   .route("/product/:id")
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteproduct);
router.route("/product/:id").get(getServiceDetails);
router.route("/review").put(isAuthenticatedUser, createReview);
router
  .route("/reviews")
  .get(getServiceReviews)
  .delete(isAuthenticatedUser, deleteReview);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"),  getAdminServices);

  // router
  // .route("/subadmin/products")
  // .get(isAuthenticatedUser, authorizeRoles("worker"), getAdminproducts);

router
.route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"),createService);

 

router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteService);
module.exports = router;
