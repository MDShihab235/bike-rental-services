import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../ProductList/ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../../MetaData/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "../Sidebar/Sidebar";
import './OrderList.css'
import {
  deleteOrder,
  getAllOrders,
  clearError,
} from "../../../Actions/OrderAction";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";
import WorkerOrderList from "./WorkerOrderList";
import BookingTable from "./BookingTable";

const OrderList = ({ history }) => {
  const [booking,setBooking] = useState()
  console.log(booking);
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders); 


  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  // console.log(user._id);
 

  // const { error: deleteError, isDeleted } = useSelector((state) => {
  //   // console.log(state);
  //   return state.order;
  // });

  // const deleteOrderHandler = (id) => {
  //   dispatch(deleteOrder(id));
  // };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearError());
  //   }

  //   if (deleteError) {
  //     alert.error(deleteError);
  //     dispatch(clearError());
  //   }

  //   if (isDeleted) {
  //     alert.success("Order Deleted Successfully");
  //     history.push("/admin/orders");
  //     dispatch({ type: DELETE_ORDER_RESET });
  //   }

  //   dispatch(getAllOrders());
  // }, [dispatch, alert, error, history, deleteError, isDeleted]);

  // const columns = [
  //   { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

  //   {
  //     field: "status",
  //     headerName: "Status",
  //     minWidth: 150,
  //     flex: 0.5,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "status") === "Confirmed"
  //         ? "greenColor"
  //         : "redColor";
  //     },
  //   },
  
  //   {
  //     field: "amount",
  //     headerName: "Amount",
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
  //           <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
  //             <EditIcon />
  //           </Link>

  //           <Button
  //             onClick={() =>
  //               deleteOrderHandler(params.getValue(params.id, "id"))
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

  
  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />
      {user?.worker === "no" ? <>
       <BookingTable/>
      </> : <>
        <WorkerOrderList/>
      </>
      }
    </Fragment>
  );
};

export default OrderList;
