import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./WorkerDashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../../Actions/ProductAction";
import { getAllOrders } from "../../../Actions/OrderAction";
import { getAllUsers } from "../../../Actions/UserAction.js";
import MetaData from "../../MetaData/MetaData";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MoneyIcon from '@mui/icons-material/Money';

const WorkerDashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log(user);
 
  // let outOfStock = 0;

  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

    const workerService = products?.filter(pd => pd.user === user._id)
  console.log(workerService);

  const workerOrder = orders?.filter(book => book.user === user._id)
  console.log(workerOrder);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
  }, [dispatch]);

  let totalAmount = 0;
  workerOrder &&
  workerOrder.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Not Available", "AvailableIn"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [1, 5],
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" style={{color:'#2E8B57'}}>Worker Dashboard</Typography>

        <div className="dashboardSummary">

          <div className="dashboardSummaryBox2">

         <div className="admin-card">   
              <p>Total Amount</p>
              <p><MoneyIcon fontSize="large"/></p>
              <p>${totalAmount}</p>
          
        </div>   
        <div className="admin-card" style={{backgroundColor:'#55b2dd'}}>     
           <p>Services</p>
           <p> <CleaningServicesIcon fontSize="large"/></p>
           <p>{workerService  && workerService.length}</p>  
         </div>

      <div className="admin-card" style={{backgroundColor:'#d73b3e'}}>
      <p>Booking</p>
      <p><AssignmentIcon fontSize="large"/></p>
      <p>{workerOrder && workerOrder.length}</p>
     </div> 

          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        {/* <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>  
    </div>
  );
};

export default WorkerDashboard;
