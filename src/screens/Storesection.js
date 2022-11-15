import React, { Fragment } from 'react';
import Carosel from '../conpunents/carosel';
import Store from '../conpunents/culoms';
import Footer from '../conpunents/footer';
import Header from '../conpunents/header';
import Image from '../conpunents/image';
function Storesection(){
    return(
        <Fragment>
            <div className="container-fluid">
            <Header/>
            <div className="bg-image d-flex justify-content-center align-items-center banns" style={{  backgroundImage: `url('assets/img/Rectangle.png')`}}>
               <div className="col-md-6">
                  <h3 className="titles">Hello Business Owner!</h3>
                  <p className="discrips">It’s time your Retail/ Restaurant/ Product store <span style={{color:"#F46702"}}>stays one click</span> closer to its customers…
                     It’s time you reach more, sell more and deliver in 10mins-40mins…
                     It’s Time we all have the real shopping experience from our beds….
                  </p>
                  <br/>
                  <p className="discript">It’s time your Retail/ Restaurant/ Product store <span style={{color:"#F46702"}}>stays one click</span> closer to its customers…
                     It’s time you reach more, sell more and deliver in 10mins-40mins…
                     It’s Time we all have the real shopping experience from our beds….
                  </p>
                  <button type="button" className="regists" data-mdb-toggle="modal" data-mdb-target="#exampleModal">REGISTER YOUR BUSINESS <i className="fas fa-arrow-right"></i></button>
                 
               </div>
               <div className="col-md-4 ms-auto">
                  <img className="slide1" src="assets/img/slide1.jpeg"/>
               </div>
            </div>


            <div className="container-sm" style={{marginTop:"70%"}}>
            <center>
                <Store/>
            </center></div>
            <Carosel/>
            <Image/>
            <Footer/>
                </div>

        </Fragment>
    )
}

export default Storesection;