import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import profile from "../../../image/Profile.png";

const ReviewsCard = ({ product }) => {
  //     const[allReviews,setAllReviews] = useState()
  //     console.log(allReviews);
  //     useEffect(() => {},[allReviews])
  // {
  //     product.reviews.map((review) => setAllReviews(review))
  // }

  const options = {
    value: product?.reviews[0]?.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profile} alt="User" />
      <p>{product?.reviews[0]?.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{product?.reviews[0]?.comment}</span>
    </div>
  );
};

export default ReviewsCard;
