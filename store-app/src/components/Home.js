import React from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import Loading from './Loading'
// import ProductTiles2 from './ProductTiles2'


class Home extends React.Component{
     constructor(){
          super()
          this.state = {
               loading: true,
               products: [],
          }
     }

     componentDidMount(){
          fetch("http://localhost:8000/api/store/CPU")
          .then(response => response.json())
          .then(responseData => {
               this.setState({
                    loading: false,
                    products: responseData
               })
          })
     }

     render(){
          const homeslider={
               className: 'feature1',
               autoplay: true,
               autoplaySpeed: 2000,
               slidesToShow: 2,
               slidesToScroll: 2, 
               arrows: false
          }

          // const productTiles2 = this.state.loading ? <Loading /> : this.state.products.map((item, idx) => <ProductTiles2 key={idx} id={idx + 1} {...item}/>)
          return(
               <>
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
                                             <ul className="navbars2">
                                                  <li><Link to="/">Home</Link></li>
                                                  <li><Link to="/Products">Gallery</Link></li>
                                                  <li><Link to=".">About</Link></li>
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
                                   <Slider {...homeslider}>
                                        <div>
                                             <div className="slider-slide">
                                                  <Link to="/items/3/RYZEN%203%202200G"><img src="images/product-img/Ryzen 3.png" alt="" className="img-responsive"/></Link>
                                                  <p>Ryzen 3 1200</p>
                                                  <label>$99.99</label>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="slider-slide">
                                                  <Link to="/items/2/RYZEN%205%202600X"><img src="images/product-img/Ryzen 5.png" alt="" className="img-responsive"/></Link>
                                                  <p>Ryzen 5 1600</p>
                                                  <label>$149.00</label>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="slider-slide">
                                                  <Link to="/items/1/RYZEN%207%20700X"><img src="images/product-img/Ryzen 7.png" alt="" className="img-responsive"/></Link>
                                                  <p>Ryzen 7 1700</p>
                                                  <label>$249.00</label>
                                             </div>
                                        </div>
                                   </Slider>
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
                                   <Link to="/Products"><img src="images/product-img/MSI GTX 1070Ti Armor.png" alt="" className="img-responsive"/></Link>
                                   <p className="hidden-xs">MSI GTX 1070ti  $199.29</p>
                              </div>
                              <div className="item2 hidden-xs col-sm-6 hidden-md hidden-lg">
                                   <Link to="/Products"><img src="images/product-img/MSI GTX 1070Ti.png" alt="" className="img-responsive"/></Link>
                                   <p className="hidden-xs">MSI GTX 1070ti  $199.29</p>
                              </div>
                              <div className="item3 hidden-xs col-sm-6 hidden-md hidden-lg">
                                   <Link to="/Products"><img src="images/product-img/MSI GeForce GTX 1080Ti.png" alt="" className="img-responsive"/></Link>
                                   <p className="hidden-xs">MSI GeForce GTX 1080ti $199.29</p>
                              </div>
                              <div className="item4 hidden-xs col-sm-6 hidden-md hidden-lg">
                                   <Link to="/Products"><img src="images/product-img/MSI GeForce RTX 2070.png" alt="" className="img-responsive"/></Link>
                                   <p className="hidden-xs">MSI GeForce RTX 2070  $199.29</p>
                              </div>
                              <div className="item5 hidden-xs col-sm-6 hidden-md hidden-lg">
                                   <Link to="/Products"><img src="images/product-img/MSI GeForce RTX 2080 Ventus.png" alt="" className="img-responsive"/></Link>
                                   <p className="hidden-xs">MSI GeForce RTX 2080 Ventus $199.29</p>
                              </div>
                              <div className="item6 col-md-12 col-lg-12 hidden-xs hidden-sm">
                                   <ul className="featureitems">
                                        <li className="featuresecond">
                                             <Link to="/Products"><img src="images/product-img/MSI GTX 1070Ti.png" alt="" className="img-responsive"/></Link>
                                             <p>MSI GTX 1070ti    $199.29</p>
                                        </li>
                                        <li className="featurethird">
                                             <Link to="/Products"><img src="images/product-img/MSI GeForce GTX 1080Ti.png" alt="" className="img-responsive"/></Link>
                                             <p>MSI GeForce GTX 1080ti        $199.29</p>
                                        </li>
                                        <li className="featurefourth">
                                             <Link to="/Products"><img src="images/product-img/MSI GeForce RTX 2080 Ventus.png" alt="" className="img-responsive"/></Link>
                                             <p>MSI GeForce RTX 20180 Ventus    $199.29</p>
                                        </li>
                                   </ul>
                                   <h4 className="arrow1"><i className="fas fa-arrow-right"></i></h4>
                                   <h3 className="viewall"><Link to="/Products">View All</Link></h3>
                              </div>
                              <div className="col-xs-6 hidden-sm hidden-md hidden-lg">
                                   <p>Vestibulum tincidunt tellus Link metus hendrer</p>
                              </div>
                              <div className="col-xs-6 hidden-sm hidden-md hidden-lg">
                                   <p className="cost">$ 199.29</p>
                              </div>
                         </div>
                    </div>
               </div>
               <br/>
          </>
          )
     }
}

export default Home