


import Header from './Header';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, Card,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';


function App() {



  const [products,setProducts] =useState([]);
  const [products1,setProducts1] =useState([]);
  const [products8,setProducts8] =useState([]);
  const [products2,setProducts2] =useState([]);
  const [products3,setProducts3] =useState([]);
  const [products6,setProducts6] =useState([]);
  const [olpk,setOlpk] =useState([]);
  const [jklp,setJklp] =useState([]);
  const [show, setShow] = useState(false);
  const [shol, setShol] = useState(false);
  const [shop, setShop] = useState(false);
  const [shodd, setShodd] = useState(false);
  const [seller, setSeller] = useState(false);
  const [sowh, setSowh] = useState(true);
  const [ratings,setRatings] =useState([]);
  
  const[categories,setCategories]= useState();
  const[color,setColor]= useState();
  const[subcategories,setSubcategories]= useState();
  const [products5,setProducts5] =useState([]);
  const location = useLocation();
  const navigate = useNavigate();


console.log(location)

const [currentPage,setCurrentPage] = useState(1)
const recordsPerPage = 10;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

const records = products8.slice(firstIndex, lastIndex);
const npage = Math.ceil(products8.length / recordsPerPage)
const number = [...Array(npage + 1).keys()].slice(1)



  function handelDemo13(e){
    setCategories(e); 
    setSubcategories(e); 
  var data=  {"categories":e.categories}

   axios.post("http://localhost:4200/smcate",data).then(
         res=>  
          setProducts2(res.data)
          
       
     )   
   
      console.log(data)
  
        };

  
useEffect(()=>{
  axios.get("http://localhost:4200/showcate").then(res=>setProducts(res.data));
  
  
},[]);

useEffect(()=>{
  axios.get("http://localhost:4200/colores").then(res=>setProducts5(res.data));
  
  
},[]);

console.log(products5)



console.log(products3)

async function handelDemo(e){
  setSubcategories(e); 
  
var data=  {"id":e.id}
const config = {
  method :'POST',
  headers:{
  'Accept':'application/json',
  'Content-Type':'application/json',
},
  body: JSON.stringify(data)
}

const response = await fetch("http://localhost:4200/itopp",config);

const data1 = await response.json();

console.log(data1);
setProducts2(data1)


// const product =products1; 


navigate('/Pdes',{state:data1}) 
}




function Lowest(a,b){
  
  
          var profud = (products8.map((item,hanel)=>item))
          setProducts8(profud.sort((a, b) => a.price - b.price))
      console.log(olpk);
  
}

function Higest(){
  
  var profud = (products8.map((item,hanel)=>item))
  setProducts8(profud.sort((a, b) => b.price - a.price))

console.log(jklp);

}

function Seller(e){
  setShodd(false)
  setShow(false)
  setShol(false)
  setShop(false)
  setSeller(true)
 
  var data=  {"arriv":e.target.value}

  axios.post("http://localhost:4200/selld",data).then(
        res=>  
        setProducts8(res.data)
         
      
    )  
}


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
  setProducts8(data1)


  // const product =products1; 


 // navigate('/Papper', { state: data1 })

  //  console.log(products1)

}

useEffect(() => {
  axios.get("http://localhost:4200/showcate").then(res => setProducts(res.data));


}, []);


useEffect(() => {

  getproduct();

}, []);

const getproduct = async() =>{
  let proname = location.state[0].subcategories
  console.log(proname)
  let result = await fetch(`http://localhost:4200/Showproducts/${proname}`);
result = await result.json()
setProducts8(result)

}

function Show1(){

  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "You have to login first",
})
navigate("/Dyv")
}

const Searchn = async (e)=>{
  
let key = e.target.value;
if(key){
let result = await fetch(`http://localhost:4200/searching/${key}`);
result = await result.json()
if(result){
  setProducts8(result)
}
}else{
  getproduct();

}

}

function perPage(){
  if(currentPage !== 1){
    setCurrentPage(currentPage - 1)
  }
}


function changeCPage(id){

    setCurrentPage(id)
  
}


function nextPage(){
  
  if(currentPage !== npage){
    setCurrentPage(currentPage + 1)
  }
console.log(currentPage)
}



  
function Show(e){
  
  var data =  {"color":e.target.value}
  console.log(data)


  axios.post("http://localhost:4200/prcolor",data).then(
        res=>  
        setProducts8(res.data)
         
      
    )   


}

console.log(products8)

  return (
    <>
    <div>
    <link href="css/style.css" type="text/css" rel="stylesheet"/>
 <link rel="stylesheet" href="css/style2.css"/>
 <link rel="stylesheet" href="css/style3.css"/>
 
<link href="css/1bootstrap.min.css" type="text/css" rel="stylesheet"/>

   
<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
<link href="fonts/font.css" rel="stylesheet" type="text/css"/>
<link href="css/register.css" type="text/css" rel="stylesheet"/>
<link href="css/fontawesome-all.css" rel="stylesheet" type="text/css"></link>

<div>

<section>
  
  <div class="ab1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <a href="/"><img src="mlogo1.png" class="ab2" style={{height:"75px",width:"75px"}} /></a>
        </div>
        <div class="col-md-7">
          <div class="wrap">


            <div class="search" >

              <input type="text" class="searchTerm" placeholder="Your door to happiness opens with a search" style={{height:"40px"}} onChange={Searchn}/>
              <button type="submit" class="searchButton" style={{marginTop:"6px"}}>
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3"><div class="ab4"><div class="row"><div class="col-md-2 ab79 m-3 p-2"><a onClick={Show1}><img src="images/help.jpg" onClick={Show1} /></a>
        </div><div class="col-md-2 ab79" ><a href="#" class="" role="button" data-toggle="modal" data-target="#login-modal" ><img src="images/profile.jpg" onClick={Show1}/></a>
          <div class="modal fade ab128" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
        
          </div></div><div class="col-md-2 ab79">
            <a ><img src="images/wishlist.jpg" onClick={Show1} /></a></div><div class="col-md-2 ab79"><a><img src="images/cart.jpg" onClick={Show1}/></a></div>
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

                      <a class="nav-link  dropdown-toggle active text-dark"  data-bs-toggle="dropdown" onMouseOver={() => handelDemo13(item)} value={item.categories}>  {item.categories}  </a>
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






<section>
<div class="container-fluid">
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
<div class="ab17">Sofas</div>
<div class="row">
<div class="col-md-3">
<img src="images/320_3_Seater_Sofas.jpg"/>
<div class="ab18">3 Seater Sofas</div>
<div class="ab19">1171 options</div>
</div>
<div class="col-md-3">
<img src="images/1952_2_Seater_Sofas.jpg"/>
<div class="ab18">2 Seater Sofas</div>
<div class="ab19">1013 options</div>
</div>
<div class="col-md-3">
<img src="images/1951_1_Seater_Sofas.jpg"/>
<div class="ab18">1 Seater Sofas</div>
<div class="ab19">948 options</div>
</div>
<div class="col-md-3">
<img src="images/Fur_Sofa_Sets_27.jpg"/>
<div class="ab18">Sofa Sets</div>
<div class="ab19">876 options</div>
</div>
</div>
</div>
<div class="col-md-3"></div>
</div>
</div>
<div class="ab20"></div>
<div class="container-fluid">
<div class="row">
<div class="col-md-3 ab21">
<div class="ab22">Filter By</div>
<div class="ab23"></div>
<div class="ab24">Color Swatch</div>
{products5.map((item,index)=>{
           return(
               <tr key={index}>
                     <tr>
      

                                

                     <div class="row ab139">
<div class="col-md-9"><input name="one" type="radio" value={item.color} onClick={Show}/> <span class="ab25">{item.color}</span></div>

<div class="col-md-3"><span class="ab27"></span></div>
</div>


            
</tr>

</tr>
           );
       })}


<div class="ab23"></div>
<div class="ab24">Brand</div>
<div class="row ab139">
<div class="col-md-9"><input name="" type="checkbox" value="Best seller" onClick={Seller}/> <span class="ab25" onClick={Seller}>Best seller</span></div>

<div class="col-md-3"><span class="ab27">(717)</span></div>
</div>
<div class="row ab141" >
<div class="col-md-9"><input name="" type="checkbox" value="New Arrivals" onClick={Seller}/> <span class="ab25" onClick={Seller}>New Arrivals</span></div>

<div class="col-md-3"><span class="ab27">(524)</span></div>
</div>
<div class="row ab141" >
<div class="col-md-9"><input name="" type="checkbox" value="Discount" onClick={Seller}/> <span class="ab25" onClick={Seller}>Discount</span></div>

<div class="col-md-3"><span class="ab27">(310)</span></div>
</div>
<div class="row ab141" >
<div class="col-md-9"><input name="" type="checkbox" value=""/> <span class="ab25">Today's Offer</span></div>

<div class="col-md-3"><span class="ab27">(141)</span></div>
</div>

<div class="ab23"></div>
<div class="ab24 ab142" >Price</div>
<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <div id="slider-range"></div>
    </div>
  </div>
  <div class="row slider-labels ab143" >
    <div class="col-xs-6 caption">
      <strong>Min:</strong> <span id="slider-range-value1" class="ab116"></span>
    </div>
    <div class="col-xs-6 text-right caption">
      <strong>Max:</strong> <span id="slider-range-value2"></span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <form>
        <input type="hidden" name="min-value" value=""/>
        <input type="hidden" name="max-value" value=""/>
      </form>
    </div>
  </div>
</div>

<button type="button" class="btn btn-primary ab31">Apply</button>
</div>
<div class="col-md-9">
<div class="row">
<div class="col-md-9"></div>
<div class="col-md-3">
<div class="row">
<div class="col-md-4"><div class="ab101">Sort By</div></div>
<div class="col-md-8">

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle ab33" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Relevance
  </button>
  <ul class="dropdown-menu ab32">
    <li><a class="dropdown-item" onClick={Lowest}>Low to High</a></li>
    <li><a class="dropdown-item"  onClick={Higest}>High to Low</a></li>
    
 </ul>
</div>
</div>
</div>
</div>
</div>


<div class="row">
{shol &&
<div>
{location.state.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">

<div class="button"   value={item.price}>
  <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"/>
    <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"/>
    <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"/>
    <path class="heart-lines"d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"/>
    <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" />
    <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"/>
    <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"/>
    <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"/>
  </g>
</svg>
</div>
 
</div>


<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                ))}
                </div>
}

{sowh &&
<div>

{records.length> 0 ? records.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">

<div class="button"   value={item.price}>
  <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"/>
    <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"/>
    <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"/>
    <path class="heart-lines"d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"/>
    <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" />
    <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"/>
    <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"/>
    <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"/>
  </g>
</svg>
</div>
 
</div>


<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                )):<h1></h1>}
                </div>
}

{show &&
<div>
{olpk.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">


</div>



<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                ))}
                </div>
}

{shop &&
<div>
{jklp.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">


 
</div>



<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                ))}
                </div>
}

{shodd &&
<div>
{products3.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">


 
</div>



<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                ))}
                </div>
}

{seller &&
<div>
{products6.map((item, k) => (
    <Col key={k} xs={12} md={4} lg={3} >
<div class="col-md-5"  onClick={() => handelDemo(item)}>
<img src={item.image_name.split(",")[0]}   width="250" height="250"/>
<div class="ab34">


 
</div>



<div class="ab103"></div>
<div class="ab36">{item.name}</div>

<div class="ab37">{item.price}</div> 


</div>
</Col>
                ))}
                </div>
}

<nav aria-label="Page navigation example" class="ab144">
  <ul class="pagination">
    <li class="page-item ab38"><a class="page-link" onClick={perPage}>Previous</a></li>
    {number.map((n, i) =>(
    <li  className={`page-item ${currentPage === n ? 'active' :''}`} key={i}>
      <a onClick={()=> changeCPage(n)} className="page-link" href="#">
   {n}
 
  
    
    </a></li>    ))}

    <li class="page-item ab38"><a class="page-link"   onClick={nextPage}>Next</a></li>
  </ul>
</nav>
</div>
</div>
</div>
</div>
</section>



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
