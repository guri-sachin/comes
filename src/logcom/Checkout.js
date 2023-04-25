import './App.css';
import Headerlog from './Headerlog';

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
<div class="container-fluid">
<div class="row">
<div class="col-md-7">
<div class="ab56">You Saved ₹45,999 On This Order</div>
<div class="ab57">
<div class="container-fluid">
<div class="row">
<div class="col-md-5">
<img src="images/2.jpg"/>
<div class="ab59">Enter PIN Code for Delivery Details</div>
<button type="button" class="btn btn-primary ab60">Move To Wishlist</button><br/>
<button type="button" class="btn btn-primary ab61">Delete</button>
</div>
<div class="col-md-7">
<div class="ab39 ab87" >Salamanca Sheesham Wood 3 Seater Sofa In Green and Provincial Teak Finish, By Woodsworth from Pepperfry</div>
<div class="row">
<div class="col-md-6"><div class="input-group mb-3 ab88" >
  
   <select class="custom-select" id="inputGroupSelect01">
   <option selected="">Select Quantity </option>
    <option value="1">QTY 1</option>
    <option value="2">QTY 2</option>
    <option value="3">QTY 3</option>
    
  </select>
</div></div>
<div class="col-md-6"><div class="ab58">Only 2 left</div></div>
</div>
<div class="row">
<div class="col-md-7">
<div class="row">
<div class="col-md-7"><div class="ab41 ab87" >MRP</div></div>
<div class="col-md-5">
<div class="ab42 ab89" >₹87,799
</div></div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-7"><div class="ab41 ab90" >Retail Discount</div></div>
<div class="col-md-5">
<div class="ab42 ab89" >-₹5,925
</div></div>
</div>
<div class="ab43"></div>

<div class="row">
<div class="col-md-7"><div class="ab41 ab91" >ITEM PRICE</div></div>
<div class="col-md-5">
<div class="ab42 ab92" >₹81,874
</div></div>
</div>
<div class="ab43"></div>

</div>
<div class="col-md-5"></div>
</div>
<div class="ab64">
<div class="row">
<div class="col-md-2"><input name="" type="checkbox" value=""/></div>
<div class="col-md-10">One Year of Furniture Protection<br/> Only ₹10 per Day</div>
</div>
</div>
</div>
</div>


</div>
</div>
</div>
<div class="col-md-5">
<div class="ab48">Delivering to</div>
<div class="row">
<div class="col-md-6"><input name="Location" type="text" placeholder="Enter Pincode" required class="ab49"/></div>
<div class="col-md-6"><div class="ab50 ab98" >Locate</div></div>
</div>
<a href="#popup1"><button type="button" class="btn btn-primary ab62">Add New Address</button></a>

<div class="ab57 ab135" >
<div class="ab63">Cart Summary</div>
<div class="row">
<div class="col-md-10 ab93" >Items in Cart</div>
<div class="col-md-2">1</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab93" >Cart Total Price</div>
<div class="col-md-2">₹81,874</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab94" >YOU PAY <span class="ab136">(Inclusive of all taxes)</span></div>
<div class="col-md-2 ab94" >₹81,874</div>
</div>
<button type="button" class="btn btn-primary ab53 ab95" >SUBMIT</button>
</div>
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
