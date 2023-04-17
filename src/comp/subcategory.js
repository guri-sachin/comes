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

      <div class="ab1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <a href="#"><img src="images/logo.jpg" class="ab2" style={{ paddingTop: "10px" }} /></a>
            </div>
            <div class="col-md-7">
              <div class="wrap">


                <div class="search" >

                  <input type="text" class="searchTerm" placeholder="Your door to happiness opens with a search" />
                  <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-2" style={{ paddingTop: "30px" }} >
            <AiOutlineQuestionCircle   size={28}></AiOutlineQuestionCircle>
<AiOutlineHeart   size={28}></AiOutlineHeart>
<AiOutlineUser  size={28} ></AiOutlineUser>

<AiOutlineShoppingCart  size={28} ></AiOutlineShoppingCart>

            </div>
            <div class="col-md-1" style={{ paddingTop: "30px" }}>
            <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}

export default App;
