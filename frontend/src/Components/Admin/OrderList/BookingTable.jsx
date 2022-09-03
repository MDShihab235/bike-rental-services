import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deleteOrder,
  getAllOrders,
  clearError,
} from "../../../Actions/OrderAction";
import { DELETE_ORDER_RESET } from "../../../Constants/OrderConstants";
import Sidebar from "../Sidebar/Sidebar";

const BookingTable = ({history,match}) => {

    const dispatch = useDispatch();
  
    const alert = useAlert();
  
    const { error, orders } = useSelector((state) => state.allOrders); 
    console.log(orders);
   
  
  
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
        // history.replace("/admin/orders");
        dispatch({ type: DELETE_ORDER_RESET });
      }
  
      dispatch(getAllOrders());
    }, [dispatch, alert, error, history, deleteError, isDeleted]);
    return (
        <div>
             <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

         
          <div class="table">
        <div class="table_section">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Date</th>
                        <th>Booking ID</th>
                        <th>Services</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                   

                {
                        orders?.map((el, index) => <tr>
                      
                        <td>{index + 1}</td>
                        <td>{el.bookingDate}</td>
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

export default BookingTable;