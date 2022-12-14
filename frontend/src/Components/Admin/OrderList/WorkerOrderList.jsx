import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../ProductList/ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../MetaData/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deleteOrder,
  getAllOrders,
  clearError,
} from "../../../Actions/OrderAction";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";
import Sidebar from "../Sidebar/Sidebar";

const WorkerOrderList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);
  console.log(orders);

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log(user._id);
  const res = orders?.filter(book => book.user === user._id)
  console.log(res);

  const { error: deleteError, isDeleted } = useSelector((state) => {
    // console.log(state);
    return state.order;
  });

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearError());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      history.push("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, history, deleteError, isDeleted]);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 150,
//       flex: 0.5,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Confirmed"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
  
//     {
//       field: "amount",
//       headerName: "Amount",
//       type: "number",
//       minWidth: 270,
//       flex: 0.5,
//     },

//     {
//       field: "actions",
//       flex: 0.3,
//       headerName: "Actions",
//       minWidth: 150,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Fragment>
//             <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
//               <EditIcon />
//             </Link>

//             <Button
//               onClick={() =>
//                 deleteOrderHandler(params.getValue(params.id, "id"))
//               }
//             >
//               <DeleteIcon />
//             </Button>
//           </Fragment>
//         );
//       },
//     },
//   ];

//   const rows = [];

//   res &&
//   res.forEach((item) => {
//       rows.push({
//         id: item._id,
//         itemsQty: item.orderItems.length,
//         amount: item.totalPrice,
//         status: item.orderStatus,
//       });
//     });

  return (
    <div>
             <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id="productListHeading">ALL BOOKING</h1>

         
          <div class="table">
        <div class="table_section">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Booking ID</th>
                        <th>Services</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   

                {
                        res?.map((el, index) => <tr>
                      
                        <td>{index + 1}</td>
                        <td>{el._id} </td>
                        <td>{el.orderItems.map((item) => <ul>{item.name} </ul>)} </td>
                        <td className={el.orderStatus === "Processing" ? "redColor" : "greenColor"}>{el.orderStatus}</td>
                        <td>{el.totalPrice}</td>
                        <td> 
                        <button> 
                        <Link to={`/admin/order/${el._id}`}>
                        <EditIcon style={{textDecoration: 'none',color: 'white'}}/>
                       </Link> 
                       </button>

                      <button   style={{textDecoration: 'none',color: 'white'}} onClick={() => deleteOrderHandler(el._id)} >   
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
  );
};

export default WorkerOrderList;