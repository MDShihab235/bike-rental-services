import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../../Actions/ProductAction";
import { getAllOrders } from "../../../Actions/OrderAction";
import { getAllUsers } from "../../../Actions/UserAction.js";
import MetaData from "../../MetaData/MetaData";
import WorkerDashboard from "../WorkerDashboard/WorkerDashboard"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import MoneyIcon from '@mui/icons-material/Money';
const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  // const workerService = products?.filter(pd => pd.user === user._id)
  // console.log(workerService);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
console.log(user);
  // let outOfStock = 0;

  // products &&
  //   products.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });
     totalAmount = totalAmount.toFixed(2)

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
    labels: ["Not Available", "Available"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [1, 5],
      },
    ],
  };

  return (
    <div>
     <MetaData title="Dashboard - Admin Panel" />
     {user?.worker === "no" ? 
     <>
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" style={{color:'#2E8B57'}}>Dashboard</Typography>

        <div className="dashboardSummary">

          <div className="dashboardSummaryBox2">

         <div className="admin-card">   
              <p>Total Amount</p>
              <p><MoneyIcon fontSize="large"/></p>
              <p>${totalAmount}</p>
          
        </div>   
              <div className="admin-card" style={{backgroundColor:'#3cd070'}}>
              <p>Total Earning</p>
              <p><MoneyIcon fontSize="large"/></p>
              <p>${totalAmount * 0.3}</p>
              </div>
          </div>
   
          <div className="dashboardSummaryBox2">
          
            <div className="admin-card" style={{backgroundColor:'#55b2dd'}}>
           
              <p>Services</p>
              <p> <CleaningServicesIcon fontSize="large"/></p>
              <p>{products && products.length}</p>
           
            </div>
            
              <div className="admin-card" style={{backgroundColor:'#d73b3e'}}>
              <p>Booking</p>
              <p><AssignmentIcon fontSize="large"/></p>
              <p>{orders && orders.length}</p>
              </div>
         
       
              <div className="admin-card" style={{backgroundColor:'#eee600'}}>
              <p>Users</p>
              <p><GroupIcon fontSize="large"/></p>
              <p>{users && users.length}</p>
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
    </>
     :
    <>  
   <WorkerDashboard/>
    </>
     }
     </div>
  );
};

export default Dashboard;
