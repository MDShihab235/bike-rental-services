import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import { useState } from 'react';
import './NewBooking.css'
import { createAppoinment } from '../../../Actions/OrderAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";




const NewBooking = ({ history}) => {
const[bookingDate,setBookingDate] = useState(new Date().toLocaleDateString( ))
console.log(bookingDate)
const[name,setName] = useState("")


// console.log(date);
// const {  error, success } = useSelector((state) => state.newAppoinment);
// const dispatch = useDispatch();
// const alert = useAlert();

// useEffect(() => {
//   if (success) {
//     alert.success("product Created Successfully");
//   }
// }, [dispatch, alert, history, success]);

    // const handleDateChange = (date) => {  
    //   console.log(date.toLocaleDateString())    
    //     fetch('/api/v1/appoinment/new',{
    //       method : 'POST',
    //       headers : {'content-type' : 'application/json'},
    //       body : JSON.stringify(date)
    //       })   
    // }
 
 
    // let selectedDate = date
    // let selectedTime = time;
    
    // const data = {
    //     selectedDate,
    //     selectedTime
    // }
  
    // localStorage.setItem("bookingInfo", JSON.stringify(data));

    const handleClick = () => {
      history.push("/shipping")
    }
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data =>{
     console.log(data);
      // data.service = appoinmentOn;
      data.bookingDate = bookingDate.toLocaleDateString();
      // data.created = new Date()


      fetch('api/v1/appoinment/new',{
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
        console.log("s",success)
      if(success.success){
       history.push('/shipping')
      }
       else{
        alert(success.message) 
       }
          // alert('Appoinment Created Sucessfully!')
        
      })
      .catch(error => {
        console.log("e",error)
        if(error){
          alert(error.message)
        }
      })
      
}
 
    return (
      <div  className="text-center ">
      <h2 className=" text-success">Calendar</h2>
     <div className="calendar">
     <Calendar onChange={setBookingDate} />
     </div>
  <form onSubmit={handleSubmit(onSubmit)} >     
             
             {/* <div className="form-group mt-5 pt-3">
               <input
                 placeholder="Your Name"
                 className="form-control"
                 {...register("name", {
                   required: true,
                 })}
               /><br/>
               {errors?.name?.type === "required" && (
                 <p className="text-danger">This field is required</p>
               )}
             </div> */}
          
             <button type="submit" style={{backgroundColor:'#16D2C2' ,border:'none', marginTop: '10px'}}>Submit</button>
             {/* <Button onClick={closeModal} className=" mt-3" variant="danger">
               close
             </Button>  */}
           </form>
           
    </div>
    );
};

export default NewBooking;