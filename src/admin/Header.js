import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';


function Admin()
{
  const navigate = useNavigate();
function Show(){
  
  navigate("/");
}
   return(
    

 <div>
   {/* <!-- Page Wrapper --> */}
   <div id="content-wrapper" class="d-flex flex-column">

{/*  <!-- Main Content --> */}
 <div id="content">

   {/* <!-- Topbar --> */}
   <header>
   
   <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
   <a class="sidebar-brand d-flex align-items-center justify-content-center"  href={"Admin"}>
    
    <div class="sidebar-brand-icon ">
     LOGO
    </div>
  </a>
  
    {/*  <!-- Sidebar Toggle (Topbar) --> */}
     <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
       <i class="fa fa-bars"></i>
     </button>

    {/*  <!-- Topbar Search --> */}
     <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
       <div class="input-group">
         <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
         <div class="input-group-append">
           <button class="btn btn-primary an" type="button">
             <i class="fas fa-search fa-sm"></i>
           </button>
         </div>
       </div>
     </form>

  {/*    <!-- Topbar Navbar --> */}
     <ul class="navbar-nav ml-auto">

    {/*    <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
       <li class="nav-item dropdown no-arrow d-sm-none">
         <a class="nav-link dropdown-toggle" href="" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <i class="fas fa-search fa-fw"></i>
         </a>
        {/*  <!-- Dropdown - Messages --> */}
         <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
           <form class="form-inline mr-auto w-100 navbar-search">
             <div class="input-group">
               <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
               <div class="input-group-append">
                 <button class="btn btn-primary an" type="button">
                   <i class="fas fa-search fa-sm"></i>
                 </button>
               </div>
             </div>
           </form>
         </div>
       </li>

    {/*    <!-- Nav Item - Alerts -->
       

       <!-- Nav Item - Messages -->
       

       

       <!-- Nav Item - User Information --> */}
       <li class="nav-item dropdown no-arrow">
         <a class="nav-link dropdown-toggle" href={"/"} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <span class="mr-2 d-none d-lg-inline text-gray-600 small am">Anil Singh</span>
           <img class="img-profile rounded-circle" src={"ser8.jpg"}/>
           &nbsp; &nbsp;
           <button type="button" class="btn btn-primary an1">Logout</button>
         </a>
       {/*   <!-- Dropdown - User Information --> */}
         <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
           
           
           
           <div class="dropdown-divider"></div>
           <a class="dropdown-item" onClick={Show} data-toggle="modal" data-target="#logoutModal">
             <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
             Logout
           </a>
         </div>
       </li>
       

     </ul>

   </nav>
   </header>
  {/*  <!-- Begin Page Content --> */}
   




</div>



</div>
  







</div>    
       
   );

}
export default Admin;