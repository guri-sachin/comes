
import './App.css';
import './Cards.css';
import Header from './Header';
import Foot from './Foot';
import {Form,Button,Navbar,nav,Container,Carousel,Table,card} from 'react-bootstrap';

import Slider from "react-slick";

import React, { useState,useEffect } from 'react';
import {BrowserRouter,Link,Routes,Route,MemoryRouter, NavLink} from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';

function App() {

  const [popup ,setPop] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [listItems, setListItems] = useState("");
  const handel=()=>{
    setTimeout(() => {
      setPop(!popup);
    },1000);
    
  }

  



    



  return (
    <div >
      <Header/>
      
     

<hr></hr>


    <div >  
    <div class="col-md-12">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="g1.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="g2.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="g4.jpg" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="g5.jpg" alt="Third slide"/>
    </div>
  </div>
  
</div>

</div>



 
   
  

<div>
<img src="bane.jpg" class="col-md-12 mt-4"></img>
</div>

<div class="col-md-12">
  <h1 class="col-md-12 mt-4">Shop By Room</h1>
  <div class="card-deck">
  <div class="card col-md-3" style={{width: "18rem;"}}>
  <img src="room.jpg" class="card-img-top" alt="..."/>
  <div class="card-body text-center card-img-overlay">

  </div>
  <a href="#" class="btn stretched-link">Shop living room</a>
</div>
<div class="card col-md-3" style={{width: "18rem;"}}>
  <img src="room1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body text-center card-img-overlay">
 
  </div>
  <a href="#" class="btn stretched-link">Shop Bedroom</a>
</div>
<div class="card col-md-3" style={{width: "18rem;"}}>
  <img src="room4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body text-center card-img-overlay">
 
  </div>
  <a href="#" class="btn stretched-link">Shop Dining room</a>
</div>
<div class="card col-md-3" style={{width: "18rem;"}}>
  <img src="room5.jpg" class="card-img-top" alt="..."/>
  <div class="card-body text-center card-img-overlay">
 
  </div>
  <a href="#" class="btn stretched-link">Shop Study room</a>
</div>
</div>
</div>


<div class="col-md-12">
<section class="pt-5 pb-5">
  <div class="container">
    <div class="row">
        <div class="col-6">
            <h3 class="mb-3">You’ll Want To Deal In These </h3>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
            </a>
            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
            </a>
        </div>
        <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big1.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big1.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big1.jpg"/>
                                    
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big2.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big3.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big4.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big5.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="big1.jpg"/>
                                    <div class="card-body text-center">
                                        <h4 class="card-title">Rest is for the wise</h4>
                                        <a href="#" class="btn btn-primary  ">Shop Study room</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</div>
</section>

</div>


<div class="container mt-2">

    <div class="row">
        <div class="col-6">
            <h2 class="mb-3">New Arrivals </h2>
        </div></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
  
    <img src="big.jpg" alt="Photo of sunset"/>
        <h5 class="item-card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
 
    <img src="big1.jpg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web .</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">

    <img src="big2.jpg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
  
    <img src="big3.jpg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>    
  </div>
  
</div>
<br></br>

<div  class="col-md-12">
<Foot></Foot>
</div>
</div>


    </div>
  );
}

export default App;
