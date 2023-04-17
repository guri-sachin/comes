

import './Cards.css';
import Header from './Header';

import {Form,Button,Navbar,nav,Container,Carousel,Table,card} from 'react-bootstrap';

import Slider from "react-slick";

import React, { useState,useEffect } from 'react';
import {BrowserRouter,Link,Routes,Route,MemoryRouter, NavLink} from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';

function App() {


function Show(e){
    
}
  

function Shol(e){
    
    document.getElementById('myImage').src='abs.jpg'
}
  


    



  return (
    <div >
 <h1>hellow</h1>
 <div >
  <img src="ap.jpg" id="myImage" ></img>
  </div>
  <div>
  <img src="abs.jpg"   onClick={Shol}></img>
  </div>

    </div>
  );
}

export default App;
