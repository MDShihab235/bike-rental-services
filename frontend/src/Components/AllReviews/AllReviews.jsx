import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import MetaData from "./../MetaData/MetaData";
import ReviewsCard from "./ReviewCard/ReviewsCard.jsx";

const AllReviews = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => {
    return state.products;
  });
  console.log(products);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ALL REVIEWS -- ECOMMERCE" />
          <h2 className="productsHeading">ALL REVIEWS </h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ReviewsCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AllReviews;
