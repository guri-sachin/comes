import react from 'react';

import Swal from "sweetalert2";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { findAllByTestId } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card, Row, Col } from 'react-bootstrap';

function Header() {

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3,setProducts3] =useState([]);
  const [products1,setProducts1] =useState([]);
  const [categories, setCategories] = useState();
  const [subcategories, setSubcategories] = useState();
  const [card,setCard] =useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();



  function handelDemo13(e) {
    setCategories(e);
    setSubcategories(e);
    var data = { "categories": e.categories }

    axios.post("http://localhost:4200/smcate", data).then(
      res =>
        setProducts2(res.data)


    )

    console.log(data)

  };

  async function handelDemo12(e) {
    setSubcategories(e);

    var data = { "subcategories": e.subcategories }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const response = await fetch("http://localhost:4200/flexc", config);

    const data1 = await response.json();

    console.log(data1);
    setProducts1(data1)


    // const product =products1; 


    navigate('/Papperlog', { state: data1 })

    //  console.log(products1)

  }


  async function account()
  {
   
      const data2 ={"fullname":name};
      
      const config = {
          method :'POST',
          headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
       },
          body: JSON.stringify(data2)
       }
       console.log(data2);
  const response = await fetch ('http://localhost:4200/myaccount',config)
 
  const data3 = await response.json();
 
    console.log(data3);
 
    navigate('/Profilelog',{state:data3}) 
      }
 
      async function Orders() {

        const data2 = { "fullname": name };
    
        const config = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data2)
        }
        console.log(data2);
        const response = await fetch('http://localhost:4200/showmycard', config)
    
        const data3 = await response.json();
    
        console.log(data3);
    
        navigate('/Orderlog', { state: data3 })
      }

  useEffect(() => {
    axios.get("http://localhost:4200/showcate").then(res => setProducts(res.data));


  }, []);

  
  useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data)
   setName( data.data[0].fullname);
console.log(name)

 


   
  }, []);



  useEffect(() => {
    var dage = JSON.parse(sessionStorage.getItem("dage"));

   console.log(dage)
   setCard(dage)
 }, [card]);

 async function handel1(e){
 

  var fullname =name;
  console.log(fullname)
  var data = {"fullname":fullname}
const config = {
  method :'POST',
  headers:{
  'Accept':'application/json',
  'Content-Type':'application/json',
},
  body: JSON.stringify(data)
}

const response = await fetch("http://localhost:4200/card",config);

const data1 = await response.json();

console.log(data1);
setProducts3(data1)


// const product =products1; 
navigate('/Checkcard',{state:data1}) 


}

async function Wish()
{
 
    const data2 ={"email":name};
    
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
     console.log(data2);
const response = await fetch ('http://localhost:4200/wishlist',config)

const data3 = await response.json();

  console.log(data3);


  navigate('/Wishlistlog',{state:data3}) 
    }

  return (

    <div>

      <section>
        <div class="ab1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
                <a href="/"><img src="images/logo.jpg" class="ab2" /></a>
              </div>
              <div class="col-md-7">
                <div class="wrap">


                  <div class="search" >

                    <input type="text" class="searchTerm" placeholder="Your door to happiness opens with a search" style={{height:"40px"}} />
                    <button type="submit" class="searchButton" style={{marginTop:"6px"}}>
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-3"><div class="ab4"><div class="row"><div class="col-md-2 ab79"><a href="/"><img src="images/help.jpg" /></a></div>
              <div class="col-md-2 ab79" ><a href="Checkcard" class="" role="button" data-toggle="modal" data-target="Checkcard" ><img src="images/profile.jpg" onClick={account} /></a>
                <div class="modal fade ab128" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                  <div class="modal-dialog ">
                    <div class="ab15">
                      <div class="container-fluid" >

                        <div class="row">
                          <div class="col-md-6 ab16 ab134" ><img src="images/news1.jpg" /></div>
                          <div class="col-md-6 ab134"><div class="modal-content">

                            <div class="modal-header" align="center">

                              <div class="close" data-dismiss="modal" aria-label="Close">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true" type="button">X</span>
                              </div>
                            </div>

                            <div id="div-forms">


                              <form id="login-form">
                                <div class="modal-body">

                                  <div id="div-login-msg">
                                    <div id="icon-login-msg" class="glyphicon glyphicon-chevron-right"></div>
                                    <span id="text-login-msg" class="ab133">Login to your account.</span>
                                  </div>
                                  <input id="login_username" class="form-control" type="text" placeholder="Email " required />
                                  <input id="login_password" class="form-control" type="password" placeholder="Password" required />
                                  <button id="login_lost_btn" type="button" class="btn btn-link ab132"  ><div class="ab131">Forgot your Password?</div></button>
                                </div>


                                <div class="modal-footer ab124" >

                                  <div>

                                    <button type="submit" class="btn btn-primary btn-lg btn-block ap">Login</button>
                                  </div>
                                  <div>

                                    <button id="login_register_btn" type="button" class="btn btn-link" >Sign Up</button>
                                  </div>
                                </div>
                              </form>

                              <form id="lost-form" class="ab128">
                                <div class="modal-body ab130">
                                  <div id="div-lost-msg">
                                    <div id="icon-lost-msg" class="glyphicon glyphicon-chevron-right"></div>
                                    <span id="text-lost-msg" >Type your e-mail.</span>
                                  </div>
                                  <input id="lost_email" class="form-control" type="text" placeholder="E-Mail " required />
                                </div>
                                <div class="modal-footer ab129" >
                                  <div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block ap" >Send</button>
                                  </div>
                                  <div>
                                    <button id="lost_login_btn" type="button" class="btn btn-link" >Log In</button>
                                    <button id="lost_register_btn" type="button" class="btn btn-link" >Sign Up</button>
                                  </div>
                                </div>
                              </form>

                              <form id="register-form" class="ab128">
                                <div class="modal-body ab127" >
                                  <div class="ab126"></div>
                                  <div id="div-register-msg">
                                    <div id="icon-register-msg" class="glyphicon glyphicon-chevron-right"></div>
                                    <span id="text-register-msg" class="ab125">Sign up to your account.</span>
                                  </div>
                                  <input id="register_username" class="form-control" type="text" placeholder="Full Name " required />
                                  <input id="register_email" class="form-control" type="text" placeholder="E-Mail" required />
                                  <input id="register_password" class="form-control" type="password" placeholder="Password" required />
                                </div>
                                <div class="modal-footer ab124" >
                                  <div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block ap" >Sign Up</button>
                                  </div>
                                  <div>
                                    <button id="register_login_btn" type="button" class="btn btn-link" >Log In</button>
                                    <button id="register_lost_btn" type="button" class="btn btn-link" >Lost Password?</button>
                                  </div>
                                </div>
                              </form>


                            </div>


                          </div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div><div class="col-md-2 ab79">
                  <a onClick={Wish} ><img src="images/wishlist.jpg" /></a>
                  </div><div class="col-md-2 ab79"><a  onClick={() => handel1()} ><img src="images/cart.jpg" /></a>
                  </div><div class="col-md-4"><div class="dropdown" style={{marginTop:"14px"}}>
                    <button class="btn btn-secondary dropdown-toggle ab123" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      Hi {name}
                    </button>
                    <ul class="dropdown-menu ab32">
                      <li><a class="dropdown-item"    onClick={account}>My Profile</a></li>
                      <li><a class="dropdown-item" onClick={Orders} >My Orders</a></li>
                      <li><a class="dropdown-item" href="Wallet">My Wallet</a></li>
                      <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </div></div></div></div></div>
            </div>
          </div>
        </div>

      </section>


      <section class="ab80">
        <div class="container-fluid">
          <div class="row">
            <nav class="navbar navbar-expand-lg navbar-dark ab5 ab81 " >
              <div class="ab3">
                <div class="container-fluid">
                  <div>


                  </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="main_nav" >
                    <ul class="navbar-nav">

                      {products.map((item, index) => {
                        return (
                          <li class="nav-item dropdown" id="kl" key={index} xs={6} md={2} lg={1}>

                            <a class="nav-link  dropdown-toggle active"  data-bs-toggle="dropdown" onMouseOver={() => handelDemo13(item)} value={item.categories}>  {item.categories}  </a>
                            <ul class="dropdown-menu">
                              {products2.map((item, index) => {
                                return (



                                  <div class="row" style={{ width: "500px" }} key={index}>
                                    <div class="col-md-3">
                                      <li><a class="dropdown-item"  onClick={() => handelDemo12(item)}> {item.subcategories}</a></li>

                                    </div>


                                  </div>
                                );
                              })}
                            </ul>
                          </li>
                        );

                      })}




                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>




  );
}

export default Header;
