// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import "./ProductCard2.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// const ProductCard = ({ product }) => {
//   const theme = useTheme();
//   const {
//     name,
//     images,
//     numOfReviews,
//     price,
//     ratings,
//     _id,
//     category,
//     description,
//   } = product;
//   console.log(product);
//   const options = {
//     edit: false,
//     color: "rgba(20,20,20,0.1)",
//     activeColor: "#faaf00 ",
//     value: ratings,
//     isHalf: true,
//     size: window.innerWidth < 600 ? 20 : 25,
//   };
//   return (
//     <Fragment>
//       {/* <img src={images[0].url} alt={name} />
//             <p>{name}</p>
//             {/* <p>
//             <ReactStars {...options}/>
//             <small>({numOfReviews} Reviews)</small>
//             </p>   */}
//       {/* <span>{`$ ${price}`}</span>  */}
//       <div class="productCard2">
//         <div class="productCard_img">
//           <img src={images[0].url} alt={name} />
//         </div>
//         <div class="productCard_info">
//           <h1 class="productCard_title">{name}</h1>
//          <div>
//          <p class="productCard_text"> Price : <span>{price}</span></p>
//          <p class="productCard_text">catagory: <span>{category}</span></p>
//           {/* <Link to="#" class="productCard_btn">
//             Add To Cart
//           </Link> */}
//           <p class="productCard_text">description: <span>{description.slice(0,90)}...</span></p>
//          </div>
//           <Link
//             to={`/product/${_id}`}
//             class="productCard_btn"
//             style={{ marginLeft: "10px" }}
//           >
//        <ArrowForwardIcon/>
//           </Link>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default ProductCard;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   More products...
// ]

export default function ProductCard2({product}) {
  const {
        name,
        images,
        numOfReviews,
        price,
        ratings,
        _id,
        category,
        description, } = product;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={images[0].url}
                  alt="service image"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
            </a>
       
        </div>
      </div>
    </div>
  )
}

