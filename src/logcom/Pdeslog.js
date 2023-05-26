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
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [disamount, setDisamount] = useState('');
  const location = useLocation();
  console.log(location.state[0].image_name.split(",")[0])
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [products3, setProducts3] = useState([]);
  const [code, setCode] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState('1');
  const [fullname, setFullname] = useState("");
  const [products5,setProducts5] =useState([]);
  const [ratings,setRatings] =useState([]);

  
 
  console.log(location)
  

  var totalprice = 0;
var id = 0;

  
  useEffect(() => {
      var data = JSON.parse(sessionStorage.getItem("data"));
  
     console.log(data)
     setFullname( data.data[0].fullname);
  console.log(fullname)
    
    }, []);



    var id =location.state[0].id
    var name =location.state[0].name
   
    useEffect(()=>{
 var data =  name

 axios.post(`http://localhost:4200/Rateon/${data}`).then(
res =>setRatings(res.data));
      
console.log(data)


    },[]);
 
  console.log(ratings)
  var starl =ratings.map((n) =>n.star);
  var satr = (starl.reduce((a, b) => Number(a) + Number(b), 0)/ratings.length)
  console.log(satr)

  function Show(){
  

  }
var price = location.state[0].price
  function Discount1(e) {
    setCode(e.target.value);
    console.log("helloiw", code);
  }




  
  async function handleClick1(e) {

    const id = e.target.id;
   
    // Counter state is incremented
    setQty(Number(qty) + 1)



    // const product =products1; 


    

  }



  
  async function handleClick2(e) {
    
    const Qtty = qty

    if (Qtty > 1) {
  

      setQty(Number(qty) - 1)
      // Counter state is decremented
    


    } else {
      Swal.fire({
        icon: 'warning',
        // title: 'Password Changed',
        text: "Qty can not be below then 1",
      })
    }


  };

  
function Sholdr(e) {

  setColor(e.target.value);

}

  function Buy(){
if(disamount == 0){
  var  total = qty * Number(location.state[0].price)
  console.log(total)
}else{
    var  total12 = qty * Number(location.state[0].price)
    var  total = qty * disamount
    var disc = total12 - total
    console.log(disc)
}
if(color.length == 0){
  Swal.fire({
    icon: 'warning',
    // title: 'Password Changed',
    text: "you have to select color first",
  })
}else {
  

var data ={"fullname":fullname,"name":location.state[0].name,"qty":qty,"price":location.state[0].price,"disamount":disamount,"total":total,"disc":disc,"image":location.state[0].image_name.split(",")[0],"color":color}

console.log(data)


   navigate("/Checkbuy",{ state: data })
  }
  }



  async function Show4(e)
  {
         
    console.log(id)
    var cardn =name;
    console.log(name)
         
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
         var story = data1.find((item) => {
          return item.name === cardn;
        });

        var colupk = data1.find((item) => {
          return item.color == color;
        });
        console.log(colupk)

        if(story === undefined || color.length !== 0 && colupk === undefined){
  
    var image = location.state[0].image_name.split(",")[0]
  
    console.log(image)
      const data = {"fullname":fullname,"name":location.state[0].name,"qty":qty,"price":location.state[0].price,"image":image,"color":color}
      
      const config = {
          method :'POST',
          headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
       },
          body: JSON.stringify(data)
       }
    
  const response = await fetch ('http://localhost:4200/addcard',config)
 
  const data2 = await response.json();
  console.log(e)
  Swal.fire({
    icon: 'success',
    // title: 'Password Changed',
    text:   "product added to card",
  })

  //sessionStorage.setItem("dage", JSON.stringify(5));
  //var existing = sessionStorage.getItem('dage');
  //existing = existing ? existing.split(',') : [];
  //existing.push(e);
  //sessionStorage.setItem('dage', existing.toString());
}else if(color.length == 0){
        
        
 



Swal.fire({
  icon: 'warning',
  // title: 'Password Changed',
  text:  "color not selected",
})
}else{
  var data = cardn
  console.log(data);


axios.get(`http://localhost:4200/upindate/${data}`).then(
res =>setProducts5(res.data));

Swal.fire({
  icon: 'warning',
  // title: 'Password Changed',
  text:  "product already in the card qty increase",
})
}
  
}

function Show(){
  alert("hellow")
}
  
 
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


var atta = location.state[0].attribut.split(",")

var arrwithattribut = atta.map( function(el){ 
  return el + " "; 
});
console.log(arrwithattribut)




console.log(color)
  return (
    <>
    <div>
<Headerlog></Headerlog>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />

   

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

                 
                      <a  onClick={Shol}> <img src={item}  width="100" height="100"/>
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
<h4>
<div class="staron"> {satr}  <div class="star-rating">


<input id="star-5" type="radio" name="rating" value="star-5"/>
<label for="star-5" title="5 stars">
  <i class="active fa fa-star" aria-hidden="true"></i>
</label>

</div>  </div>   {ratings.length}  Reviews  </h4>


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
<div class="ab48">{arrwithattribut.map((item, k) => (
                  <td key={k}  >
<a ><td>{item}</td> </a>
                    </td>

))} </div>



<div class="ab51">{arrWithSpaces.map((item, k) => (
                  <td key={k}  >
<a ><td><input name="one" type="radio" value={item} onChange={Sholdr} ></input>{item}</td> </a>
                    </td>

))}</div>
<div class="ab40"></div>
<div class="row">
<div class="col-md-4">
<div class="input-group mb-3 ab88">

<button type="button"  class="btn btn-login float-right me-2 gu12 gu13" id ={id} value={name} onClick={function (e) { handleClick1(e) }}>+</button>

<div className="me-2">QTY : {qty}</div>
                        <button type="button"  class="btn btn-login float-right gu12" id ={id} onClick={function (e) { handleClick2(e) }}>-</button>

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
<div class="col-md-6"><button type="button" class="btn btn-primary ab52" id ={id} value={name}  onClick={(e) => Show4()}>ADD TO CART</button></div>
<div class="col-md-6"><button type="button" class="btn btn-primary ab53" onClick={Buy} >BUY NOW</button></div>
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
        <strong>{location.state[0].sku}</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed ab110" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
       <span class="ab111">Reviews</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong> {ratings.map((item,handel)=>{
                 return( 
                  <tr>
                   
                    <div class="card" style={{width:"1300px"}}>
  <div class="card-header">
    <h4 class="staron">
  {item.star} <div class="star-rating">

<input id="star-5" type="radio" name="rating" value="star-5"/>
<label for="star-5" title="5 stars">
  <i class="active fa fa-star" aria-hidden="true"></i>
</label>

</div>
</h4>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{item.comment}.</p>
      <footer class="blockquote-footer">{item.usname}<cite title="Source Title"></cite></footer>
    </blockquote>
  </div>
</div>
<br></br>
                      
                
                  
                  </tr>
                  );
                })}
                
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
