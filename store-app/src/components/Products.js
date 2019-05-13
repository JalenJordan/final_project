import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import ProductTiles from './ProductTiles'
import ProductTiles2 from './ProductTiles2'
import ProductTiles4 from './ProductTiles4'
import Loading from './Loading'
import Slider from 'react-slick'
class Products extends Component{
     constructor(){
          super()
          this.state = {
               loading: true,
               products: [],
               products2: [],
               products4: []
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
          fetch("http://localhost:8000/api/store/CPU2")
          .then(response => response.json())
          .then(responseData =>{
               this.setState({
                    loading: false,
                    products2: responseData
               })
          })
          fetch("http://localhost:8000/api/store/CPU")
          .then(response => response.json())
          .then(responseData => {
               this.setState({
                    loading: false,
                    products4: responseData
               })
          })
     }
     
     render(){
          const  productslider={
               autoplay: true,
               autoplaySpeed: 2000,
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: false
          }

          const productTiles = this.state.loading ? <Loading /> : this.state.products.map((item, idx) => <ProductTiles key={idx} id={idx + 1} {...item}/>)
          const productTiles2 = this.state.loading ?<Loading /> : this.state.products2.map((item, idx) => <ProductTiles2 key={idx} id={idx + 1} {...item}/>)
          const productTiles4 = this.state.loading ? <Loading/> : this.state.products4.map((item, idx) => <ProductTiles4 key={idx} id={idx + 1}{...item}/>)
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
                                                  <Link to="/Products3">Accessories</Link>
                                                  <Link to="/">FAQS</Link>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-sm-12 hidden-xs hidden-md hidden-lg">
                                        <ul className="navbars2">
                                             <li><Link to="/">Home</Link></li>
                                             <li><Link to="/Products">Gallery</Link></li>
                                             <li><Link to="/">About</Link></li>
                                             <li><Link to="/Products3">Accessories</Link></li>
                                             <li><Link to="/">FAQS</Link></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="title">
                         <div className="container">
                                <div className="row">
                                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <h1 className="hidden-xs hidden-sm"> FEATURED PRODUCTS</h1>
                                        <h4 className="hidden-md hidden-lg">FEATURED PRODUCTS</h4>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="features3">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12">
                                        <Slider {...productslider}>
                                             <div>
                                                  <div className="slick-slide">
                                                       <Link to="/items/3/RYZEN%203%202200G">
                                                            <img className="img-responsive" src="images/product-img/Ryzen 3.png" alt=""/>
                                                            <p>Ryzen 3</p>
                                                            <label>$ 99.99</label>
                                                       </Link>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <Link to="/items/2/RYZEN%205%202600X"><img className="img-responsive" src="images/product-img/Ryzen 5.png" alt=""/>
                                                       <p>Ryzen 5</p>
                                                       <label>$ 149.00 </label>
                                                       </Link>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="slick-slide">
                                                       <Link to="/items/1/RYZEN%207%202700X"><img className="img-responsive" src="images/product-img/Ryzen 7.png" alt=""/>
                                                       <p>Ryzen 7</p>
                                                       <label>$ 279.00</label>
                                                       </Link>
                                                  </div>
                                             </div>
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                    </div>
               
               
                    <div className="productHeader hidden-xs">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-7 col-md-2 col-lg-2">
                                        <ul className="sorter hidden-sm">
                                             <li>
                                                  <Link to="/Products"><button>Processors</button></Link>
                                             </li>
                                             <hr/>
                                             <li>
                                                  <Link to="/Products2"><button>Motherboards</button></Link>
                                             </li>
                                             <hr/>
                                             <li>
                                                  <Link to="/Products3"><button>Cases</button></Link>
                                             </li>
                                             <hr/>
                                             <li>
                                                  <Link to="/Products4"><button>Graphic Cards</button></Link>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="col-sm-12 col-md-10 col-lg-10">
                                        <ul className="firstsection">{productTiles}</ul>
                                        <ul className="secondsection">{productTiles2}</ul>
                                        <ul className="thirdsection">{productTiles4}</ul>
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
                                                  <Link to="/items/3/RYZEN%203%202200G"><img className="img-responsive" src="images/cpu-icon.png" alt=""/></Link>
                                                  <label>CPU</label>
                                             </li>
                                             <li>
                                                  <Link to="/items/9/MSI%20Z270%20Gaming%20Plus"><img className="img-responsive" src="images/motherboard-icon.png" alt=""/></Link>
                                                  <label>MOBO</label>
                                             </li>
                                             <li>
                                                  <Link to="/items/18/MSI%20Gaming%20GTX%201070ti"><img className="img-responsive" src="images/graphic-card-icon.png" alt=""/></Link>
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
               </>
          )
     }
}

export default Products;