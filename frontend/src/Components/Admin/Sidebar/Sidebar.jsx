import React from "react";
import "./Sidebar.css";
import logo from "../../../image/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  // if (user.role === "admin") {
  //   options.unshift({
  //     icon: <DashboardIcon />,
  //     name: "Dashboard",
  //     func: dashboard,
  //   });
  // }
  return (
    <div className="sidebar">
    {user.worker === "no" ?<><Link to="/">
      <div className="profile_div">
      <img
          src={user.avatar.url}
          alt="Waste Disposal"
        />
        <h6>{user.name}</h6>
      </div>
      </Link>
     
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Services">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Booking
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link> </>  :  <>
      <Link to="/">
      <div className="profile_div">
      <img
          src={user.avatar.url}
          alt="Waste Disposal"
        />
        <h6>{user.name}</h6>
      </div>
      </Link>
     
     
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Services">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Booking
        </p>
      </Link>
      
     
        </>  
      }
     
    </div>
  );
};

export default Sidebar;
