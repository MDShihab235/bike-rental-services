const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder, newAppoinment } = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../midleware/auth");
const router = express.Router();



router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/appoinment/new").post(newAppoinment);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);


module.exports = router;
