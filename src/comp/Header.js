import react from 'react';
import jquery from 'jquery';
import Swal from "sweetalert2";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState, useEffect,useRef } from 'react';
import { findAllByTestId } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card, Row, Col } from 'react-bootstrap';

function Header() {

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products1,setProducts1] =useState([]);
  const [categories, setCategories] = useState();
  const [subcategories, setSubcategories] = useState();
  const [products8,setProducts8] =useState([]);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);


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


    navigate('/Papper', { state: data1 })

    //  console.log(products1)

  }

  useEffect(() => {
    axios.get("http://localhost:4200/showcate").then(res => setProducts(res.data));


  }, []);

  function Show(){
  
    Swal.fire({
      icon: 'warning',
      // title: 'Password Changed',
      text: "You have to login first",
  })
  navigate("/Dyv")
  }
 
  useEffect(() => {

    getproduct();
  
  }, []);
  
  const getproduct = async() =>{
   
    let result = await fetch("http://localhost:4200/allproducts");
   result = await result.json()
   console.log(result)
    setProducts8(result)
    
  }
  
  const Searchn = async (e)=>{
    

   
    let key = e.target.value;
   
    if(key){
    let result = await fetch(`http://localhost:4200/searching/${key}`);
    result = await result.json()
    console.log(result)
    if(result){
      setProducts8(result)
     
    
    }
    }else{
      getproduct();
    
    }
    
    }
  
  function Shear(e){
    if(e.keyCode==13){
      navigate("/Papperall",{ state: products8 })
          }
  
  
  }
           
useEffect(()=>{
  axios.get("http://localhost:4200/allproducts").then(res=>setProducts8(res.data));
  
  
},[]);


  return (

<div>
<link href="css/style.css" type="text/css" rel="stylesheet"/>
 <link rel="stylesheet" href="css/style2.css"/>
 <link rel="stylesheet" href="css/style3.css"/>
 
<link href="css/1bootstrap.min.css" type="text/css" rel="stylesheet"/>

   
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
<link href="fonts/font.css" rel="stylesheet" type="text/css"/>
<link href="css/register.css" type="text/css" rel="stylesheet"/>
<link href="css/fontawesome-all.css" rel="stylesheet" type="text/css"></link>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery-3.5.1.js" type="text/javascript"></script>
<script src="js/jquery.min.js"></script>



      <section>
        <div class="ab1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
                <a href="/"><img src="mlogo1.png" class="ab2" style={{height:"75px",width:"75px"}}/></a>
              </div>
              <div class="col-md-7">
                <div class="wrap">


                  <div class="search" >

                    <input type="text" class="searchTerm" placeholder="Your door to happiness opens with a search" style={{height:"40px"}}  id="tedt" onChange={Searchn}
                 onKeyDown={Shear}
                />
                    <button type="submit" class="searchButton" style={{marginTop:"6px"}} id="btnSearch" onClick={Shear}>
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-3"><div class="ab4"><div class="row"><div class="col-md-2 ab79 m-3 p-2 "><a onClick={Show}><img src="images/help.jpg" onClick={Show} /></a>
              </div><div class="col-md-2 ab79" ><a href="#" class="" role="button" data-toggle="modal" data-target="#login-modal" ><img src="images/profile.jpg" onClick={Show}/></a>
                <div class="modal fade ab128" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                  
                </div></div><div class="col-md-2 ab79">
                  <a ><img src="images/wishlist.jpg" onClick={Show} /></a></div><div class="col-md-2 ab79"><a><img src="images/cart.jpg" onClick={Show}/></a></div>
              </div></div></div>
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

                            <a class="nav-link  dropdown-toggle active text-dark ab8" data-bs-toggle="dropdown" onMouseOver={() => handelDemo13(item)} value={item.categories}>  {item.categories}  </a>
                            <ul class="dropdown-menu">
                              {products2.map((item, index) => {
                                return (



                                  <div class="row" style={{ width: "500px" }} key={index}>
                                    <div class="col-md-3">
                                      <li><a class="dropdown-item" onClick={() => handelDemo12(item)}> {item.subcategories}</a></li>

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
