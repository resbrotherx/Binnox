import React, { Fragment } from 'react';

function Footer(){
    return(
        <Fragment>

                <footer style={{backgroundColor: "#101010"}} className="text-white text-center text-lg-start">
                
                <div className="container p-4">
                
                <div className="row">
                
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{marginTop: "-25px"}}>
                <img src="assets/img/logo.png"/>
                </h5>
                <p>
                <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>
                </section>
                </p>
                </div>
                
                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled mb-0">
                <li>
                <a href="#!" className="text-white">About</a>
                </li>
                <li>
                <a href="#!" className="text-white">Contact</a>
                </li>
                </ul>
                </div>
                
                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Coming Soon On</h5>
                <ul className="list-unstyled">
                <li>
                <a href="#!" className="text-white">Link 1</a>
                </li>
                <li>
                <a href="#!" className="text-white">Link 2</a>
                </li>
                </ul>
                </div>
                
                </div>
                
                </div>
                
                
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                All Rights Reserved .2022 
                <a className="text-white" href="https://mdbootstrap.com/">Binnox</a>
                </div>
                
                </footer>
        </Fragment>
    )
}

export default Footer;