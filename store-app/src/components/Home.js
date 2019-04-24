import React from 'react'
import {Link} from 'react-router-dom'


function Home(){
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
                                   <li><Link to="/">Payment Plan</Link></li>
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
                              <ul className="navbars2">
                                   <li><i className="fa fa-home"></i></li>
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
          <br/>
          <div className="navigation">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <div className="dropdown">
                                   <button className="navbtn"><i className="bars fas fa-bars"></i></button>
                                   <div className="dropdown-content">
                                        <Link to="/Products">Gallery</Link>
                                        <Link to="/">About</Link>
                                        <Link to="/Products">ACCESSORIES</Link>
                                        <Link to="/">FAQS</Link>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-12 hidden-xs hidden-md hidden-lg">
                              <ul className="navbars">
                                   <li><i className="fa fa-home"></i></li>
                                   <li><Link to="/Products">Gallery</Link></li>
                                   <li><Link to="/">About</Link></li>
                                   <li><Link to="/Products">ACCESSORIES</Link></li>
                                   <li><Link to="/">FAQS</Link></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
          <br/>
          <div className="features">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="feature1">
                                   <div className="slick-slide">
                                        <img src="images/Ryzen 3.png" alt="" className="img-responsive"/>
                                        <p>Ryzen 3 1200</p>
                                        <label>$99.99</label>
                                   </div>
                                   <div className="slick-slide">
                                        <img src="images/Ryzen 5.png" alt="" className="img-responsive"/>
                                        <p>Ryzen 5 1600</p>
                                        <label>$149.00</label>
                                   </div>
                                   <div className="slick-slide">
                                        <img src="images/Ryzen 7.png" alt="" className="img-responsive"/>
                                        <p>Ryzen 7 1700</p>
                                        <label>$249.00</label>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <br/>
          <div className="middlebar">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <h4 className="feature">Featured Products</h4>
                         </div>
                         <div className="item1 col-xs-12 hidden-sm hidden-md hidden-lg">
                              <img src="images/MSI GTX 1070Ti Armor.png" alt="" className="img-responsive"/>
                              <p className="hidden-xs">MSI GTX 1070ti  $199.29</p>
                              <button className="hidden-xs addbtn">Add To Cart</button>
                         </div>
                         <div className="item2 hidden-xs col-sm-6 hidden-md hidden-lg">
                              <img src="images/MSI GTX 1070Ti.png" alt="" className="img-responsive"/>
                              <p className="hidden-xs">MSI GTX 1070ti  $199.29</p>
                              <button className="hidden-xs addbtn">Add To Cart</button>
                         </div>
                         <div className="item3 hidden-xs col-sm-6 hidden-md hidden-lg">
                              <img src="images/MSI GeForce GTX 1080Ti.png" alt="" className="img-responsive"/>
                              <p className="hidden-xs">MSI GeForce GTX 1080ti $199.29</p>
                              <button className="hidden-xs addbtn">Add To Cart</button>
                         </div>
                         <div className="item4 hidden-xs col-sm-6 hidden-md hidden-lg">
                              <img src="images/MSI GeForce RTX 2070.png" alt="" className="img-responsive"/>
                              <p className="hidden-xs">MSI GeForce RTX 2070  $199.29</p>
                              <button className="hidden-xs addbtn">Add To Cart</button>
                         </div>
                         <div className="item5 hidden-xs col-sm-6 hidden-md hidden-lg">
                              <img src="images/MSI GeForce RTX 2080 Ventus.png" alt="" className="img-responsive"/>
                              <p className="hidden-xs">MSI GeForce RTX 2080 Ventus $199.29</p>
                              <button className="hidden-xs addbtn">Add To Cart</button>
                         </div>
                         <div className="item6 col-md-12 col-lg-12 hidden-xs hidden-sm">
                              <ul className="featureitems">
                                   <li className="featurefirst">
                                        <img src="images/MSI GTX 1070Ti Armor.png" alt="" className="img-responsive"/>
                                        <p>MSI GTX 1070ti    $199.29</p>
                                        <button className="addbtn">Add To Cart</button>
                                   </li>
                                   <li className="featuresecond">
                                        <img src="images/MSI GTX 1070Ti.png" alt="" className="img-responsive"/>
                                        <p>MSI GTX 1070ti    $199.29</p>
                                        <button className="addbtn">Add To Cart</button>
                                   </li>
                                   <li className="featurethird">
                                        <img src="images/MSI GeForce GTX 1080Ti.png" alt="" className="img-responsive"/>
                                        <p>MSI GeForce GTX 1080ti        $199.29</p>
                                        <button className="addbtn">Add To Cart</button>
                                   </li>
                                   <li className="featurefourth">
                                        <img src="images/MSI GeForce RTX 2080 Ventus.png" alt="" className="img-responsive"/>
                                        <p>MSI GeForce RTX 20180 Ventus    $199.29</p>
                                        <button className="addbtn">Add To Cart</button>
                                    </li>
                              </ul>
                              <h4 className="arrow1"><i className="fas fa-arrow-right"></i></h4>
                              <h3 className="viewall">View All</h3>
                         </div>
                         <div className="col-xs-6 hidden-sm hidden-md hidden-lg">
                              <p>Vestibulum tincidunt tellus Link metus hendrer</p>
                         </div>
                         <div className="col-xs-6 hidden-sm hidden-md hidden-lg">
                              <p className="cost">$ 199.29</p>
                         </div>
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <button className="addbtn" type="submit">Add to Cart</button>
                         </div>
                    </div>
               </div>
          </div>
          <br/>
          <div className="bottom">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                            <p className="newsletter">GET OUR NEWSLETTER</p>
                            <p className="hidden-xs" className="follow">FOLLOW US</p>
                         </div>
                         <div className="col-sm-12 hidden-xs hidden-md hidden-lg">
                              <ul className="bottomlist">
                                   <li className="newsletter2">GET OUR NEWSLETTER</li>
                                   <li className='follow2'>FOLLOW US</li>
                                   <li className="payment2">PAYMENT</li>
                              </ul>
                         </div>
                         <div className="col-sm-12 hidden-xs hidden-md hidden-lg">
                              <ul className="bottomlist2">
                                   <li><input type="text" className="searcher" className="bottominput"/>
                                   </li>
                                   <li>
                                        <ul className="linkicon2">
                                            <li><i className="facebook" className="fab fa-facebook-f"></i></li>
                                            <li><i className="tumblr" className="fab fa-tumblr"></i></li>
                                            <li><i className="linkedin" className="fab fa-linkedin-in"></i></li>
                                        </ul>
                                   </li>
                                   <br/>
                                   <li className="image"><img src="http://via.placeholder.com/150x80" className="hidden-xs img-responsive" alt=""/></li>
                                   <ul className="listpic">
                                        <li><img className="img-responsive pic1" src="http://via.placeholder.com/300x200" alt=""/></li>
                                        <li><img className="img-responsive pic2" src="http://via.placeholder.com/300x200" alt=""/></li>
                                        <li><img className="img-responsive pic3" src="http://via.placeholder.com/300x200" alt=""/></li>
                                        <li><img className="img-responsive pic4" src="http://via.placeholder.com/300x200" alt=""/></li>
                                        <li><img className="img-responsive pic5" src="http://via.placeholder.com/300x200" alt=""/></li>
                                    </ul>
                              </ul>
                         </div>
                        <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                            <input className="bottominput" type="text"/>
                        </div>
                        <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                            <button className= "subbtn2" type="submit">SIGN UP</button>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <p className="follow">FOLLOW US</p>
                         </div>
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <ul className="link-icon">
                                   <li><i className="facebook"className="fab fa-facebook-f"></i></li>
                                   <li><i  className="tumblr" className="fab fa-tumblr"></i></li>
                                   <li><i  className="linkedin"className="fab fa-linkedin-in"></i></li>
                              </ul>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <p className="payment">PAYMENT</p>
                         </div>
                         <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                              <img src="http://via.placeholder.com/250x50" alt="" className="label1 hidden-sm img-responsive"/>
                              <img src="http://via.placeholder.com/200x80"  className=" hidden-xs img-responsive" alt=""/>
                              <ul className="listpic">
                                   <li><img className="pic1 img-responsive" src="http://via.placeholder.com/300x200" alt=""/>
                                   </li>
                                   <li><img className="pic2 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic3 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic4 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic5 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                              </ul>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-md-1 col-lg-1 hidden-xs hidden-sm">
                              <h5>Jordan's Hardware</h5>
                         </div>
                         <div className="col-md-2 col-lg-2 hidden-xs hidden-sm">
                              <h5 className="shop">SHOP</h5>
                              <ul className="footerlist">
                                   <li><Link to="/Products">Categories</Link></li>
                                   <li><Link to="/">About</Link></li>
                                   <li><Link to="/Products">ACCESSORIES</Link></li>
                                   <li><Link to="/">FAQS</Link></li>
                                   <li><Link to="/">MARKETING</Link></li>
                              </ul>
                         </div>
                         <div className="col-md-2 col-lg-2 hidden-xs hidden-sm">
                              <h5 className="info">INFO</h5>
                              <ul className="footerlist2">
                                   <li>Categories</li>
                                   <li>About</li>
                                   <li>ACCESSORIES</li>
                                   <li>FAQS</li>
                                   <li>MARKETING</li>
                              </ul>
                         </div>
                         <div className="col-md-3 col-lg-3 hidden-xs hidden-sm">
                              <h5 className="follow3">FOLLOW US</h5>
                              <p>GET OUR NEWSLETTER</p>
                              <input type="text"  className="inputbar"/>
                              <button>SIGN UP</button>
                              <ul className="footerlist3">
                                   <li><i className="fab fa-facebook-f"></i></li>
                                   <li><i className="fab fa-tumblr"></i></li>
                                   <li><i className="fab fa-linkedin-in"></i></li>
                              </ul>
                         </div>
                         <div className="col-md-4 col-lg-4 hidden-xs hidden-sm">
                              <h5>PAYMENT</h5>
                              <img src="http://via.placeholder.com/200x80"  className=" hidden-xs img-responsive" alt=""/>
                              <ul className="footerlist4">
                                   <li><img className="pic1 img-responsive" src="http://via.placeholder.com/300x200" alt=""/>
                                   </li>
                                   <li><img className="pic2 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic3 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic4 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                                   <li><img className="pic5 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>  
        </>
    )
}

export default Home