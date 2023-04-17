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
  const [products3, setProducts3] = useState([]);
  const [products, setProducts] = useState([]);
    const location = useLocation();
    const [disamount, setDisamount] = useState('');
    const [total, setTotal] = useState('');
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    console.log(location)
    var totalprice = 0;

    useEffect(() => {
      var data = JSON.parse(sessionStorage.getItem("data"));
  
     console.log(data)
     setName( data.data[0].fullname);
  console.log(name)
    }, [name]);
  

    useEffect(() => {
      var data = {"fullname":name}
      console.log(data)
      axios.post("http://localhost:4200/bfgjjc",data).then(
        res=>  setProducts(res.data))
     
    }, [products]);
    console.log(products)

    async function handleClick1(e) {

      const id = e.target.id;
      var data = { "id": id };
      console.log(data);
  
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
      console.log(data);
      const response = await fetch("http://localhost:4200/updatein", config)
  
      const products3 = await response.json();
  
      // Counter state is incremented
   
  
  
  
      var fullname = name;
      console.log(fullname)
      var data = { "fullname": fullname }
      const config1 = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
  
      const response1 = await fetch("http://localhost:4200/card", config1);
  
      const data1 = await response1.json();
  
      console.log(data1);
      setProducts3(data1)
  
  
      // const product =products1; 
  
  
      navigate('/Checkcard', { state: data1 })
  
    }



  async function handleClick2(e) {
    console.log(e.target.name)
    const Qtty = e.target.name

    if (Qtty > 1) {
      console.log(e.target.qty)



      const id = e.target.id;
      var data = { "id": id };
      console.log(data)

      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
      console.log(data);
      const response = await fetch("http://localhost:4200/updatede", config)

      const cards1 = await response.json();


      // Counter state is decremented
      console.log(cards1)

      var fullname = name;
      console.log(fullname)
      var data = { "fullname": fullname }
      const config1 = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }

      const response1 = await fetch("http://localhost:4200/card", config1);

      const data1 = await response1.json();

      console.log(data1);
      setProducts3(data1)


      // const product =products1; 


      navigate('/Checkcard', { state: data1 })
    } else {
      Swal.fire({
        icon: 'warning',
        // title: 'Password Changed',
        text: "Qty can not be below then 1",
      })
    }


  };


  
  {location.state.map((item, handel) => {
    totalprice += item.price * item.qty;
  
})}


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
  
  }else if(totalprice > data3[0].minprice){
  
  setShow(true)
  
  var discon =data3[0].discount
  var result = (Math.round((Number(totalprice) / "100") * Number(discon) ))
  console.log(result)
  setDisamount(totalprice - Number(result))
  console.log(disamount)
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


  function Order(e){
    if(disamount == 0){
      var  total = totalprice
      console.log(total)
    }else{
     
        var  total = disamount
        var  total12 = totalprice
     
        var disc = total12 - total
        console.log(disc)
    }
    console.log(e.target.value)
    console.log(location)
    var cname =location.state.map((n) =>n.name);
    var price =location.state.map((n) =>n.price);
    var qty =location.state.map((n) =>n.qty);
    var image_name =location.state.map((n) =>n.image_name);
    console.log(cname)
    Object.keys(price).forEach(price => {
      console.log(price, price[price]);

    })

    var fullname = name;
    console.log(fullname)
    var discount = disc;
    var total = total;
    console.log(total)
    var data = { "fullname": fullname, "total": total ,"discount": discount}
    console.log(data)

    axios.post("http://localhost:4200/tupdate", data).then(
      res => setProducts3(res.data)

    );
 

 var data1 = { "fullname": name, "total": total, "name": cname, "price": price, "qty": qty, "image": image_name, "discount":disc}
 navigate("/Sipping",{state:data1})
 console.log(data1)
  }
  

  
  async function Remove(e) {

    window.location.reload(false);
    toast("removing")

   
  
    const id = e.target.id;
    axios.get(`http://localhost:4200/productdelete/${id}`).then(
      res => setProducts(res.data)

    )
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

  async function bhbbhb(e){
    const image = (e.image_name)
    const price = e.price
    const pname = e.name
    
    var cardn =e.name;
    console.log(name)

    var data = {"email":name}
    const config = {
      method :'POST',
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
      body: JSON.stringify(data)
    }
    
    const response = await fetch("http://localhost:4200/wishlist",config);
    
    const data1 = await response.json();
    
   
      var story = data1.find((item) => {
        return item.name === cardn;
      });

      console.log(story)
      if(story === undefined){
    
        const data5 ={"email":name,"image":image,"price":price,"name":pname};
          
          const config = {
              method :'POST',
              headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
           },
              body: JSON.stringify(data5)
           }
           console.log(data5);
      const response = await fetch ('http://localhost:4200/wishc',config)
     
      const data3 = await response.json();
     
        console.log(data5);
     
        alert("Product added to wishlist  ")
          
        }else{
        
        
          alert("product already in Wishlist")
   
        
        }
      }
      
  return (
    <>
    <div>
<Headerlog></Headerlog>
<ToastContainer />
<section>
<div class="ab1">
<div class="container-fluid">
<div class="row">
<div class="ab56">You Saved ₹45,999 On This Order</div>


<div class="col-md-6">
{products.map((item, k) => (
                  <tr key={k} xs={12} md={4} lg={3} >
               

<div class="ab57">
<div class="container-fluid">
<div class="row">
<div class="col-md-5">
<img  src={item.image_name.split(",")[0]} width="150" height="150"/>
<div class="ab59">Enter PIN Code for Delivery Details</div>
<button type="button" class="btn btn-primary ab60" onClick={() => bhbbhb(item)} value={item.price}>Wishlist</button><br/>
<br></br>
<button type="button" class="btn btn-primary ab60" id={item.id} onClick={Remove}>Delete.</button>
</div>
<div class="col-md-7">
<div class="ab39 ab87" >{item.name}</div>
<div class="row">
<div class="col-md-12">
<button type="button"  class="btn btn-login col-md-4 "  id ={item.id} onClick={function (e) { handleClick1(e) }}>+</button>

<div className="col-md-4"> QTY :  {item.qty}</div>

                        <button type="button"  class="btn btn-login col-md-4" id ={item.id} name={item.qty} onClick={function (e) { handleClick2(e) }}>-</button></div>
                        
</div>
<div class="row">
<div class="col-md-7">
<div class="row">
<div class="col-md-7"><div class="ab41 ab87" >MRP</div></div>
<div class="col-md-5">
<div class="ab42 ab89" >{item.price}
</div></div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-7"><div class="ab41 ab90" >SUB TOTAL</div></div>
<div class="col-md-5">
<div class="ab42 ab89" >{item.qty*item.price}
</div></div>
</div>
<div class="ab43"></div>

<div class="row">
<div class="col-md-7"><div class="ab41 ab91" >ITEM PRICE</div></div>
<div class="col-md-5">
<div class="ab42 ab92" >
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

</tr>

                ))}
</div>


<div class="col-md-6" >
<div class="ab48">GET EXTRA BENIFIT</div>
<div class="row">
<div class="col-md-6"><input name="Location" type="text" placeholder="Coupan Code" required class="ab49" onChange={Discount1} /></div>
<div class="col-md-6"><div class="ab50 ab98" onClick={Discount}>Apply</div></div>
</div>


<div class="ab57 ab135" >
<div class="ab63">Cart Summary</div>
<div class="row">
<div class="col-md-10 ab93" >Items in Cart</div>
<div class="col-md-2">{location.state.length}</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab93" >Cart Total Price</div>
<div class="col-md-2">₹{totalprice}</div>
</div>
<div class="ab43"></div>
<div class="row">
<div class="col-md-10 ab94" >YOU PAY <span class="ab136">(Inclusive of all taxes)
<hr></hr>
{
  show && 
 <h3>After Discount</h3>
}</span></div>
<div class="col-md-2 ab94" >₹{totalprice}
<hr></hr>
{
  show && 
 <h3> {disamount}</h3>
}</div>

</div>
<button type="button" class="btn btn-primary ab53 ab95" onClick={Order}>SUBMIT</button>
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
