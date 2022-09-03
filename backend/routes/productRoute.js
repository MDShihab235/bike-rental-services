const express = require("express");
const {
  getAllproducts,
  createproduct,
  updateproduct,
  deleteproduct,
  getproductDetails,
  createReview,
  getproductReviews,
  deleteReview,
  getAdminproducts,
  createBlog
 
} = require("../controllers/productControler");
const { isAuthenticatedUser, authorizeRoles } = require("../midleware/auth");

const router = express.Router();

// router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"), createproduct);
router.route("/products").get(getAllproducts);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateproduct);
router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteproduct);
router.route("/product/:id").get(getproductDetails);
router.route("/review").put(isAuthenticatedUser, createReview);
router
  .route("/reviews")
  .get(getproductReviews)
  .delete(isAuthenticatedUser, deleteReview);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminproducts);

  // router
  // .route("/subadmin/products")
  // .get(isAuthenticatedUser, authorizeRoles("worker"), getAdminproducts);

router
.route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createproduct);

 

router
  .route("/admin/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteproduct);
module.exports = router;
