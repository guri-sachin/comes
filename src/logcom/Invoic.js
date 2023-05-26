
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import htmlToPdfmake from 'html-to-pdfmake';
import {Form,Button,Navbar,Nav,Container,Carousel,table} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import React, {useRef, useState,useEffect } from 'react';
import { PDFExport, savePDF } from  '@progress/kendo-react-pdf';

const App = () => {

    const location = useLocation();
  console.log(location.state)


const [name, setName] = useState("");
const [email, setEmail] = useState("");
useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data.data[0].email)
   setName( data.data[0].fullname);
   setEmail(data.data[0].email)
console.log(name)

   
}, []);

const pdfExportComponent = useRef(null);
const contentArea =useRef(null);


const handel= (event) =>{
    pdfExportComponent.current.save();
}
  return (
    <>
    <div className="App container mt-5">
    <button class="btn btn-primary" onClick={handel}>Download Invoice</button>
    </div>
   <div id="divToPrint" className="m-3">
    <PDFExport ref={pdfExportComponent}>
   <div class="row d-flex justify-content-center">
     <div class="col-md-8">
         <div class="card">
             <div class="d-flex flex-row p-2">
                 <div class="d-flex flex-column"> <span class="font-weight-bold">Papperfry Invoice</span> <small>INV-001</small> </div>
                 
             </div>
             
             <hr />
             <div class="table-responsive p-2">
                 <table class="table table-borderless">
                     <tbody>
                         <tr class="add">
                             <td>To</td>
                             <td>From</td>
                         </tr>
                         <tr class="content">
                             <td class="font-weight-bold">{name} <br />Attn: Jassa Smith Pymont <br />Australia</td>
                             <td class="font-weight-bold">Papperfry <br /> Attn: Jassa Right Polymont <br /> USA</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <hr />
             <div class="products p-2">
                 <table class="table table-borderless">
                     <tbody>
                         <tr class="add">
                             <th>Name</th>
                             <th>Qty</th>
                             <th>Price</th>
                             <th class="text-center">Total</th>
                         </tr>
                         {location.state.map((item,index)=>{
                 return(
                         <tr class="content">
                                          <td>
                       {JSON.parse(item.name.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}</td>
                                <td>
                       {JSON.parse(item.qty.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}</td>
                             <td>
                       {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}</td>
                   
                             <td class="text-center">{item.total}</td>
                         </tr>
                             );
                            })}
                      
                     </tbody>
                 </table>
             </div>
             <hr />
             <div class="products p-2">
                 <table class="table table-borderless">
                     <tbody>
                         <tr class="add">
                          
                           
                             <th>Discount</th>
                             <th class="text-center">Total</th>
                         </tr>
                         {location.state.map((item,index)=>{
                 return(
                         <tr class="content">
                             
                          
                             <td>RS. {item.discount}</td>
                             <td class="text-center">{item.total}</td>

                         </tr>
                           );
                        })}
                     </tbody>
                 </table>
             </div>
             <hr />
             <div class="address p-2">
                 <table class="table table-borderless">
                     <tbody>
                         <tr class="add">
                             <td>Bank Details</td>
                         </tr>
                         <tr class="content">
                             <td> Bank Name : ADS BANK <br /> Swift Code : 00220022 <br /> Account Holder : Jassa Pepper <br /> Account Number : 6953PO789 <br /> </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
 </div>

 </PDFExport>

     </div>
  
  {/* <!-- Body: Body --> */}
  <div class="body d-flex py-lg-3 py-md-2">
                <div class="container-xxl">
                    
                    <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div class="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0 py-3 pb-2">Invoices</h3>
                                <div class="col-auto py-2 w-sm-100">
                                    <ul class="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                     
                                        <li class="nav-item"><a class="nav-link  active" data-bs-toggle="tab" href="#Invoice-Simple" role="tab">Bill invoice</a></li>
                                  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-12">
                            <div class="tab-content">
                               
                                <PDFExport ref={pdfExportComponent}>
                                <div class="tab-pane fade show active" id="Invoice-Simple">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8 col-md-12">
                                            <div class="card p-xl-5 p-lg-4 p-0">
                                                <div class="card-body">
                                                    <div class="mb-3 pb-3 border-bottom">
                                                        Invoice
                                                        <strong>May 22, 2021</strong>
                                                        <span class="float-end"> <strong>transection id:</strong> #18414</span>
                                                    </div>

                                                    <div class="row mb-4">
                                                        <div class="col-sm-6">
                                                            <h6 class="mb-3">From:</h6>
                                                            <div><strong>Pepperfry Shop</strong></div>
                                                            <div>111  Berkeley Rd</div>
                                                            <div>STREET ON THE FOSSE, Poland</div>
                                                            <div>Email: Pepperfry@gmail.com</div>
                                                            <div>Phone: +44 888 666 3333</div>
                                                        </div>
                                                        
                                                        <div class="col-sm-6">
                                                        {location.state.map((item,index)=>{
                                                     return(
                                                           <div key={index}>
                                                                
                  
                                                            <h6 class="mb-3">To:</h6>
                                                            <div><strong>{name}</strong></div>
                                                            <div>{item.line}</div>
                                                            <div>{item.city}, {item.country}</div>
                                                            <div>Email: {email}</div>
                                                            <div>Phone: {item.phone}</div>
                                                            </div>

);
})}
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="table-responsive-sm">
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center">#</th>
                                                                    <th>Item</th>
                                                                  
                                                                    <th >Item Cost</th>
                                                                    <th>Products Item</th>
                                                                    <th class="text-end">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {location.state.map((item,index)=>{
                 return(
                    <tr key={index}>
                                                    
                                                    <td class="text-center">1</td>
                                                        
                                                        {JSON.parse(item.name.split(",")).map((item,index)=>{
 return(
     <td key={index}>

     
          {(item.split(","))} 
       
      
</td>
 );
})}
                                                        
                                                        
                                                    
                                                    
                                                 

                
                                                              {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <td key={index}>

                  
                      {(item.split(","))} 
                    
                   
       </td>
              );
          })}
                                                                      {JSON.parse(item.qty.split(",")).map((item,index)=>{
              return(
                  <td key={index}>

                  
                     {(item.split(","))} 
                    
                   
       </td>
              );
          })}
                                                                    <td class="text-end">{item.total}</td>
                                                                    </tr>

);
})}                                          
                                                            </tbody>
                                                        </table>
                                                    </div>
                    
                                                    <div class="row">
                                                        <div class="col-lg-4 col-sm-5">
                                                        
                                                        </div>
                                                        
                                                        <div class="col-lg-4 col-sm-5 ms-auto">
                                                            <table class="table table-clear">
                                                                <tbody>
                                                                {location.state.map((item,index)=>{
                 return(
                    <tr key={index}>
                                                                  

  <tr>

                                                                        <td ><strong>Subtotal</strong></td>
                                                                             {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <td key={index}>
                     {(item.split(","))} 
                 </td>
              );
          })}

              
              </tr>
                                                                                     <tr>
                                                                        <td ><strong>Tax(18%)</strong></td>
                                                                        <td class="text-end">$59.4</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td ><strong>Total</strong></td>
                                                                        <td class="text-end"><strong>{item.total}</strong></td>
                                                                    </tr>
                                                                    </tr>
                                                                    );
                                                                })}   
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                    
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h6>Terms &amp; Condition</h6>
                                                            <p class="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                                        </div>
                                                      
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                </PDFExport>
                                <div class="text-center">
                                                          
                                                          <button type="button" class="btn btn-primary btn-lg my-1" onClick={handel}><i class="fa fa-paper-plane-o" onClick={handel}></i>Download</button>
                                                      </div>
                               
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
     </>
     

)
};


export default App;