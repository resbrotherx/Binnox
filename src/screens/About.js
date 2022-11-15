import React, { Fragment } from 'react';
import Footer from '../conpunents/footer';
import Header from '../conpunents/header';
function About(){
    return(
        <Fragment>
            <div className="container-fluid">
                <Header/>
                    
<div className="container-md contain">
    <center>
  <p className="abouttitle">About Us</p>
<div className="container-sm">
  <p className="aboutdetail1">Binnox is about <span>connecting</span>, connecting people to retail/department stores, restaurants, boutiques, pharmacies etc.
We are a <span>free location (GPS)</span> based shopping and Logistics app. We are not just a company, but an innovative move to ease the life and purchase experience of internet users globally.</p>


<br/>
  <p className="aboutdetail2">We will not just solve this problem facing us but will create jobs for different categories of people.
Our goal is to become the biggest shopping application to <span>revolutionize</span> the retail industry.
</p>
</div>
</center>
</div>
<div className="container-md">


  <div className="row ">
  <div className="col-md-4">
    <h3 className="vis">Our Vision</h3>
    <br/>
    <p className="visdetail">Create this lasting solution in the commerce industry for Africa, thereby creating more jobs.</p>
    
  </div>
  <div className="col-md-4 offset-md-4">
    <img className="visimg" src="assets/img/Rectangle 20.png"/>
  </div>
  </div>
<br/><br/><br/>
  <div className="row">
  <div className="col-md-4">
    <img className="misimg" src="assets/img/Rectangle 23.png"/>
    
  </div>
  <div className="col-md-6 offset-md-4" style={{marginTop: "-35%"}}>
    <h3 className="mis">Our Mission</h3>
    <br/>
    <p className="misdetail1">Give product-based physical businesses (Stores, Restaurants, Boutiques, Pharmacies etc)  an Internet outlet that will not just only increase their online sales but also help them properly manage their business.</p>
    
    <p className="misdetail2">Give internet buyers a more reliable commerce system that will not just give you exactly what you bought but give you access to real (not fake) product-based businesses and speedy delivery.</p>
     
    <p className="misdetail3">Create more Jobs in Africa through our delivery and managers Network.</p>
  </div>
</div>


<div className="container-md">
    <center>
  <p className="exptitle">Ready for your experience?</p>
<div className="container-sm">
  <p className="expdetail1">There's so much we have for you. Get the best experience with <span>Binnox</span>. Get started now.</p>

<div className="row justify-content-evenly" style={{marginBottom:"90px"}}>
  <div className="col-4">
    <button className="btnexp"><em className="btnexptit"> REGISTER YOUR BUSINESS </em></button>
  </div>
  <div className="col-4">
   <button className="btnexp"><em className="btnexptit"> BECOME OUR EARLY USER </em></button>
  </div>
</div>
</div>
</center>
</div>


<div className="container-md contain">
  <p className="abouttitle">Our Team</p>
<div className="container-sm">
    <center>
 <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 teamcard">
      <img src="assets/img/Rectangle13.png" className="card-img-top teamcardimg" alt="Hollywood Sign on The Hill"/>
      <div className="card-body">
        <h5 className="card-title teamcardtitle">Justus Nwosu</h5>
        <p className='titless'><span>Co-founder and C.E.O</span></p>
        <p className="card-text teamcardecription">
        Founded Hurricane Digital Agency, CMO at Today’s Leaders Foundation and CMO at Payscribe
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 teamcard">
      <img src="assets/img/Rectangle13.png" className="card-img-top teamcardimg" alt="Hollywood Sign on The Hill"/>
      <div className="card-body">
        <h5 className="card-title teamcardtitle">Justus Nwosu</h5>
        <p className='titless'><span>Co-founder and C.E.O</span></p>
        <p className="card-text teamcardecription">
        Founded Hurricane Digital Agency, CMO at Today’s Leaders Foundation and CMO at Payscribe
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 teamcard">
      <img src="assets/img/Rectangle13.png" className="card-img-top teamcardimg" alt="Hollywood Sign on The Hill"/>
      <div className="card-body">
        <h5 className="card-title teamcardtitle">Justus Nwosu</h5>
        <p className='titless'><span>Co-founder and C.E.O</span></p>
        <p className="card-text teamcardecription">
        Founded Hurricane Digital Agency, CMO at Today’s Leaders Foundation and CMO at Payscribe
        </p>
      </div>
    </div>
  </div>
</div>
</center>
</div>
</div>
</div>

                <Footer/>
                </div>

        </Fragment>
    )
}

export default About;