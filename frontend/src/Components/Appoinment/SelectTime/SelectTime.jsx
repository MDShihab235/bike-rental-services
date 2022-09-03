// import React from 'react';
// import { useState } from 'react';
// import Modal from "react-modal";
// import './SelectTime.css'
// import { Link } from 'react-router-dom';
// const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };
//   Modal.setAppElement("#root");


// const SelectTime = ({date,modalIsOpen,closeModal,history}) => {

//     const[time,setTime] = useState("")
//     console.log(time);
//     // moment.utc('2019-11-03T05:00:00.000Z').format('MM/DD/YYYY')
//     let selectedDate = date.toLocaleDateString()
//     let selectedTime = time;
    
//     const data = {
//         selectedDate,
//         selectedTime
//     }
  
//     localStorage.setItem("bookingInfo", JSON.stringify(data));

//     const shippingHandler = () => {
//         history.push("/login?redirect=shipping");
//       };
    

//     return (
//         <div>
//             <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
     
    
//         <p className="text-center text-secondary">ON {date.toLocaleDateString()}</p>
//         <div>
//       <input id="_1" type="checkbox"/> 
//      <label class="drop" for="_1">See More Times</label>
//      <div>
//      <button onClick={()=>setTime("10:00 AM")} className="productCard_btn">10:00</button>
//      {/* <button onClick={()=>setTime("")}>11:00</button>
//      <button onClick={()=>setTime("")}>12:00</button> <br/> */}
//      </div>
//         </div>
//        <button><Link to="/login?redirect=shipping">Continue Checkout</Link></button> 
//       </Modal>
//         </div>
//     );
// };

// export default SelectTime;     