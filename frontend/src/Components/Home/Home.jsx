import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "../Product/ProductCard.jsx";
import MetaData from "./../MetaData/MetaData";
import { clearErrors, getproduct } from "../../Actions/ProductAction.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import AllReviews from "../AllReviews/AllReviews";
import Header from "../Header/Header";
import Slider from "./Slider";
import FeatureService from "../FeaturedService/FeaturedService";
import Worker from "../Worker/Worker";
import AllBlog from "../AllBlog/AllBlog";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => {
    // console.log(state.products);
    return state.products;
  });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getproduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="WOSTIN" />
 
          <div>
         <Header/>
          </div>
          <div>
         <Slider/>
         <FeatureService/>
          </div>

          <h2 className="homeHeading">FEATURE SERVICE</h2>
          <div>
            <div className="products">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
            <AllReviews />
            <Worker/>
            <AllBlog/>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
