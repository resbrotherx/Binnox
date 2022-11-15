import React, { Fragment } from 'react';
import Carosel from '../conpunents/carosel';
import Store from '../conpunents/culoms';
import Footer from '../conpunents/footer';
import Header from '../conpunents/header';
import Slider from '../conpunents/slider';
import Image from '../conpunents/image';
import Section from '../conpunents/section';
function Index(){
    return(
        <Fragment>
            <div className="container-fluid">
            <Header/>
            <Slider/>
            <div className="container-sm" style={{marginTop:"60%"}}>
               <div>
                  <center>
                     <div className="row justify-content-evenly" style={{marginTop: "100px",marginBottom:"110px"}}>
                        <div className="col-4">
                           <div className="d-flex mb-3 card1">
                              <div className="p-2 coun1">13,456</div>
                              <div className="p-2 coun2">Total store waitlist
                                 members
                              </div>
                           </div>
                        </div>
                        <div className="col-4">
                           <div className="count3">One of two columns</div>
                        </div>
                     </div>
                    <Store/>
                    </center>
                    <br/>

                    <Section/>
                </div>
                </div>
            
            <Carosel/>
            <Image/>
           
                <Footer/>
                </div>

        </Fragment>
    )
}

export default Index;