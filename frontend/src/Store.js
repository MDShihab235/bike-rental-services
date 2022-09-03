import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteproductReducer,
  newproductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer,
  updateproductReducer,
} from "./Reducers/productReducer";
import {
  allUsersReducer,
  blogReducer,
  forgotPasswordReducer,
  newBlogReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./Reducers/userReducer";
import { cartReducer } from "./Reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newAppoinmentReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./Reducers/orderReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  // newAppoinment: newAppoinmentReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newproduct: newproductReducer,
  blogs: newBlogReducer, 
  allBlog: blogReducer,
  deleteproduct: deleteproductReducer,
  updateproduct: updateproductReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
