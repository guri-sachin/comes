import './App.css';
import Headerlog from './Headerlog';
import jquery from "jquery";
import Footer from './Footer';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function App() {



  return (
    <>
    <div>
<Headerlog></Headerlog>
<section>
<div class="ab1">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel"  >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/banner1.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/banner2.jpg" alt="Second slide"  />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/banner3.jpg" alt="Third slide"  />
    </div>
  </div>
 
</div>
</div>
</section>
<section>
<div class="ab1 ab121">
<a href="#"><img src="images/register.jpg" width="100%"/></a>
</div>
</section>
<section>
<div class="ab6">Shop By Room</div>
<div class="ab1">
<div class="container-fluid">
<div class="row">
<div class="col-md-3">
<img src="images/pic1.jpg" width="100%"/>
<div class="ab7"><a href="#">Shop Living Room <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
</div>
<div class="col-md-3"><img src="images/pic2.jpg" width="100%"/>
<div class="ab7"><a href="#">Shop Bedroom <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
</div>
<div class="col-md-3"><img src="images/pic3.jpg" width="100%"/>
<div class="ab7"><a href="#">Shop Dining Room <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
</div>
<div class="col-md-3"><img src="images/pic4.jpg" width="100%"/>
<div class="ab7"><a href="#">Shop Study Room <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
</div>
</div>
</div>
</div>
</section>
<section>
<div class="ab1">
<div class="ab8">What The Fry Deals</div>
<div class="container-fluid">
<div class="row">
<div class="col-md-3">
<img src="images/pic5.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#" >For ₹ 99 at 90% Off </a></div>
<div class="ab9">Antiskid Bath Mat</div>
</div>
<div class="col-md-3"><img src="images/pic6.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#">For ₹ 199 at 75% Off</a></div>
<div class="ab9">Wooden Wall Hanging</div>
</div>
<div class="col-md-3"><img src="images/pic7.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#">For ₹ 109 at 84% Off </a></div>
<div class="ab9">Multipurpose Glass Organiser </div>
</div>
<div class="col-md-3"><img src="images/pic8.jpg" width="100%"/>
<div class="ab7 ab82" ><a href="#">For ₹ 99 at 88% Off </a></div>
<div class="ab9">Jute Placement Set of 2</div>
</div>
</div>
</div>
</div>
</section>
<section>
<div class="ab1">
<div class="ab8">Trends In Furniture And Decor</div>
<div class="container-fluid">
<div class="row">
<div class="col-md-4">
<img src="images/pic9.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#" >Cozy Luxe Wing Chairs </a></div>
<div class="ab9">Explore Stating ₹13999 <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
</div>
<div class="col-md-4"><img src="images/pic10.jpg" width="100%"/>
<div class="ab7 ab82" ><a href="#">Tactile Material Lights</a></div>
<div class="ab9">Explore Stating ₹700 <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
</div>
<div class="col-md-4"><img src="images/pic11.jpg" width="100%"/>
<div class="ab7 ab82" ><a href="#">Eclectic Bar Furniture </a></div>
<div class="ab9">Explore Stating ₹3299 <i class="fa fa-arrow-right" aria-hidden="true"></i> </div>
</div>

</div>
</div>
</div>
</section>
<section>
<div class="ab1">
<div class="ab8">New Arrivals</div>
<div class="container-fluid">
<div class="row">
<div class="col-md-3">
<img src="images/pic12.jpg" width="100%"/>
<div class="ab7 ab82" ><a href="#" >The Avylis Collection </a></div>
<div class="ab9">25+ Options<br/>Stating ₹3499 </div>
</div>
<div class="col-md-3"><img src="images/pic13.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#">Vibrant Gift Sets</a></div>
<div class="ab9">120+ Options<br/>Stating ₹499</div>
</div>
<div class="col-md-3"><img src="images/pic14.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#">Wooden Wall Art </a></div>
<div class="ab9">500+ Options<br/>Stating ₹249 </div>
</div>
<div class="col-md-3"><img src="images/pic15.jpg" width="100%"/>
<div class="ab7 ab82"><a href="#">Spacious Storage Beds </a></div>
<div class="ab9">45+ Options<br/>Stating ₹15799</div>
</div>
</div>
</div>
</div>
</section>
<Footer></Footer>
</div>
    </>
  );
}

export default App;
