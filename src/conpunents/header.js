import React, { Fragment } from 'react';
function Header(){
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light nav">
               <div className="container">
                  <a className="navbar-brand me-2" href="">
                  <img className="navlogo" 
                     src="assets/img/logo.png"
                     loading="lazy"
                     />
                  </a>
                  <button
                    style={{color:"#fff"}}
                     className="navbar-toggler"
                     type="button"
                     data-mdb-toggle="collapse"
                     data-mdb-target="#navbarButtonsExample"
                     aria-controls="navbarButtonsExample"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                     >
                  <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarButtonsExample">
                  
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link" href="#">Dashboard</a>
                        </li>
                     </ul>
                     <div className="d-flex align-items-center">
                        <ul className="navbar-nav">
                           <li className="nav-item dropdown">
                              <a
                                 style={{color:"#fff",paddingRight: "50px"}}
                                 className="nav-link dropdown-toggle"
                                 href="#"
                                 id="navbarDropdownMenuLink"
                                 role="button"
                                 data-mdb-toggle="dropdown"
                                 aria-expanded="false"
                                 >
                              Company <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                 <li>
                                    <a className="dropdown-item" href="#">Action</a>
                                 </li>
                                 <li>
                                    <a className="dropdown-item" href="#">Another action</a>
                                 </li>
                                 <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                        <button type="button" className="btn btn-primary me-2 butt">
                        REGISTER YOUR BUSINESS 
                        </button>
                        <button type="button" className="btn btn-primary me-3 butt2">
                        BECOME OUR EARLY USER 
                        </button>
                        
                     </div>
                  </div>
               </div>
            </nav>
           

        </Fragment>
    )
}

export default Header;