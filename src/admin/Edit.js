import {Form,Button,Container} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes,useLocation} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';


function Admin()
{
  

const navigate = useNavigate();
 const [products,setProducts] =useState([]);
 const [products1,setProducts1] =useState([]);
 const [products2,setProducts2] =useState([]);
 const [selects,setSelects] = useState();
const[sub,setSub] = useState();
const[arriv,setArriv] = useState();
const[cate,setCate]= useState();
const[categories,setCategories]= useState();
const  [name, setName] =useState('');
const  [price, setPrice] =useState('');
const  [description, setDescription] =useState('');
const  [sku, setSku] =useState('');
const  [sale, setSale] =useState('');
const  [percentage, setPercentage] =useState('');
const  [Inventery, setInventery] =useState('');
const  [id, setId] =useState('');
const location = useLocation();

const  [image,setImage]= useState([])




function handelDemo1(e)
{
    setName(e.target.value);

}
function handelDemo4(e)
{
    setSku(e.target.value);

}
function handelDemo5(e)
{
    setPercentage(e.target.value);

}
function handelDemo6(e)
{
    setSale(e.target.value);

}
function handelDemo7(e)
{
    setDescription(e.target.value);

}

function handelDemo8(e)
{
    setInventery(e.target.value);

}
function handelDemo12(e)
{
    setSub(e.target.value);

}
function handelDemo13(e)
{
  setCategories(e.target.value);

}
function handelDemo14(e)
{
  setArriv(e.target.value);

}


function handelDemo2(e)
{
   setPrice(e.target.value);
}


console.log(location)
      
  useEffect(() => {
     setId(location.state[0].id);
     setPrice(location.state[0].price)
     setDescription(location.state[0].description)
    setName(location.state[0].name);
    setSku(location.state[0].sku);
    setSale(location.state[0].sale);
    setPercentage(location.state[0].percentage );
    setInventery(location.state[0].inventery);
    setCategories(location.state[0].categories );
    setSub(location.state[0].subcategories );
    setArriv(location.state[0].arriv);
    console.log(name)






}, []);
 

function Subs(e){

  var data ={"categories":categories};
 
console.log(data);
   axios.post("http://localhost:4200/jio",data).then(
       res=> setProducts2(res.data)
    
   )
 
        };
function Saveproduct(e){

   const formData = new FormData();
      formData.append('name',name);
      formData.append('price',price);
      formData.append('sku',sku);
      formData.append('sale',sale);
      formData.append('percentage',percentage);
      formData.append('description',description);
      formData.append('selects',selects);
      formData.append('categories',categories);
      formData.append('sub',sub);
      formData.append('arriv',arriv);
      formData.append('Inventery',Inventery);
      

      Array.from(image).forEach(item => {
        formData.append('filename', item)
       console.log(item)
       })
       

    const config = {
                    headers:{
                        'content-type':'multipart/form-data'
                    }
    }


   axios.post("http://localhost:4200/Saveproduct",formData,config).then(
       res=> console.log(res)
  
    ) 
  
  };



    useEffect(()=>{
      axios.get("http://localhost:4200/showcate").then(res=>setProducts1(res.data));
      
      
  },[]);





  
    


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
                <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
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
        
            <form class="col-md-9">
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type=""   onChange={handelDemo1} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="" value={price}  onChange={handelDemo5}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product SKU</Form.Label>
                <Form.Control type="" value={sku} onChange={handelDemo4} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sale Percentage</Form.Label>
                <Form.Control type="" value={percentage} onChange={handelDemo6}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control type="" value={sale}  onChange={handelDemo2}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Inventery</Form.Label>
                <Form.Control type="" value={Inventery} onChange={handelDemo8}/>
                </Form.Group>

                  <div class="row">
                   <div >Description </div>
 
    
              <div >
                <input type="description" class="form-control" id="Input"  value={description} onChange={handelDemo7}  />
               </div>

            </div>

         
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image </Form.Label>
                <Form.Control type="file" name="filename"  accept="image/*" multiple onChange={(e) =>{
        setImage(e.target.files)
      }}  />
                </Form.Group>

  



<select name="cate" className="form-control"  onChange={handelDemo13} onClick={Subs} value={categories} >
                   <option >--Select Categories</option>
                   
                    {products1.map( (products,index)=>(                    
                   <option key={index}   value={products.categories}  >{products.categories}</option>
                 
                     ))
                       
                
                     }
                      
                 </select>





             
<br></br>
<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subcategories</Form.Label>
                <Form.Control type="" value={sub} onChange={handelDemo12} />
                </Form.Group>

<select name="sub" className="form-control" onChange={handelDemo12}   value={sub} >
                   <option>--Select Sub Categories</option>
                   {
                     products2.map( (data,index)=>(                    
                   <option key={index} value={data.subcategories}>{data.subcategories}</option>
                   
                  
                     ))
                     }
                 </select>
                 
<br></br>

<select name="cate" className="form-control"  onChange={handelDemo14}  >
                   <option >--Select Categories</option>
                 
                   <option>Best seller</option>
                   <option>New Arrivals</option>
                   <option>Discount</option>
                     
                 </select>

                 <br></br>
                <Button class="text-align:center" variant="primary" type="button" onClick={Saveproduct} >submit</Button>

              




            </form>
      



            
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