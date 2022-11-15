import React, { Fragment } from 'react';
function Slider(){
    return(
        <Fragment>
            <div className="bg-image d-flex justify-content-center align-items-center bann" style={{  backgroundImage: `url('assets/img/Rectangle.png')`}}>
               <div className="col-md-6">
                  <h2 className="title">It’s Time!</h2>
                  <p className="discrip">It’s time your Retail/ Restaurant/ Product store <span style={{color:"#F46702"}}>stays one click</span> closer to its customers…
                     It’s time you reach more, sell more and deliver in 10mins-40mins…
                     It’s Time we all have the real shopping experience from our beds….
                  </p>
                  <button type="button" className="regist" data-mdb-toggle="modal" data-mdb-target="#exampleModal">REGISTER YOUR BUSINESS <i className="fas fa-arrow-right"></i></button>
                  <button className="regist2">REGISTER YOUR BUSINESS <i className="fas fa-arrow-right"></i></button>
               </div>
               <div className="col-md-4 ms-auto">
                  <img className="slide1" src="assets/img/slide1.jpeg"/>
               </div>
            </div>
        </Fragment>
    )
}

export default Slider;