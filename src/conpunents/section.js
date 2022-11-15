import React, { Fragment } from 'react';
function Section(){
    return(
        <Fragment>
           
                  
               <div className="clearfix " style={{marginTop: "100px"}}>
                  <img src="assets/img/Rectangle5.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>
                  <p className="easyby">
                     Easy way to buy all you
                     want in <span style={{color:"#F46702"}}>10mins</span>
                  </p>
                  <p>
                    <ul className="listul">
                        <br/>
                        <li>See Stores/Restaurants/Pharmacies around you</li>
                        <br/>
                        <li>Connect to any store within 10-20km </li>
                        <br/>
                        <li>Buy with just a click </li>
                        <br/>
                        <li>Instant delivery </li>
                    </ul>
                  <br/>
                  <button className="jion">JOIN EARLY 
                    </button>
                </p>
                </div>
            
        </Fragment>
    )
}

export default Section;