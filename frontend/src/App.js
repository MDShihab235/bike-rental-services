import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Products from "./Components/Products/Products.jsx";
import Search from "./Components/Search/Search.jsx";
import LoginSignup from "./Components/User/LoginSignup/LoginSignup";
import { loadUser } from "./Actions/UserAction";
import Store from "./Store";
import { useSelector } from "react-redux";
import UserOptions from "./Components/Header/UserOptions.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import PrivateRoute from "./Components/Route/PrivateRoute/PrivateRoute.jsx";
import UpdateProfile from "./Components/User/UpdateProfile/UpdateProfile.jsx";
import UpdatePassword from "./Components/User/UpdatePassword/UpdatePassword.jsx";
import ForgotPassword from "./Components/User/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./Components/User/ResetPassword/ResetPassword.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Shipping from "./Components/Shipping/Shipping.jsx";
import ConfirmOrder from "./Components/ConfirmOrder/ConfirmOrder.jsx";
import axios from "axios";
import Payment from "./Components/Payment/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Components/Payment/Sucess/OrderSuccess.jsx";
import MyOrders from "./Components/Order/MyOrders/MyOrders.jsx";
import OrderDetails from "./Components/Order/OrderDetails/OrderDetails.jsx";
import Dashboard from "./Components/Admin/Dashboard/Dashboard.jsx";
import WorkerDashboard from "./Components/Admin/WorkerDashboard/WorkerDashboard.jsx";
import ProductList from "./Components/Admin/ProductList/ProductList.jsx";
import NewProduct from "./Components/Admin/NewProduct/NewProduct.jsx";
import UpdateProduct from "./Components/Admin/UpdateProduct/UpdateProduct.jsx";
import OrderList from "./Components/Admin/OrderList/OrderList.jsx";
import ProcessOrder from "./Components/Admin/ProcessOrder/ProcessOrder.jsx";
import UsersList from "./Components/Admin/UsersList/UsersList.jsx";
import UpdateUser from "./Components/Admin/UpdateUser/UpdateUser.jsx";
import ProductReviews from "./Components/Admin/ProductReviews/ProductReviews.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import AllReviews from "./Components/AllReviews/AllReviews.jsx";
import NewBooking from "./Components/Appoinment/NewBooking/NewBooking.jsx";
import SelectTime from "./Components/Appoinment/SelectTime/SelectTime.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import About from "./Components/About/About.jsx";
import FeaturedService from "./Components/FeaturedService/FeaturedService.jsx";
import Test from "./Components/Test/Test.jsx";
import Worker from "./Components/Worker/Worker.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import AllBlog from "./Components/AllBlog/AllBlog.jsx";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
        {/* <Header /> */}

{isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <PrivateRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={LoginSignup} />
        <PrivateRoute exact path="/account" component={Profile} />
        <Route exact path="/me/update" component={UpdateProfile} />
        <PrivateRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/shipping" component={Shipping} />
        <PrivateRoute exact path="/order/confirm" component={ConfirmOrder} />
        <PrivateRoute exact path="/success" component={OrderSuccess} />
        <PrivateRoute exact path="/orders" component={MyOrders} />
        <PrivateRoute exact path="/order/:id" component={OrderDetails} />
        <PrivateRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
           <PrivateRoute
          isAdmin={true}
          exact
          path="/worker/dashboard"
          component={WorkerDashboard}
        />
        <PrivateRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <PrivateRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
          <Route
          exact
          path="/blog/new"
          isAdmin={true}
          component={Blog}
        />
        <Route
          exact
          path="/blogs"
        
          component={AllBlog}
        />
        <PrivateRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <PrivateRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <PrivateRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <PrivateRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
        <PrivateRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
        <PrivateRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />
        <Route exact path="/allReviews" component={AllReviews} />
        <Route exact path="/booking" component={NewBooking} />
        {/* <Route exact path="/selectTime" component={SelectTime} /> */}
        <Route exact path="/Test" component={Test} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/worker" component={Worker} />
        {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
