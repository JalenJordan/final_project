import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'


class Single extends Component{
     constructor(){
          super()
          this.state ={
               loading : true,
               product: {
                    id: ' ',
                    name: ' ',
                    img: ' ',
                    price: ' ',
                    brand: ' ',
                    category: ' ',
                    subcategory: ' ',
                    discription: ' ',
                    brand_name: ' ',
                    category_name: ' ',
               },
               product2: {
                    id: ' ',
                    name: ' ',
                    img: ' ',
                    price: ' ',
                    brand: ' ',
                    category: ' ',
                    subcategory: ' ',
                    discription: ' ',
                    brand_name: ' ',
                    category_name: ' ',
               },
               product3: {
                    id: ' ',
                    name: ' ',
                    img: ' ',
                    price: ' ',
                    brand: ' ',
                    category: ' ',
                    subcategory: ' ',
                    discription: ' ',
                    brand_name: ' ',
                    category_name: ' ',
               }

          }
     }

     componentDidMount(){
          fetch("http://localhost:8000/api/store/items")
          .then(response => response.json())
          .then(data =>{
               this.setState({
                    product: data[this.props.match.params.id - 1],
                    product2: data[this.props.match.params.id - 1]
                    // product3: data[this.props.match.params.id - 1]
               })
          })
          fetch("http://localhost:8000/api/store/sim")
          .then(response => response.json())
          .then(data =>{
               this.setState({
                    loading: false,
                    product3: data[this.props.match.params.id - 1]
               })
          })
     }

     render(){
          const singleslider={
               className: 'feature2',
               autoplay: true,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               slidesToScroll: 3,
               arrows: false
          }
          const product = this.state.product
          return(
               <>
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
                    <div className="productsingle">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                   </div>
                                   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <h1>{product.name}</h1>
                                        <p>{product.brand_name}</p>
                                        <hr/>
                                        <p>{product.category_name}</p>
                                        <p><strong>{product.price}</strong></p>
                                   </div>
                                   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <p>{product.discription}</p>
                                        <br/>
                                        <br/>
                                        <button>Add to Cart</button>
                                        <Link to="/Checkout"><button>Buy Now</button></Link>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="similar2">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <h1>Similar Products</h1>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="features2">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12">
                                        <Slider {...singleslider}>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <img className="img-responsive" src={`/images/${product.img}`} alt={product.name}/>
                                                       <p>{product.name}</p>
                                                       <label>{product.price}</label>
                                                  </div>
                                             </div>
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          )
     }
}

export default Single;