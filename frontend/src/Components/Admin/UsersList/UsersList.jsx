import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../ProductList/ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../../MetaData/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  getAllUsers,
  clearErrors,
  deleteUser,
} from "../../../Actions/UserAction.js";
import { DELETE_USER_RESET } from "../../../Constants/UserConstants";
import Sidebar from "../Sidebar/Sidebar";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      alert.success(message);
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

  // const columns = [
  //   { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

  //   {
  //     field: "email",
  //     headerName: "Email",
  //     minWidth: 200,
  //     flex: 1,
  //   },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     minWidth: 150,
  //     flex: 0.5,
  //   },

  //   {
  //     field: "role",
  //     headerName: "Role",
  //     type: "number",
  //     minWidth: 150,
  //     flex: 0.3,
  //     cellClassName: (params) => {
  //       return params.getValue(params.id, "role") === "admin"
  //         ? "greenColor"
  //         : "redColor";
  //     },
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
  //           <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
  //             <EditIcon />
  //           </Link>

  //           <Button
  //             onClick={() =>
  //               deleteUserHandler(params.getValue(params.id, "id"))
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

  // users &&
  //   users.forEach((item) => {
  //     rows.push({
  //       id: item._id,
  //       role: item.role,
  //       email: item.email,
  //       name: item.name,
  //     });
  //   });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div>
             <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USER</h1>

         
          <div class="table">
        <div class="table_section">
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>User ID</th>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   

                {
                  users?.map((el, index) => <tr>
                      
                        <td>{index + 1}</td>
                        <td>{el._id} </td>
                        <td>{el.role} </td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td> 
                        <button> 
                        <Link to={`/admin/user/${el._id}`}>
                        <EditIcon style={{textDecoration: 'none',color: 'white'}}/>
                       </Link> 
                       </button>

                      <button   style={{textDecoration: 'none',color: 'white'}} onClick={() =>  deleteUserHandler(el._id)} >   
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
    </Fragment>
  );
};

export default UsersList;
