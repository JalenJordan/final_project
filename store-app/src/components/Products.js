import React from 'react'
import {Link} from 'react-router-dom'

function Products(){
     return(
          <>
               <div className="xsheader hidden-sm hidden-md hidden-lg">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12">
                              <ul className="xscontacts">
                                   <li>
                                        <Link to="/">
                                             <i className="fas fa-search"></i>
                                             <p>Search</p>
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to='/'>
                                             <i className="fas fa-user"></i>
                                             <p>Sign In</p>
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/">
                                             <i className="fas fa-shopping-cart"></i>
                                             <p>Cart</p>
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/" className="menubtn">
                                             <i className="fas fa-bars"></i>
                                             <p>Menu</p>
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>


          
          <div className="header2 hidden-xs">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 col-md-7 col-lg-7">
                              <ul className='contacts'>
                                   <li><Link  to="tel:+1-800-1000">+1-800-1000</Link></li>
                                   <li><Link to="mailto:email@email.com">email@email.com</Link></li>
                                   <li><Link>Jackson MS</Link></li>
                              </ul>
                         </div>
                         <div className="col-sm-6 col-md-5 col-lg-5">
                                   <ul className='accounts'>
                                        <li><i className="fa fa-dollar-sign"></i>  USD</li>
                                        <li><i className="fa fa-user-alt"></i> Account</li>
                                        <li><i className="fa fa-heart"></i><Link to="/">  Wishlist</Link></li>
                                        <li><i className="fa fa-shopping-cart"></i><Link to="/"> Cart</Link> <label className="badge">  0</label></li>
                                   </ul>
                         </div>
                    </div>
               </div>
          </div>


          <div className="xsnavbar hidden-sm hidden-md hidden-lg">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12">
                              <img src="images/logo-crop.png" alt="" className="img-responsive"/>
                         </div>
                         <div className="col-xs-12">
                              <ul className="xsmenu">
                                   <li><Link to="/">Home</Link></li>
                                   <li><Link to="/Products">Products</Link></li>
                                   <li><Link to="/">About</Link></li>
                                   <li><Link to="/">FAQS</Link></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>

          <div className="navbar2 hidden-xs">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 col-md-6 col-lg-6">
                              <img className="img-responsive" src="images/logo-crop.png" alt=""/>
                         </div>
                         <div className="col-sm-6 col-md-6 col-lg-6">
                              <ul className="menu">
                                   <li><Link to="/">Home</Link></li>
                                   <li><Link to="/Products">Products</Link></li>
                                   <li><Link to="/">About</Link></li>
                                   <li><Link to="/">FAQS</Link></li>
                              </ul>
                              <input type="search" placeholder="Keywords, Models, Name or Type" name="" className="searchbar2"/><button className="searchbtn">SEARCH</button>
                         </div>
                    </div>
               </div>
          </div>

          <div className="xstitle">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 hidden-md hidden-lg">
                              <h4>FEATURED PRODUCTS</h4>
                         </div>
                    </div>
               </div>
          </div>


          <div className="title">
               <div className="container">
                    <div className="row">
                         <div className="hidden-xs hidden-sm col-md-12 col-lg-12">
                              <h1> FEATURED PRODUCTS</h1>
                         </div>
                    </div>
               </div>
          </div>



          
          <div className="features3">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12">
                              <div className="feature3 autoplay">
                                   <div className="slick-slide">
                                        <img className="img-responsive" src="images/Ryzen 3.png" alt=""/>
                                        <p>Ryzen 3</p>
                                        <label>$ 99.99</label>
                                   </div>
                                   <div className="slick-slide">
                                        <img className="img-responsive" src="images/Ryzen 5.png" alt=""/>
                                        <p>Ryzen 5</p>
                                        <label>$ 149.00 </label>
                                   </div>
                                   <div className="slick-slide">
                                        <img className="img-responsive" src="images/Ryzen 7.png" alt=""/>
                                        <p>Ryzen 7</p>
                                        <label>$ 279.00</label>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          
          
          <div className="productHeader hidden-xs">
               <div className="container">
                    <div className="row">
                         <div className="col-md-2 col-lg-2">
                              <ul className="sorter hidden-sm">
                                   <li>
                                        <form>
                                             
                                             <input type="checkbox" name="categories1"/>
                                             <label>MSI</label>
                                             <hr/>
                                             
                                             <input type="checkbox" name="categories1"/>
                                             <label>ZOTAC</label>
                                             <hr/>
                                             
                                             <input type="checkbox" name="categories1"/>
                                             <label>ASUS</label>
                                        </form>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-sm-5 col-md-10 col-lg-10">
                              <ul className="firstsection">
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/MSI-Gaming-Pro-Z370M.png" alt=""/></Link>
                                        <p>MSI Gaming Pro</p>
                                        <label>$ 280.99</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/MSI GeForce GTX 1080Ti.png" alt=""/></Link>
                                        <p>MSI GeForce GTX 1080ti</p>
                                        <label>$ 1,390.00</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/MSI GeForce RTX 2070.png" alt=""/></Link>
                                        <p>MSI GeForce RTX 2070</p>
                                        <label>$ 599.99</label>
                                   </li>
                              </ul>
                         </div>
                         <div className="row">
                              <div className="col-sm-2 col-md-2 col-lg-2">
                              </div>
                              <div className="col-sm-5 col-md-10 col-lg-10">
                                   <ul className="secondsection">
                                        <li>
                                             <Link to="/Products"><img className="img-responsive" src="images/MSI GeForce RTX 2080 Ventus.png" alt=""/></Link>
                                             <p>MSI RTX 2080 VENTUS 8G OC</p>
                                             <label>$ 699.99</label>
                                        </li>
                                        <li>
                                             <Link to="/Products"><img className="img-responsive" src="images/MSI X299 Gaming.png" alt=""/></Link>
                                             <p>MSI X299 Gaming M7 ACK</p>
                                             <label>$ 279.99</label>
                                        </li>
                                        <li>
                                             <Link to="/Products"><img className="img-responsive" src="images/Zotac-GeForce-GTX-1070.png" alt=""/></Link>
                                             <p>Zotac GeForce GTX 1070</p>
                                             <label>$ 581.99</label>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-2 col-lg-2"></div>
                              <div className="col-sm-5 col-md-10 col-lg-10">
                                   <ul className="thirdsection hidden-sm">
                                        <li>
                                             <Link to="/"><img className="img-responsive" src="images/MSI GTX 1070Ti.png" alt=""/></Link>
                                             <p>MSI GTX 1070Ti Gaming</p>
                                             <label>$ 620.00</label>
                                        </li>
                                        <li>
                                             <Link to="/"><img className="img-responsive" src="images/MSI GTX 1070Ti Armor.png" alt=""/></Link>
                                             <p> MSI GTX 1070ti</p>
                                             <label>$ 549.00</label>
                                        </li>
                                        <li>
                                             <Link to="/"><img className="img-responsive" src="images/Zotac-GeForce-RTX-2070.png" alt=""/></Link>
                                             <p>Zotac GeForce GTX 2070</p>
                                             <label>$ 716.99</label>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div className="sorter2">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
                              <h4>Categories</h4>
                              <ul className="icons">
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/cpu-icon.png" alt=""/></Link>
                                        <label>CPU</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/motherboard-icon.png" alt=""/></Link>
                                        <label>MOBO</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/graphic-card-icon.png" alt=""/></Link>
                                        <label>GRAPHIC</label>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
                              <ul className="icons">
                                   <li>
                                        <Link to="/"><img src="images/monitor-icon.png" alt="" className="img-responsive"/></Link>
                                        <label>MONITOR</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img src="images/keyboard-icon.png" alt="" className="img-responsive"/></Link>
                                        <label>INPUTS</label>
                                   </li>
                                   <li>
                                        <Link to="/"><img src="images/fan-icon.png" alt="" className="img-responsive"/></Link>
                                        <label>FANS</label>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
                              <ul className="icons">
                                   <li>
                                        <Link to="/"><img className="img-responsive" src="images/harddrive-icon.png" alt=""/></Link>
                                        <label>STORAGE</label>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>

          <div className="footer">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <ul className="nav-col first">
                                   <li className="footer-site-map-title">
                                        customer service
                                   </li>
                                   <li>
                                        <Link to="/">Help</Link>
                                   </li>
                                   <li>
                                        <Link to="/">Feedback</Link>
                                   </li>
                                   <li>
                                        <Link to="/">Privacy</Link>
                                   </li>
                              </ul>
                              <ul className="nav-col">
                                   <li className="footer-site-map-title">
                                        my Account
                                   </li>
                                   <li>
                                        <Link to="/">Login/Register</Link>
                                   </li>
                                   <li>
                                        <Link to="/">Wishlist</Link>
                                   </li>
                                   <li>
                                        <Link to="/">Cart</Link>
                                   </li>
                              </ul>
                              <ul className="nav-col">
                                   <li className="footer-site-map-title">
                                        About
                                   </li>
                                   <li>
                                        <Link to="/">Store Info</Link>
                                   </li>
                                   <li>
                                        <Link to="/">FAQS</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Products