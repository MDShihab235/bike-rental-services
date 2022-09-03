import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Worker.css'
import {
    getAllUsers,
    clearErrors,
  } from "../../Actions/UserAction.js";
  import EmailIcon from '@mui/icons-material/Email';
const Worker = () => {
    const{users,error} = useSelector((state)=> state.allUsers)
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
   
        dispatch(getAllUsers());
      }, [dispatch, error]);
   const result = users.filter(user => user.role === 'admin');
   console.log(result);
    return (
        <>
        <h2 className="homeHeading">Our Worker</h2>
          
<div class="worker">
{
    result.map(user =>{
        return <div class="worker-card">
        <img src={user.avatar.url} alt={user.name} />
		<h3 class="worker-title">{user.name}</h3>
        <h3 class="worker-title2"><EmailIcon/> {user.email}</h3>
		<p class="worker-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		<button class="worker-btn">READ MORE</button>
	</div>
    })
}
	
</div>
        </>
      
    );
};

export default Worker;