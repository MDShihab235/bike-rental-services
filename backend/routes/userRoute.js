const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  createBlog,
  getAllBlog,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../midleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);
router
  .route("/admin/users")
  .get( getAllUser);
router
  .route("/admin/user/:id")     
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
router.route("/blog/new").post(isAuthenticatedUser, authorizeRoles("user"),createBlog)       
router.route("/blogs").get(getAllBlog);                
module.exports = router;       
