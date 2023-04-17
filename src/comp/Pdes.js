import './App.css';
import Header from './Header';

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
  const [disamount, setDisamount] = useState('');
  const location = useLocation();
  console.log(location.state[0].image_name.split(",")[0])
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  const [code, setCode] = useState("");
  function Show(){
  
    Swal.fire({
      icon: 'warning',
      // title: 'Password Changed',
      text: "You have to login first",
  })
  navigate("/Dyv")
  }
var price = location.state[0].price
  function Discount1(e) {
    setCode(e.target.value);
    console.log("helloiw", code);
  }

  async function Discount(e) {
  
    const data2 ={"code":code};
     
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
     console.log(data2);
const response = await fetch ('http://localhost:4200/disc',config)

const data3 = await response.json();

if(data3.length === 0){
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "wrong coupn code",
  })

}else if(price > data3[0].minprice){

  setShow(true)

var discon =data3[0].discount
  const result = Math.round((Number(price) / "100") * Number(discon) )
  console.log(result)
  setDisamount(Number(price) - Number(result))
  console.log(disamount)
  Swal.fire({
    icon: 'success',
    // title: 'Password Changed',
    text: "coupn code apply succesfuly",result,
  })


}else{
  var miniu =data3[0].minprice;
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "you have less amount need minimum",miniu,
  })
 
}

  console.log(data3);
  };
 
  function Shol(e){
    console.log(e.target.src)

  var imagesss =(e.target.src)
  console.log(imagesss)
    document.getElementById('myImage').src=imagesss
}
 
var colo = location.state[0].color.split(",")

var arrWithSpaces = colo.map( function(el){ 
  return el + " "; 
});
console.log(arrWithSpaces)

  return (
    <>
    <div>
<Header></Header>

<section>
<div class="container-fluid">
<div class="ab1">
<div class="row ab104" >
<div class="col-md-6">
{location.state.map((item,handel)=>{
                 return(
                    <tr key={handel}>
<div >

  <img src={item.image_name.split(",")[0]} border="0" class="col-md-12" id="myImage"/>
<div>

  {item.image_name.split(",").map((item,index)=>{
              return(
                  <td key={index}>

                 
                      <a onClick={Shol}> <img src={item}  width="100" height="100"  />
                    </a>
                  
       </td>
              );
          })}
</div>
  
  
  
  
  
  
</div>
<br></br>
                           </tr>
                     
                 );
             })}
</div>
<div class="col-md-6">
<div class="ab39">{location.state[0].name} </div>
<div class="ab40"></div>
<div class="star-rating">
  <input id="star-5" type="radio" name="rating" value="star-5"/>
  <label for="star-5" title="5 stars">
    <i class="active fa fa-star" aria-hidden="true"></i>
  </label>
  <input id="star-4" type="radio" name="rating" value="star-4"/>
  <label for="star-4" title="4 stars">
    <i class="active fa fa-star" aria-hidden="true"></i>
  </label>
  <input id="star-3" type="radio" name="rating" value="star-3"/>
  <label for="star-3" title="3 stars">
    <i class="active fa fa-star" aria-hidden="true"></i>
  </label>
  <input id="star-2" type="radio" name="rating" value="star-2"/>
  <label for="star-2" title="2 stars">
    <i class="active fa fa-star" aria-hidden="true"></i>
  </label>
  <input id="star-1" type="radio" name="rating" value="star-1"/>
  <label for="star-1" title="1 star">
    <i class="active fa fa-star" aria-hidden="true"></i>
  </label>
</div>
<div class="row">
<div class="col-md-3"><div class="ab41">Offer price</div></div>
<div class="col-md-9">
<div class="ab42">₹57,499
[Retail Discount ₹2,600]</div></div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-3"><div class="ab44">Today’s Deal</div></div>
<div class="col-md-9">
<div class="ab45">₹{location.state[0].price}  
<span  class="ab109">[Coupon Discount  ₹11,500]</span></div>
<div class="row"><div class="col-md-12"><div class="ab46">No Cost EMI from  
₹2,166/mo </div></div></div>
</div>

</div>

<div class="ab43"></div>
<div class="ab47">GET EXTRA BENIFIT</div>
<div class="ab48">Discount </div>
<div class="row">
<div class="col-md-6"><input name="Location" type="text" placeholder="Coupan Code" required class="ab49"  onChange={Discount1} /></div>
<div class="col-md-6"><div class="ab50 ab98" onClick={Discount}>Apply</div></div>
</div>

<div class="ab51">{arrWithSpaces.map((item, k) => (
                  <td key={k}  >
<a ><td><input name="one" type="radio"></input>{item}</td> </a>
                    </td>

))}

                 </div>
<div class="ab40"></div>
<div class="row">
<div class="col-md-4">
<div class="input-group mb-3 ab88">
  
   <select class="custom-select" id="inputGroupSelect01">
   <option selected="">Select Quantity </option>
    <option value="1">QTY 1</option>
    <option value="2">QTY 2</option>
    <option value="3">QTY 3</option>
    
  </select>
</div>

</div>
<div class="col-md-4"></div>
<div class="col-md-4">
<div class="ab45 ab88" ><span class="ab109">Total Price</span> ₹{location.state[0].price}
{
  show && 
<h3 class="float-center" > Payble : RS.{disamount} </h3>
}
</div>

</div>
</div>

<div class="row">
<div class="col-md-6"><button type="button" class="btn btn-primary ab52" onClick={Show}>ADD TO CART</button></div>
<div class="col-md-6"><button type="button" class="btn btn-primary ab53" onClick={Show}>BUY NOW</button></div>
</div>
</div>
<div class="col-md-12">
<div class="accordion ab137" id="accordionExample" >
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button ab110" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        <span class="ab111">Product Details</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <div class="row">
       <div class="col-md-12">
       <div class="ab54">
       </div>
{location.state[0].description}
       </div>
   
       </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed ab110" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  >
       <span class="ab111"> SKU</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>{location.state[0].sku}</strong>      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed ab110" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
       <span class="ab111">Brand & Collection Overview</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
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
