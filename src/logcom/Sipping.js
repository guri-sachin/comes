import './App.css';

import Headerlog from './Headerlog';
import { City, Country, State } from "country-state-city";
import jquery from "jquery";
import './Billing.css';
import Swal from "sweetalert2";
import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import React, { useRef, useState, useEffect} from 'react';
import { BrowserRouter, Link, Routes, Route, MemoryRouter, NavLink } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { InvoiceNumber } from 'invoice-number'


function App() {
  const dfjkxf = useRef(null);
  const location = useLocation();
  const [fullname, setFullname] = useState("");
  let countrydata = require('./data.json');
  
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [staddress, setStaddress] = useState('');
  const [line, setLine] = useState('');
  const [email, setEmail] = useState('');
  const [products3,setProducts3] =useState([]);
  const [addresss,setAddress] =useState([]);
  const [sagvuayscv,setGostaay] =useState([]);
  const [error,setError] = useState(false)
  
  const [show, setShow] = useState(true);
  const [shoui, setShoui] = useState(true);
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

  useEffect(() => {
  var data =  location.state.fullname
    axios.post(`http://localhost:4200/shiaddress/${data}`).then(
      res =>setAddress(res.data));

  }, []);
  console.log(addresss)  

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
    console.log(e.target.value)
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
    if (agreement == true && line.length !== 0 && phone.length !== 0 && zip.length !== 0 && city.length !== 0) {
  
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
    
  } 
    else if(agreement == false){
      setShoui(false)
    

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
  else if(line.length !== 0 || phone.length !== 0 || zip.length !== 0 || city.length !== 0){
    alert("please fill the adrress details to continue")
  }
}
  

  console.log(location)





  async function Address(e) {
    var decider = document.getElementById('switch');
   console.log(decider.checked)
    console.log(fullname)
    if(line.length == 0 || phone.length == 0 || zip.length == 0 || city.length == 0){
      setError(true)
    }else if(decider.checked){
      setShow(false)
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
  }else{
    setShow(true)
  }
}

  async function Billing(event) {
    setShow(false)
    setAgreement(true);
    setShoui(false)
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

 

 function Addresrepeat(e){


  var data =  e.target.value
    axios.post(`http://localhost:4200/againaddress/${data}`).then(
      res =>{
   
                      setLine(res.data[0].line);
                      setCity(res.data[0].city);
                      setStaddressT(res.data[0].lname);
                      setZip(res.data[0].zip);
                      setCountry(res.data[0].country);
                      setPhone(res.data[0].phone)
    })
 }


  const[countryid, setCountryid]=useState('');
 const[state, setState]=useState([]);
 const[stateid, setStateid]= useState('');

 const[countryid1, setCountryid1]=useState('');
 const[state1, setState1]=useState([]);
 const[stateid1, setStateid1]= useState('');

  const handlecounty=(e)=>{
    const getcountryId= e.target.value;
    const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
    const uio = countrydata.find(country=>country.country_id===getcountryId).country_name;
console.log(uio)
    setCountry(uio);
  
  setState(getStatedata);
   setCountryid(getcountryId);
  console.log(getcountryId);
  }
  const handlestate = (e)=>{
    const stateid= e.target.value;

    console.log(stateid);
    setStaddress(stateid)
  }

  const handlecounty1=(e)=>{
    const getcountryId= e.target.value;
    const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
    const uio = countrydata.find(country=>country.country_id===getcountryId).country_name;
    console.log(uio)
    setCountryT(uio);
    setState1(getStatedata);
    setCountryid1(getcountryId);
  //console.log(getcountryId);
  }
  const handlestate2 = (e)=>{
    const stateid1= e.target.value;
    console.log(stateid1);
    setStaddressT(stateid1)
  

  }

   const handleChange = (event) => {
     setAgreement(event.target.checked);
  
   }

   function change() {
    var decider = document.getElementById('switch');
    if(decider.checked){
      setShow(false)
        alert('check');
    } else {
      alert('unchecked');
      setShow(true)
    }
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

                  <div class="ab150 abcv8"><h3>1. SHIPPING Address</h3></div>
                
                  <form class="abcv8">

                    <h4 >Name*</h4>
                     <input type="text" class="form-control searchTerm" name="name"  required value={fullname}/>
                     
                 
                    <h4>Street*</h4>
<div>
                    <input type="text" class="form-control ab151" name="street"  value={line} required onChange={handelDemo23} />
                    {error? 
                     <label>field can't be Empty</label>:""}
                     </div>
                     <div>
                  <h4>  City*</h4>
                    <input type="text" class="form-control ab151" name="city"   value={city} onChange={handelDemo28} />
                    {error? 
                     <label>field can't be Empty</label>:""}</div>
                     <div>
                   <h4>Zip Code*</h4> 
                    <input type="text" class="form-control ab151" name="zip" value={zip} onChange={handelDemo26} />
                    {error? 
                     <label>field can't be Empty</label>:""}  </div>
                   <h4>Country*</h4> 
                    <div  class="input-group mb-3 ab151">
                 
                   
                      <select  style={{height:"30px" ,width:"758px"}} onClick={(e)=>handlecounty(e)}>
                        <option >--Select Country--</option>
                        {
                        countrydata.map( (getcountry,index)=>(
                          <option value={getcountry.country_id} key={index} ><h5>{getcountry.country_name}</h5></option>
                        ))
                        }
                        </select>
                    </div>
                   <h4>State*</h4> 

                      <div class="input-group mb-3 ab151">

                  
                        <select name='states' style={{height:"30px" ,width:"758px"}} onClick={(e)=>handlestate(e)}>
                        <option value="">--Select State--</option>
                        {
                          state.map((getstate, index)=>(
                            <option  value={getstate.state_name} key={index} ><h5>{ getstate.state_name }</h5></option>
                          ))
                        }
                        </select>
                      </div>
                      <div>
                   <h4>Phone*</h4> 
                    <input type="text" class="form-control ab151" name="phone" value={phone} onChange={handelDemo22} required /> 
                    {error? 
                     <label>field can't be Empty</label>:""}</div>
                    <div class="row ab99">
                  
                    </div>
                   
                  </form>
                  {shoui &&
                  <div class="ab153 abcv8"><h4>  <input name="agreement" type="checkbox" onChange={handleChange} id ="switch"class="ab154" value="true" onClick={Address}  />  BILLING ADDRESS SAME AS SHIPPING ADDRESS </h4> </div>
                  }


                  {show &&

                    <form class="abcv8">
                      <div class="ab150"><h3>2. BILLING ADDRESS</h3></div>
                    <h4>Name*</h4>  
                      <input type="text" class="form-control ab151" name="name"  onChange={handelDemo36} required/>
                     <h4>Street*</h4> 
                      <input type="text" class="form-control ab151" name="street"  onChange={handelDemo35}/>
                    <h4> City*</h4> 
                      <input type="text" class="form-control ab151" name="city"   onChange={handelDemo34}/>
                      <h4>Zip Code*</h4>
                      <input type="text" class="form-control ab151" name="zip"  onChange={handelDemo32}/>
                
                      <h4>Country*</h4> 
                      <div class="input-group mb-3 ab151">
  <select name='country' style={{height:"30px" ,width:"758px"}} onClick={(e)=>handlecounty1(e)}>
                        <option value="">--Select Country--</option>
                        {
                        countrydata.map( (getcountry,index)=>(
                          <option value={getcountry.country_id} key={index}><h5>{getcountry.country_name}</h5></option>
                        ))
                        }
                        </select>

                      </div>
                     <h4>State*</h4> 
                      <div class="input-group mb-3 ab151">
                      <select name='states'  style={{height:"30px" ,width:"758px"}} onClick={(e)=>handlestate2(e)}>
                        <option value="">--Select State--</option>
                        {
                          state1.map((getstate, index)=>(
                            <option value={getstate.state_name} key={index}><h5>{ getstate.state_name }</h5></option>
                          ))
                        }
                        </select>
                   
                      </div>
                  
                      <h4>Phone*</h4>
                      <input type="text" class="form-control ab151" name="phone"   onChange={handelDemo30}/>

                      <div class="row ab99 " >
                      <div class="col-md-9"><button type="button" class="btn btn-primary ab52">CANCEL</button></div>
                      <div class="col-md-3"><button type="button" class="btn btn-primary ab53 ab152" onClick={Billing} >SAVE</button></div>
                      </div>
                    </form>
                  }
                </div>

                    <div class="col-md-4 "> 
                <div class="card">
                 
                 <h3 class="text-center"></h3>
                
<h4 class="card-header"><td>ORDER SUMMARY</td></h4>
<div class="card-body">
 
 <p class="card-text col-md-6"><h5>DISCOUNT</h5></p>
 <p class="card-text col-md-6"><h5>₹{location.state.discount}</h5></p>
 <p class="card-text col-md-6"><h5>Shipping</h5></p>
 <p class="card-text col-md-6"><h5>To be calculated</h5></p>
 <p class="card-text col-md-6"><h5>PAYBLE AMOUNT</h5></p>
 <p class="card-text col-md-6"><h5>₹{location.state.total}</h5></p>
 

</div>
<br></br><hr></hr>
                  <button type="button" class="btn btn-primary abc53 ab159" onClick={Order}><h5>Place Order</h5></button>
                 
</div>
<br></br>
                <div >
                  {/* <div class="ab150">ORDER SUMMARY</div>
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
                  <hr></hr> */}
                  <div className='abcv8'>
                  {addresss.map((item,index)=>{
                       return(
                        <tr key={index}>
                      
                  <div class="card">
                 
                    <h3 class="text-center"></h3>
                   
  <h5 class="card-header"><td>  <input name="one" type="radio" value={item.id} onClick={Addresrepeat}></input> Delivery Address</td></h5>
  <div class="card-body">
    <h4 class="card-title">{item.email}</h4>
    <p class="card-text col-md-6"><h5>{item.fullname}</h5></p>
    <p class="card-text col-md-6"><h5>{item.lname}</h5></p>
    <p class="card-text col-md-6"><h5>{item.phone}</h5></p>
    <p class="card-text col-md-6"><h5>{item.country}</h5></p>
    <p class="card-text col-md-6"><h5>{item.city}</h5></p>
    <p class="card-text col-md-6"><h5>{item.zip}</h5></p>
    <p class="card-text"><h5>{item.line}</h5></p>
  
  </div>
</div>
<br></br>
                        
                          
                         
             </tr>
                    );
                })}


</div>             <a href="#popup1"><button type="button" class="btn btn-primary ab62"> 
           </button></a>
                </div></div>  
        

              </div>
            </div>
          </div>
        </section>
      </div>
  
    </>
  );
}

export default App;
