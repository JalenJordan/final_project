import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
     return(
          <>
               <div className="header">
                    <div className="container">
                         <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                   <ul className="topnav">
                                        <li className="span3 hidden-xs hidden-sm"><Link to="/">Social Media Sharing Links</Link></li>
                                        <li  className="span hidden-xs hidden-md hidden-lg"><Link to="/"> </Link></li>
                                        <li className="span2 hidden-xs hidden-md hidden-lg "><Link to="/"> </Link></li>
                                        <li className="loginregs2 hidden-xs hidden-sm"><Link to="/">Login | Register</Link></li>
                                        <li className="checkout hidden-xs hidden-sm"><Link to="/">0 items | Checkout</Link></li>
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">Franchises</Link></li>
                                        <li><Link to="/">Brands</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
               <br/>
               <div className="search">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                                   <input type="text" name="" className="searchbar"/><button type="submit" className="subbtn"><i className="fas fa-search"></i></button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="logo">
                    <div className="container">
                         <div className="row">
                              <div className="col-sm-12 hidden-xs hidden-md hidden-lg">
                                   <ul className="login">
                                        <li><Link to="/">Login |</Link></li>
                                        <li><Link to="/">Register</Link></li>
                                   </ul>
                              </div>
                              <div className="col-xs-9 col-sm-4 col-md-4 col-lg-6" >
                                   <img src="images/logo-crop.png" alt="" className="img-responsive"/>
                              </div>
                              <div className="col-xs-3 col-sm-2 hidden-md hidden-lg cart">
                                   <i className="fas fa-shopping-cart">        0</i>
                              </div>
                              <div className="col-sm-5 hidden-xs hidden-md hidden-lg">
                                   <input type="text" name="" className="searchbar"/><button className="subbtn" type="submit"><i className="fas fa-search"></i></button>
                              </div>
                              <div className="col-md-6 col-lg-6 hidden-sm hidden-xs">
                                   <ul className="navbars">
                                        <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li><Link to="/Products">Categories</Link></li>
                                        <li><Link to="bottom">About</Link></li>
                                        <li><Link to="/Products">ACCESSORIES</Link></li>
                                        <li><Link to="/about">FAQS</Link></li>
                                        <li><Link to="/">MARKETING</Link></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
               <br/>
               <div className="search">
                    <div className="container">
                         <div className="row">
                              <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                                   <input type="text" name="" className="searchbar"/><button className="subbtn" type="submit"><i className="fas fa-search"></i></button>
                              </div>
                              <div className="col-xs-12  hidden-sm hidden-md hidden-lg loginregs">
                                   <Link to="/">Login</Link> | <Link to="/">Register</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Header;