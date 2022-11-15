import React, { Fragment } from 'react';
function Store(){
    return(
        <Fragment>
           
                     <h2 className="titlebus">Grow your <span style={{color: "#F46702"}}>Physical</span> Business</h2>
                     <div className="detail">
                        <p>Transiting a physical product base business to the internet can be hard.
                        It’s TIME to transit your physical product business (Restaurants, Retail, and Boutiques) for free!!! We also provide you with the following product features.
                        </p>
                     </div>
                     <div className="d-flex align-items-start mb-3" style={{height: "100px"}}>
                        <div className="col">
                           <img className="fos" src="assets/img/1.png"/>
                           <p className="store1">Free online store</p>
                           <p className="store2">Get a good storefront to manage your product inventory and also display your products online</p>
                        </div>
                        <div className="col">
                           <img className="profil" src="assets/img/Rectangle1.png"/>
                           <p className="paymenttitle">Secured Payment system</p>
                           <p className="paymentdescription">Your customers can make payments with a Debit/Credit card through our secured payment channel and this can always be withdrawn to your bank account instantly.</p>
                        </div>
                        <div className="col">
                           <img className="bv" src="assets/img/Rectangle2.png"/>
                           <p className="busv">Business Visibility</p>
                           <p className="detailbusv">Your business will be visible to anyone 1km-20km around you for an instant transaction</p>
                        </div>
                     </div>
                     <br/>
                     <br/>
                     <div style={{marginTop: "100px"}} className="row justify-content-evenly">
                        <div className="col-4">
                           <img className="rec1" src="assets/img/Rectangle3.png"/>
                           <p className="rec2">Business Analytic Tools</p>
                           <p className="analy">Your business account will have access to financial tools for proper bookkeeping</p>
                        </div>
                        <div className="col-4">
                           <img className="imglogic" src="assets/img/Delivery1.png"/>
                           <p className="logisticnetdetail">Logistic Network</p>
                           <p className="logisticnet">You don’t just own an online store for free, we also give your store access to our logistic network for automatic delivery</p>
                        </div>
                     </div>
                     <button className="regbus"><span className="btns">REGISTER YOUR BUSINESS</span></button>
               
            
        </Fragment>
    )
}

export default Store;