import './App.css';



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

    <footer>
<div class="container-fluid ab10">
<div class="ab1">
<div class="row">
<div class="col-md-3">
<div class="ab11">Useful Links</div>
<div class="menu_inner">
    <ul>
    <li><a href="#">About Us</a> </li>
    <li><a href="#">Our Blog</a></li>
     <li><a href="#"> Careers</a></li>
    <li><a href="#">Corporate Governance</a></li>
     <li><a href="#">Pepperfry In the News</a></li>
     <li><a href="#">Find A Studio</a></li>
     <li><a href="#">Gift Cards</a></li>
     <li><a href="#">Brands</a></li>
     <li><a href="#">Customer Reviews</a></li>
   
    </ul>
    </div>
</div>
<div class="col-md-3">
<div class="ab11">Partners</div>
<div class="menu_inner">
    <ul>
    <li><a href="#">Sell With Us</a> </li>
    <li><a href="#">Become a Franchisee</a></li>
     <li><a href="#">Become a Pep Homie</a></li>
    <li><a href="#">Design For Us</a></li>
     <li><a href="#">Pepperfry Marketplace Policies</a></li>
     <li><a href="#">Login to Your Merchant Dashboard</a></li>
     <li><a href="#">Important : GST and You</a></li>
     <li><a href="#">Corporate Enquiries</a></li>
  
   
    </ul>
    </div>
</div>
<div class="col-md-3">
<div class="ab11">Need Help?</div>
<div class="menu_inner">
    <ul>
    <li><a href="#">Contact Us</a> </li>
    <li><a href="#">Returns & Refund</a></li>
     <li><a href="#"> Track Your Order</a></li>
    <li><a href="#">FAQs</a></li>
     <li><a href="#">Buy on Phone</a></li>
   
   
    </ul>
    </div>
</div>
<div class="col-md-3">
<div class="ab12">Download App</div>
<a href="#"><img src="images/app1.png" width="65%" class="ab83"/></a>
<a href="#"><img src="images/google.png"  width="65%" class="ab83"/></a>
</div>
</div>
<div class="ab13"></div>
<div class="container-fluid">
<div class="row">
<div class="col-md-6">
<div class="ab11 ab84">We accept</div>
<a href="#"><img src="images/p1.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p2.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p3.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p4.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p5.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p6.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/p7.jpg" class="ab122"/></a>
</div>
<div class="col-md-6" >
<div class="ab85"><div class="ab11 ab84" >Like what you see? You'll like us even more here</div></div>
<div class="ab85"><a href="#"><img src="images/s1.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/s2.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/s3.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/s4.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/s5.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="#"><img src="images/s6.jpg"/></a></div>
</div>
</div>
</div>
<div class="ab13"></div>
<div class="row ab14 ab86" >
<div class="col-md-3"><a href="#">Buy In Bulk</a> &nbsp; &nbsp; <a href="#">Write A Testimonial</a></div>
<div class="col-md-2"></div>
<div class="col-md-7"><a href="#">Whitehat</a> &nbsp;<a href="#">Site Map</a>&nbsp; <a href="#">Terms Of Use</a> &nbsp;<a href="#">Privacy Policy</a> &nbsp;<a href="#">Your Data & Security</a> &nbsp;<a href="#">Grievance Redressal</a>
</div>
</div>
</div>
</div>
</footer>


</div>
    </>
  );
}

export default App;
