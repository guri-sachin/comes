import './App.css';
import Headerlog from './Headerlog';
import Popup from 'reactjs-popup';
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
import 'reactjs-popup/dist/index.css';
import { Rating } from 'react-simple-star-rating'

function App() {
  const [products4,setProducts4] =useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [close, setClose] = useState(true)
  const [nameop, setNameop] = useState('')
  const [coment, setComent] = useState('')
  const [rating, setRating] = useState(0)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("");


  useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data)
   setName( data.data[0].fullname);
console.log(name)
  }, []);

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

  function handelDemo2(e)
  {
    setComent(e.target.value);
  }

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    console.log(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)




  async function Invoice(e){
  
  
    var id =e.target.id;;
    console.log(id)
    var data = {"id":id}
  const config = {
    method :'POST',
    headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  },
    body: JSON.stringify(data)
  }
  
  const response = await fetch("http://localhost:4200/oiuyt",config);
  
  const data1 = await response.json();
  
  console.log(data1);
  setProducts4(data1)
  console.log(products4);
  
  // const product =products1; 
  
  navigate("/Invoic",{state:data1})
 
  
  
  }

function show(e){
  console.log(e.target.name)

}

function Ratin(e){
  console.log(nameop)
 
var jk =JSON.parse(nameop)
console.log(jk)
 

  var data = {"star":rating,"comment":coment,"usname":location.state[0].usname,"name":jk}
  console.log(data)
  axios.post("http://localhost:4200/Rate",data).then(
    res=>  
    console.log(res.data)
     
  
) 
Swal.fire({
  icon: 'success',
  // title: 'Password Changed',
  text: "Done thanks for your time",
})
}

function show(e){
  setNameop(e.target.value)
  setOpen(true)
}

function ckkl(){
  setOpen(false)
}


  return (
    <>
      <div>
        <Headerlog></Headerlog>

        <section>
          <div class="ab68">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-2"><a onClick={account}><img src="images/profile.svg" /></a></div>
                    <div class="col-md-10 ">
                      <div class="ab65"><a onClick={account}>My Profile <i class="fa fa-arrow-right"></i></a></div>
                     
                    </div>
                  </div>
                  <div class="ab67"></div>

                  <div class="row">
                    <div class="col-md-2"><a onClick={Orders}><img src="images/order.svg" /></a></div>
                    <div class="col-md-10 ">
                      <div class="ab69"><a onClick={Orders}>My Orders </a></div>
                      <div class="ab66"></div>
                    </div>
                  </div>

                  <div class="ab75"></div>

                  <div class="row">
                    <div class="col-md-2"><a href="Wallet"><img src="images/wallet.svg" /></a></div>
                    <div class="col-md-10 ">
                      <div class="ab69"><a href="Wallet">My Wallet</a></div>
                      <div class="ab66"></div>
                    </div>
                  </div>

                  <div class="ab75"></div>
                </div>

                <div class="col-md-9">
                  <div class="ab70">
                    <div class="row">
                      <div class="col-md-10"><div class="ab76">My Orders</div></div>
                      <div class="col-md-2 ab77"></div>
                    </div>



                    <div class="ab43"></div>
                    <div class="row">
                      <div class="col-md-2"><div class="ab76 ab100">Product</div></div>
                      <div class="col-md-2"><div class="ab76 ab100">Price</div></div>
                      <div class="col-md-1"><div class="ab76 ab100" >Quantity</div></div>
                      <div class="col-md-2"><div class="ab76 ab100">Name</div></div>
                   
                      <div class="col-md-2"><div class="ab76 ab100" >Total</div></div>
                      <div class="col-md-1"><div class="ab76 ab100" >Status</div></div>
                      <div class="col-md-1"><div class="ab76 ab100" >Invoice</div></div>
                    </div>

                    <div class="row">
                      {location.state.length> 0 ? location.state.map((item, index) => {
                        return (
                          <tr key={index}>






                            <div class="col-md-2">{JSON.parse(item.image_name.split(",")).map((item, index) => {
                              return (
                                <tr key={index}>


                                  <td style={{paddingTop:"10px"}}> <img src={(item.split(","))} width="50" height="40" />
                                  <br></br>
                                  </td>

                                </tr>
                              );
                            })}
                        </div>
                            <div class="col-md-2"><div class="ab37 ab100">          {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}</div></div>
                            <div class="col-md-1"><div class="ab37 ab100" >{JSON.parse(item.qty.split(",")).map((item, index) => {
                              return (
                                <tr key={index}>


                                  <td> {(item.split(","))}
                                  </td>

                                </tr>
                              );
                            })}</div></div>
                             <div class="col-md-2"><div class="ab37 ab100" >     {JSON.parse(item.name.split(",")).map((item, index) => {
                              return (
                                <tr key={index}>


                                  <td> {(item.split(","))}
                                  </td>

                                </tr>
                              );
                            })}</div></div>
                         
                            <div class="col-md-2"><div class="ab37 ab100" >{item.total}</div></div>
                          
                            <div class="col-md-1"><div class="ab37 ab100" >{ item.status == "Delivered" ?  
                              <Button type="button"  variant="danger" value={item.name}  onClick={show} >Rate Us</Button> :item.status}
                                     

                             <Popup open = {open}
                           
   
    modal
 
   

  >
   
      
      <div className="modal12">
        <button className="close" onClick={ckkl}>
          &times;
        </button>
        <div className="header"> Rate On This Product </div>
        <div className="content">
          {' '}
          Tell Us Your Thoughts your feedback is very presious to us to improve the things
          <br />
          <br></br>
          <div >
                <textarea type="text" class="form-control" id="Input" placeholder="feedback" onChange={handelDemo2}/>
               </div>
               <br></br>
               <div class="text-center">
               <Rating 
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
      </div>
        </div>
        <div className="actions">
         <Button type="button"  variant="danger" onClick={Ratin} > Submit </Button>
      
          
        
        
        </div>
      </div>
    
  </Popup></div></div>
                            <div class="col-md-1"><div class="ab37 ab100" ><td><Button type="button"  variant="danger" id={item.id}  onClick={Invoice}>invoice</Button> </td></div></div>
                          </tr>
                        );
                      }):<h1 class="text-center">YOU HAVE NOT ANY ORDER YET</h1>}

 
                    </div>















                  </div>

                  <div class="row ab101" >
                    <div class="col-md-10"><div class="ab76">My Wishlist</div></div>
                    <div class="col-md-2 ab77"><a href="#">View All <i class="fa fa-arrow-right"></i></a></div>
                  </div>

                  <div class="row ab102" >
                    <div class="col-md-4">
                      <img src="images/1.jpg" width="100%" />
                      <div class="ab34">

                        <div class="button">
                          <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
                              <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
                              <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
                            </g>
                          </svg>
                        </div>




                      </div>
                      <div class="ab35">Stalley Sheesham Wood 2 Seater Sofa In Honey Oak Finish in Multicolor</div>
                      <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5" />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="ab103"></div>
                      <div class="ab36">Today's Deal</div>
                      <div class="ab37">₹28,999</div>

                    </div>
                    <div class="col-md-4">
                      <img src="images/1.jpg" width="100%" />
                      <div class="ab34">

                        <div class="button">
                          <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
                              <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
                              <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
                            </g>
                          </svg>
                        </div>

                        <script src="js/TweenMax.min.js"></script>
                        <script src="js/MorphSVGPlugin.min.js"></script>

                        <script src="js/DrawSVGPlugin.js"></script>

                        <script src="js/script.js"></script>



                      </div>
                      <div class="ab35">Stalley Sheesham Wood 2 Seater Sofa In Honey Oak Finish in Multicolor</div>
                      <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5" />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="ab103"></div>
                      <div class="ab36">Today's Deal</div>
                      <div class="ab37">₹28,999</div>

                    </div>
                    <div class="col-md-4"></div>
                  </div>

                  <div class="row ab101">
                    <div class="col-md-10"><div class="ab76">Recently Viewed</div></div>
                    <div class="col-md-2 ab77"><a href="#">View All <i class="fa fa-arrow-right"></i></a></div>
                  </div>


                  <div class="row ab102" >
                    <div class="col-md-4">
                      <img src="images/1.jpg" width="100%" />
                      <div class="ab34">

                        <div class="button">
                          <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
                              <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
                              <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
                            </g>
                          </svg>
                        </div>



                      </div>
                      <div class="ab35">Stalley Sheesham Wood 2 Seater Sofa In Honey Oak Finish in Multicolor</div>
                      <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5" />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="ab103"></div>
                      <div class="ab36">Today's Deal</div>
                      <div class="ab37">₹28,999</div>

                    </div>
                    <div class="col-md-4">
                      <img src="images/1.jpg" width="100%" />
                      <div class="ab34">

                        <div class="button">
                          <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
                              <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
                              <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
                            </g>
                          </svg>
                        </div>

                        <script src="js/TweenMax.min.js"></script>
                        <script src="js/MorphSVGPlugin.min.js"></script>

                        <script src="js/DrawSVGPlugin.js"></script>

                        <script src="js/script.js"></script>



                      </div>
                      <div class="ab35">Stalley Sheesham Wood 2 Seater Sofa In Honey Oak Finish in Multicolor</div>
                      <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5" />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="ab103"></div>
                      <div class="ab36">Today's Deal</div>
                      <div class="ab37">₹28,999</div>

                    </div>
                    <div class="col-md-4">
                      <img src="images/1.jpg" width="100%" />
                      <div class="ab34">

                        <div class="button">
                          <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                              <path class="heart-stroke" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-full" d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z" fill="#0090E3"></path>
                              <path class="heart-lines" d="M26,4 L30.6852129,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M2.314788,4 L7.00000086,0.251829715" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 10.314788 1)"></path>
                              <path class="heart-lines" d="M27,12 L33,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M0,12 L6,12" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 7 1)"></path>
                              <path class="heart-lines" d="M24,19 L28.6852129,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round"></path>
                              <path class="heart-lines" d="M4.314788,19 L9.00000086,22.7481703" stroke="#0090E3" stroke-width="2" stroke-linecap="round" transform="matrix(-1 0 0 1 14.314788 1)"></path>
                            </g>
                          </svg>
                        </div>

                        <script src="js/TweenMax.min.js"></script>
                        <script src="js/MorphSVGPlugin.min.js"></script>

                        <script src="js/DrawSVGPlugin.js"></script>

                        <script src="js/script.js"></script>



                      </div>
                      <div class="ab35">Stalley Sheesham Wood 2 Seater Sofa In Honey Oak Finish in Multicolor</div>
                      <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5" />
                        <label for="star-5" title="5 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4" />
                        <label for="star-4" title="4 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3" />
                        <label for="star-3" title="3 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2" />
                        <label for="star-2" title="2 stars">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1" />
                        <label for="star-1" title="1 star">
                          <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div class="ab103"></div>
                      <div class="ab36">Today's Deal</div>
                      <div class="ab37">₹28,999</div>

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
