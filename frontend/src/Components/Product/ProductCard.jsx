import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearErrors, getproduct } from "../../Actions/ProductAction";
// import "./ProductCard.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductCard = ({ product }) => {
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
  //   <div className="bg-white">
  //   <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //     <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

  //     <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  //       {products?.map((product) => (
  //         <div key={product.id} className="group relative">
  //           <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
  //             <img
  //               src={product.images[0].url}
  //               alt="service image"
  //               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
  //             />
  //           </div>
  //           <div className="mt-4 flex justify-between">
  //             <div>
  //               <h3 className="text-sm text-gray-700">
  //                 <a href={product.href}>
  //                   <span aria-hidden="true" className="absolute inset-0" />
  //                   {product.name}
  //                 </a>
  //               </h3>
  //               {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
  //             </div>
  //             <p className="text-sm font-medium text-gray-900">{product.price}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
  <></>
  );
};

export default ProductCard;
