import React from 'react';
import feature from '../../image/welcome-img-1.jpg';

const FeatureService = () => {
    return (
           <section className="feature-service pb-0 pb-md-5 " style={{marginTop:'100px'}}>
               <div className="container mb-5">
                   <div className="row mb-5">
                       <div className="col-md-6 col-sm-12 mb-4 m-mb-0">
                          <p>Our Company Introduction-</p>
                           <h1> Why you Should Choose Wostin for Waste</h1>
                           <p className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deserunt veritatis totam ipsum fuga porro enim quam possimus, fugit quo sunt quas error dolor explicabo atque modi beatae facere cum ab itaque. Quisquam mollitia aperiam inventore harum? Quam architecto vitae, ipsam, nesciunt repudiandae alias dignissimos harum laudantium nobis cupiditate eveniet voluptatum quaerat corporis, saepe at eligendi labore hic sit incidunt.</p>
                           <button>Learn More</button>
                          

                       </div>
                       <div className="col-md-6 col-sm-12  align-self-center">
                       <img className="img-fluid" src={feature} alt=""/>
                       </div>
                   </div>
               </div>
           </section> 
        
    );
};

export default FeatureService;