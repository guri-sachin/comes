
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
useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("data"));

   console.log(data)
   setName( data.data[0].fullname);
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
  

     </>
     

)
};


export default App;