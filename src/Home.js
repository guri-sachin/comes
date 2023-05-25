import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import Checkout from './comp/Checkout';

import Header from './comp/Header';

import Papper from './comp/Papper';
import Profile from './comp/Profile';
import Order from './comp/Order';

import Wallet from './comp/Wallet';
import Wishlist from './comp/Wishlist';
import View from './comp/View';

import Pdes from './comp/Pdes';
import Front from './comp/Front';
import Dyv from './comp/Dyv';
// import Headerlog from './logcom/Headerlog';
// import Profilelog from './logcom/Profilelog';
// import Pdeslog from './logcom/Pdeslog';
// import Papperlog from './logcom/Papperlog';
// import Checkbuy from './logcom/Checkbuy';
// import Orderlog from './logcom/Orderlog';
// import Sipping from './logcom/Sipping';
// import Checkcard from './logcom/Checkcard';
// import Wishlistlog from './logcom/Wishlistlog';
// import Frontlog from './logcom/Frontlog';
// import Invoic from './logcom/Invoic';
// import Papperalllog from './logcom/Papperalllog';
// import Recentview from './logcom/Recentview';


import DyvSign from './comp/DyvSign';
import Subcard from './comp/Subcard';
import Papperall from './comp/Papperall';


function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="Header" element={<Header/>}></Route>
            <Route exact path="Papperall" element={<Papperall/>}></Route>
            <Route exact path="/*" element={<Front/>}></Route>
        
            <Route exact path="/Papper" element={<Papper/>}></Route>
            <Route exact path="/Dyv" element={<Dyv/>}></Route>
            <Route exact path="/Profile" element={<Profile/>}></Route>

            <Route exact path="/Order" element={<Order/>}></Route>
            <Route exact path="/Wallet" element={<Wallet/>}></Route>
            <Route exact path="/Wishlist" element={<Wishlist/>}></Route>

            <Route exact path="/View" element={<View/>}></Route>
            <Route exact path="/Checkout" element={<Checkout/>}></Route>
            <Route exact path="/Pdes" element={<Pdes/>}></Route>
         
         
           
     
      
            <Route exact path="/DyvSign" element={<DyvSign/>}></Route>
         
            <Route exact path="/Subcard" element={<Subcard/>}></Route>
       




</Routes>


 </div>

  
       
   );

}
export default Home;