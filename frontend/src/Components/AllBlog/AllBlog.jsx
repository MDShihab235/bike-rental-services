import React, { Fragment } from "react";
import "./AllBlog.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllBlogs,
} from "../../Actions/UserAction.js"
import { useAlert } from "react-alert";
import MetaData from "../MetaData/MetaData";
import { useEffect } from "react";
import Header from "../Header/Header";


const AllBlog = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error,blogs} = useSelector((state) => {
    // console.log(state);
    return state.allBlog;
    
  });


    // // products.map(pb => pb.filter(pb.user == user._id))
    // const map1 = products.map(pb=>pb.filter(pb.user === user._id ));
    // console.log(map1);
  
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log(user?.avatar?.url);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

   
    dispatch(getAllBlogs());
  }, [dispatch, alert, error, history]);

  return (
    <>

      <MetaData title={`ALL Blog - User`} />

      <h2 className="homeHeading">All Blog</h2>
   <div className="blog">
        
    {
      blogs && blogs?.map(blog => {
        return <div class="card">
      <div class="card-header">
        <img src={blog.images[0].url} alt="card__image" class="card__image" width="600"/>
      </div>
      <div class="card__body">
        <span class="tag tag-red">waste management</span>
        <h4>{blog.name}</h4>
        <p>{blog.description}</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src={user?.avatar?.url}alt="user__image" class="user__image"/>
          <div class="user__info">
            <h5>{user?.name}</h5>
            <small>2d ago</small>
          </div>
        </div>
      </div>
    </div>
      })
    }
  </div>

    </>
  );
};

export default AllBlog;
