import React from 'react'
import {Link} from 'react-dom'

function Footer(){
     return(
          <>
               <div className="bottom">
                    <div className="container">
                         <div className="row">
                              <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                                   <p className="newsletter">GET OUR NEWSLETTER</p>
                                   <p className="hidden-xs follow">FOLLOW US</p>
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
                                        <li><input type="text" className="searcher" className="bottominput"/></li>
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
                                        <li><img className="pic1 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
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
                                        <li></li>
                                        <li>Categories</li>
                                        <li>About</li>
                                        <li>ACCESSORIES</li>
                                        <li>FAQS</li>
                                        <li>MARKETING</li>
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
                                        <li><img className="pic1 img-responsive" src="http://via.placeholder.com/300x200" alt=""/></li>
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

export default Footer;