import React, { Fragment } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteproduct,
  getAdminProduct,
} from "../../../Actions/ProductAction.js";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../../MetaData/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_PRODUCT_RESET } from "../../../Constants/ProductConstants";
import { useEffect } from "react";
import WorkerProductList from "./WorkerProductList";
import Sidebar from "../Sidebar/Sidebar";


const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => {
    // console.log(state);
    return state.products;
  });
 

    // // products.map(pb => pb.filter(pb.user == user._id))
    // const map1 = products.map(pb=>pb.filter(pb.user === user._id ));
    // console.log(map1);
  
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log(user._id);
  const res = products.filter(pd => pd.user === user._id)
  console.log(res);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteproduct
  );

  const deleteproductHandler = (id) => {
    dispatch(deleteproduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("product Deleted Successfully");
      // history.push("/admin/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, history, deleteError, isDeleted]);

  // const columns = [
  //   { field: "id", headerName: "product ID", minWidth: 200, flex: 0.5 },

  //   {
  //     field: "name",
  //     headerName: "Name",
  //     minWidth: 350,
  //     flex: 1,
  //   },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     type: "test",
  //     minWidth: 150,
  //     flex: 0.3,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Available"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },

  //   {
  //     field: "price",
  //     headerName: "Price",
  //     type: "number",
  //     minWidth: 270,
  //     flex: 0.5,
  //   },

  //   {
  //     field: "actions",
  //     flex: 0.3,
  //     headerName: "Actions",
  //     minWidth: 150,
  //     type: "number",
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <Fragment>
  //           <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
  //             <EditIcon />
  //           </Link>

  //           <Button
  //             onClick={() =>
  //               deleteproductHandler(params.getValue(params.id, "id"))
  //             }
  //           >
  //             <DeleteIcon />
  //           </Button>
  //         </Fragment>
  //       );
  //     },
  //   },
  // ];

  // const rows = [];
  
  // products &&
  // products.forEach((item) => {
  //     rows.push({
  //       id: item._id,
  //       status: item.status,
  //       price: item.price,
  //       name: item.name,
  //     });
  //   });

  return (
    <Fragment>
      <MetaData title={`ALL Service - Admin`} />
      {user?.worker === "no" ? <>
     <div>
             <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL SERVICES</h1>

         
          <div class="table">
        <div class="table_section">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>SERVICE ID</th>
                        <th>Services</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   

                {
                        products?.map((el, index) => <tr>
                      
                        <td>{index + 1}</td>
                        <td>{el._id} </td>
                        <td>{el.name} </td>
                        <td className={el.status === "Available" ? "greenColor" : "redColor"}>{el.status}</td>
                        <td>{el.price}</td>
                        <td> 
                        <button> 
                        <Link to={`/admin/product/${el._id}`}>
                        <EditIcon style={{textDecoration: 'none',color: 'white'}}/>
                       </Link> 
                       </button>

                      <button   style={{textDecoration: 'none',color: 'white'}} onClick={() =>  deleteproductHandler(el._id)} >   
                       <DeleteIcon/>
                       </button> 
                       </td>
                       
                         
                    </tr>)
                    }
          
                </tbody>
            </table>
        </div>
    </div>
        </div>
      </div>
        </div>
      </> : <>
        <WorkerProductList/>
      </>
      }
    </Fragment>
  );
};

export default ProductList;
