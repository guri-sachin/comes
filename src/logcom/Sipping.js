import './App.css';
import Headerlog from './Headerlog';
import jquery from "jquery";
import './Billing.css';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { InvoiceNumber } from 'invoice-number'


function App() {
  const location = useLocation();
  const [fullname, setFullname] = useState("");
  console.log(location)
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [staddress, setStaddress] = useState('');
  const [line, setLine] = useState('');
  const [email, setEmail] = useState('');
  const [products3,setProducts3] =useState([]);
  const [show, setShow] = useState(true);
  const ref = useRef(false);
  const [namet, setNameT] = useState(''); 
  const [lintt, setLineT] = useState('');
  const [cityt, setCityT] = useState('');
  const [staddresst, setStaddressT] = useState('');
  const [zipt, setZipT] = useState('');
  const [countryt, setCountryT] = useState('');
  const [phonet, setPhoneT] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [num, setNum] = useState(0);
  var today = new Date(),
    date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(date)
  useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));


    setFullname(data.data[0].fullname);
    setEmail(data.data[0].email);
    console.log(email)

  }, []);

  function randomNumberInRange(min, max) {
    
    // 👇️ get number between min (inclusive) and max (inclusive)
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  const haaddd = () => {
    setNum(randomNumberInRange(1, 1000000000));
  };

  


  function handelDemo26(e) {
    setZip(e.target.value);
    console.log(zip)
  }
  function handelDemo22(e) {
    setPhone(e.target.value);

  }
  function handelDemo25(e) {
    setCountry(e.target.value);
    console.log(country)
  }
  function handelDemo28(e) {
    setCity(e.target.value);

  }
  function handelDemo23(e) {
    setLine(e.target.value);

  }
  function handelDemo24(e) {
    setStaddress(e.target.value);

  }

  function handelDemo36(e) {
    setNameT(e.target.value);

  }
  function handelDemo35(e) {
    setLineT(e.target.value);

  }
  function handelDemo34(e) {
    setCityT(e.target.value);

  }
  function handelDemo33(e) {
    setStaddressT(e.target.value);

  }

  function handelDemo32(e) {
    setZipT(e.target.value);

  }
  function handelDemo31(e) {
    setCountryT(e.target.value);

  }
  function handelDemo30(e) {
    setPhoneT(e.target.value);

  }

  async function Order() {
    if (agreement == true) {
  var total = location.state.total
      console.log(location.state.total)
      console.log(location.state.total)
      var cname =location.state.name;
    

      console.log(cname)
      var price =location.state.price;
     var qty =location.state.qty;

    console.log(data)
var discount = location.state.discount;
  var image_name =location.state.image;
   //  console.log(image_name)

 //const jsonStrings = cname.map(item => JSON.stringify(item))
 const jsonString = JSON.stringify( cname)
 const jsonString1 = JSON.stringify(({}, price))
 const jsonString2 = JSON.stringify(({}, qty))
 const jsonString3 = JSON.stringify(({}, image_name))

//console.log(jsonString);
console.log(jsonString1);
console.log(jsonString2);
//var data ={"name":cname,"price":price,"qty":qty}

     const datap = {"name":jsonString,"price":jsonString1,"qty":jsonString2,"fullname":fullname,"image":jsonString3,"total":total,"discount":discount,"orderno": date,"color":location.state.color}
     
console.log(datap)

    const config1 = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datap)
    }

    const response = fetch("http://localhost:4200/buyorder", config1);

    const data1 = response

    console.log(data1);
    Swal.fire({
      icon: 'success',
      // title: 'Password Changed',
      text: "Your Order Placed successfuly"
    })


    console.log(fullname)
    var data = { "fullname": fullname, "lname": staddress, "email": email, "phone": phone, "line": line, "country": country, "zip": zip, "city": city, "orderno": date }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const response1 = await fetch("http://localhost:4200/address", config);

    const data2 = await response1.json();

    console.log(data2);
  } else {
 
    

    console.log(fullname)
    var data = { "fullname": fullname, "lname": staddress, "email": email, "phone": phone, "line": line, "country": country, "zip": zip, "city": city, "orderno": date }
  const config = {
    method :'POST',
    headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  },
    body: JSON.stringify(data)
  }
  
  const response = await fetch("http://localhost:4200/address",config);

  const data1 = await response.json();
  
  console.log(data1);
  setProducts3(data1)
  


    
    alert("⛔️ Checkbox is NOT checked you have to fill these detail again for your bill")
    console.log('⛔️ Checkbox is NOT checked');
  }
}
  

  console.log(location)





  async function Address(e) {
    setShow(false)
    console.log(fullname)
    
    var data = { "fullname": fullname, "lname": staddress, "email": email, "phone": phone, "line": line, "country": country, "zip": zip, "city": city, "orderno": date }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const response = await fetch("http://localhost:4200/bill", config);

    const data1 = await response.json();

    console.log(data1);
    Swal.fire({
      icon: 'success',
      // title: 'Password Changed',
      text: "BILLING ADDRESS SAVE SAME AS SHIPPING ADDRESS"
    })
  }

  async function Billing(event) {
    setShow(false)
    setAgreement(true);
    console.log(fullname)
    var data = { "fullname": namet, "lname": staddresst, "email": email, "phone": countryt, "line": lintt, "country": countryt, "zip": zip, "city": cityt, "orderno": date }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const response = await fetch("http://localhost:4200/bill", config);

    const data1 = await response.json();

    console.log(data1);
    Swal.fire({
      icon: 'success',
      // title: 'Password Changed',
      text: "BILLING ADDRESS ADD successfuly"
    })
  }

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  }

  return (
    <>
      <div>
        <Headerlog></Headerlog>
       
        <section>
          <div class="ab1">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8">

                  <div class="ab150">1. SHIPPING ADDRESS</div>
                  <form>
                    Name*
                    <input type="" class="form-control ab151" name="name" required="" value={location.state.fullname} />
                    Street*
                    <input type="" class="form-control ab151" name="street" required="" onChange={handelDemo23} />
                    City*
                    <input type="" class="form-control ab151" name="city" required="" onChange={handelDemo28} />
                    State*
                    <div class="input-group mb-3 ab151">

                      <select class="custom-select" id="inputGroupSelect01" onChange={handelDemo24}>
                        <option selected="">Select State </option>
                        <option value="1">State One</option>
                        <option value="2">State Two</option>
                        <option value="3">State Three</option>
                      </select>
                    </div>
                    Zip Code*
                    <input type="" class="form-control ab151" name="zip" required="" onChange={handelDemo26} />
                    Country*
                    <div class="input-group mb-3 ab151" >

                      <select class="custom-select" id="inputGroupSelect01" onChange={handelDemo25}>
                        <option selected="">Select Country </option>
                        <option value="india">india</option>
                        <option value="USA">USA</option>
                        <option value="UK"> UK</option>
                      </select>
                    </div>
                    Phone*
                    <input type="" class="form-control ab151" name="phone" required="" onChange={handelDemo22} />
                    <div class="row ab99">
                      
                    </div>
                  </form>
                  <div class="ab153"> BILLING ADDRESS SAME AS SHIPPING ADDRESS  </div>
                  <input name="agreement" type="checkbox" onChange={handleChange} class="ab154" onClick={Address} />


                  {show &&

                    <form>
                      <div class="ab150">2. BILLING ADDRESS</div>
                      Name*
                      <input type="" class="form-control ab151" name="name" required="" onChange={handelDemo36}/>
                      Street*
                      <input type="" class="form-control ab151" name="street" required="" onChange={handelDemo35}/>
                      City*
                      <input type="" class="form-control ab151" name="city" required=""  onChange={handelDemo34}/>
                      State*
                      <div class="input-group mb-3 ab151">

                        <select class="custom-select" id="inputGroupSelect01" onChange={handelDemo33}>
                          <option selected="">Select State </option>
                          <option value="1">State One</option>
                          <option value="2">State Two</option>
                          <option value="3">State Three</option>
                        </select>
                      </div>
                      Zip Code*
                      <input type="" class="form-control ab151" name="zip" required="" onChange={handelDemo32}/>
                      Country*
                      <div class="input-group mb-3 ab151">

                        <select class="custom-select" id="inputGroupSelect01" onChange={handelDemo31}>
                          <option selected="">Select Country </option>
                          <option value="1">Country One</option>
                          <option value="2">Country Two</option>
                          <option value="3">Country Three</option>
                        </select>
                      </div>
                      Phone*
                      <input type="" class="form-control ab151" name="phone"  required=""  onChange={handelDemo30}/>

                      <div class="row ab99 " >
                      <div class="col-md-9"><button type="button" class="btn btn-primary ab52">CANCEL</button></div>
                      <div class="col-md-3"><button type="button" class="btn btn-primary ab53 ab152" onClick={Billing} onChange={handleChange}>SAVE</button></div>
                      </div>
                    </form>
                  }
                </div>
                <div class="col-md-4">
                  <div class="ab150">ORDER SUMMARY</div>
                  <div class="row">
                    <div class="col-md-7"><div class="ab155">Subtotal</div></div>
                    <div class="col-md-5"><div class="ab155 ab156">{ }</div></div>
                  </div>
                  <div class="row">
                    <div class="col-md-7"><div class="ab155">Shipping</div></div>
                    <div class="col-md-5"><div class="ab155 ab156">To be calculated</div></div>
                  </div>
                  <div class="row">
                    <div class="col-md-7"><div class="ab155">DISCOUNT</div></div>
                    <div class="col-md-5"><div class="ab155 ab156">₹{location.state.discount}</div></div>
                  </div>

                  <div class="ab153"></div>
                  <div class="row ab158">
                    <div class="col-md-7"><div class="ab155 ab157">PAYBLE AMOUNT </div></div>
                    <div class="col-md-5"><div class="ab155 ab156">₹{location.state.total}</div></div>
                  </div>
<br></br>
                  <button type="button" class="btn btn-primary ab53 ab159" onClick={Order}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <button onClick={haaddd}>hhh</button>
    </>
  );
}

export default App;
