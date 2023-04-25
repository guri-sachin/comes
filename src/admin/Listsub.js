import {Form,Button,Container,Table} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';


function Admin()
{

function Show(){
  
  navigate("/");
}

const [product,setProducts] =useState([]);
  const navigate = useNavigate();
  console.log(product)
  useEffect(()=>{
     axios.get("http://localhost:4200/showsub").then(res=>setProducts(res.data));
     
     
 },[]);

 function Shows(e){


  
    
  const id = e.target.id;
  axios.get(`http://localhost:4200/deletesub/${id}`).then(
    res => setProducts(res.data));
 }
 

   return(
    

 <div  >
   {/* <!-- Page Wrapper --> */}
<div id="wrapper" >





      

{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
{/* 
  <!-- Sidebar - Brand --> */}
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href={"Admin"}>
    
    <div class="sidebar-brand-icon ">
     LOGO
    </div>
  </a>
  <hr class="sidebar-divider my-0"/>
  <hr class="sidebar-divider"/>

{/* 
  
  <!-- Nav Item - Pages Collapse Menu --> */}
   <li class="nav-item">
    <a class="nav-link" href={"Categories"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Add Categories</span></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href={"Sub"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Sub Categories</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"Color"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Add Color</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"Add"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Add product </span></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href={"Products"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >All Products</span></a>
  </li>
 
  <li class="nav-item" >
    <a class="nav-link" href={"Listcate"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >List categories </span></a>
  </li>
  
  
  
  <li class="nav-item" >
    <a class="nav-link" href={"Listsub"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >List sub categories</span></a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href={"Shop"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >SHOP BY categories</span></a>
  </li>

  <li class="nav-item" >
    <a class="nav-link" href={"Coupns"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Generate Coupns</span></a>
  </li>

  <li class="nav-item" >
    <a class="nav-link" href={"Orders"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Total Orders</span></a>
  </li>

 
 
{/* 
  <!-- Nav Item - Utilities Collapse Menu --> */}
  

  {/* <!-- Divider --> */}
  

  
 

 {/*  <!-- Sidebar Toggler (Sidebar) --> */}
 <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
</ul>

{/* 
<!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

     {/*  <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Topbar --> */}
        <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">

         {/*  <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

      

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
        <div class="container-fluid">

         {/*  <!-- Page Heading --> */}
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
      
          <div >
<h1 class="h3 mb-0 text-gray-800">List of sub categories</h1>  
        <Table striped bordered hover >
      <thead>
      <th>categories</th>   <th>sub categories</th><th>Action</th>
      </thead>
         <tbody>
             {product.map((item,index)=>{
                 return(
                     <tr key={index}>
                      <td>{item.categories}</td>
                           <td>{item.subcategories}</td>
                       
                      
                         <td><Button type="button"  variant="danger" id={item.id} onClick ={Shows} >DELETE</Button></td>
                     </tr>
                 );
             })}
         </tbody>

        </Table>
    </div>
    



            
            
          </div>
</div>
    
    
    



</div>

<footer class="sticky-footer bg-dark">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>&copy; Mobile App @ All right reserved</span>
          </div>
        </div>
      </footer>

</div>

<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</div>










    
    
  







</div>    
       
   );

}
export default Admin;