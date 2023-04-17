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
    const location = useLocation();
var image =(location.state.image)
const [fullname, setFullname] = useState("");
const [disamount, setDisamount] = useState('');
const navigate = useNavigate();
const [code, setCode] = useState("");
const [rset, setRset] = useState("");
const [show, setShow] = useState(false);
const [dsh, setDsh] = useState("");

useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data)
   setFullname( data.data[0].fullname);
console.log(fullname)  
  }, []);

   
function Discount1(e) {
  setCode(e.target.value);
  console.log("helloiw", code);
}

  var price = location.state.price
var total = location.state.total


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

}else if(total > data3[0].minprice){

setShow(true)

var discon =data3[0].discount
var result = (Math.round((Number(total) / "100") * Number(discon) ))
console.log(result)
setDisamount(total - Number(result))
console.log(disamount)
setDsh(result)
Swal.fire({
  icon: 'success',
  // title: 'Password Changed',
  text: "coupn code apply succesfuly you are saving =" + result + "rs",
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



function Order(){
  if(disamount == 0){
    var  total = (location.state.total)
    console.log(total)
  }else{
   
      var  total = disamount
      var  total12 = (location.state.total)
   
      var disc = total12 - total
      console.log(disc)
  }


    console.log(fullname)
    var datkl = { "fullname": fullname,"image":image,"discount":disc,"name":location.state.name,"price":location.state.price,"total":total,"qty":location.state.qty }
    console.log(datkl)
   
    var nm = datkl.name.split(",")
    var im = datkl.image.split(",")
    var q = datkl.qty.split(",")
    var pc = datkl.price.split(",")

    var data = { "fullname": fullname,"image":im,"discount":disc,"name":nm,"price":pc,"total":total,"qty":q,"color":location.state.color}
    console.log(data)
    navigate("/Sipping",{state:data})
}





  return (
    <>
    <div>
<Headerlog></Headerlog>

<section>
<div class="ab1">
<div class="container-fluid">
<div class="row">
<div class="col-md-7">
<div class="ab56">You Saved {dsh}rs On This Order</div>
<div class="ab57">
<div class="container-fluid">
<div class="row">
<div class="col-md-5">
<img src={image} style={{height:"250px",width:"250px"}}/>
<div class="ab59">Enter PIN Code for Delivery Details</div>
<button type="button" class="btn btn-primary ab61">Move To Wishlist</button><br/>
<br></br>
<button type="button" class="btn btn-primary ab61">Move To Card</button>
</div>
<div class="col-md-7">
<div class="ab39 ab87" >{location.state.name}</div>
<div class="row">
<div class="col-md-6"><div class="input-group mb-3 ab88" >
  
{location.state.qty}
</div></div>
<div class="col-md-6"><div class="ab58">Only 2 left</div></div>
</div>
<div class="row">
<div class="col-md-7">
<div class="row">
<div class="col-md-7"><div class="ab41 ab87" >MRP</div></div>
<div class="col-md-5">
<div class="ab42 ab89" >{location.state.price}
</div></div>
</div>

<div class="ab43"></div>

<div class="row">
<div class="col-md-7"><div class="ab41 ab91" >ITEM PRICE</div></div>
<div class="col-md-5">
<div class="ab42 ab92" >{location.state.total}
</div></div>
</div>
<div class="ab43"></div>
<div class="row">
  { show &&
<div class="col-md-7"><div class="ab41 ab90" >Discount</div></div>
}
<div class="col-md-5">
<div class="ab42 ab89" >
{dsh}
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
<div class="ab48">GET EXTRA BENIFIT</div>
<div class="row">
<div class="col-md-6"><input name="Location" type="text" placeholder="Coupan Code" required class="ab49" onChange={Discount1}/></div>
<div class="col-md-6"><div class="ab50 ab98" onClick={Discount}>Apply</div></div>
</div>
<a href="#popup1"><button type="button" class="btn btn-primary ab62">Add New Address</button></a>

<div class="ab57 ab135" >
<div class="ab63">Cart Summary</div>
<div class="row">
<div class="col-md-10 ab93" >Items in Cart</div>
<div class="col-md-2">{location.state.qty}</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab93" >Cart Total Price</div>
<div class="col-md-2">{location.state.total}</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab94" >YOU PAY <span class="ab136">(Inclusive of all taxes)<hr></hr>
{
  show && 
 <h3>After Discount</h3>
}
</span></div>
<div class="col-md-2 ab94" >{location.state.total}
<hr></hr>
{
  show && 
 <h3> {disamount}</h3>
}
</div>
</div>
<button type="button" class="btn btn-primary ab53 ab95" onClick={Order} >SUBMIT</button>
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
