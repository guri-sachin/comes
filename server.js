     const express =require("express");
const path =require("path");
const app = express();
var nodemailer = require('nodemailer');
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");
const multer=require('multer');
const fs = require('fs');
const { Route } = require("react-router-dom");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));



//create connection
const conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'papper'
});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});

//multer
var imagename='';


const storage = multer.diskStorage({
 destination:'./public/images',
 filename:(req,files,cb)=>{
  return cb(null,`${files.fieldname}_${Date.now()}${path.extname(files.originalname)}`)
 }
  })
const upload = multer ({storage: storage});






//route for Add categories
app.use("/filename",express.static("./public/images"))
app.post('/Saveuygfduct',upload.array('filename',10),(req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({reqFiles})



    let data = {pname: req.body.pname,image_name:`${reqFiles}`};
    console.log(data);
    let sql = "INSERT INTO recent SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//app api
//route for getting the Transaction history from users
//inserted data by users
app.post('/transaction',(req,res) => {
    let data = {user_email:req.body.user_email,transactionId:req.body.transactionId,transaction_status:req.body.transaction_status,payment_method:req.body.payment_method};
    console.log(data);
    let sql = "INSERT INTO transactions SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});



//route for insert into card
app.post('/address',(req,res) =>{
    let data = {fullname: req.body.fullname,lname:req.body.lname, email: req.body.email,phone: req.body.phone ,line:req.body.line,orderno:req.body.orderno,country:req.body.country,zip:req.body.zip,city:req.body.city};

  
    let sql =  "INSERT INTO address SET ?";
    let query =conn.query (sql,data,(err,results)=>{
        console.log(results)
           if(err){
            res.status(500).json({ status: "false"});
        }else{
            res.json(results);
        }
    });
});



//route for insert into card
app.post('/bill',(req,res) =>{
    let data = {fullname: req.body.fullname,lname:req.body.lname, email: req.body.email,phone: req.body.phone ,line:req.body.line,orderno:req.body.orderno,country:req.body.country,zip:req.body.zip,city:req.body.city};

  
    let sql =  "INSERT INTO bill SET ?";
    let query =conn.query (sql,data,(err,results)=>{
        console.log(results)
           if(err){
            res.status(500).json({ status: "false"});
        }else{
            res.json(results);
        }
    });
});


//route for insert into card
app.post('/acco',(req,res) =>{
    let data = {fullname: req.body.fullname,price:req.body.price,qty:req.body.qty,image_name:req.body.image_name,total:req.body.total,name:req.body.name};

  

    let sql =  "INSERT INTO account SET?";
    let query =conn.query (sql,data,(err,results)=>{
        console.log(results)
        if(err) throw err;
        
            res.json(results);
        
    });
});

//route for insert into card
app.post('/account',(req,res) =>{

   
    let data = {name:req.body.name,price:req.body.price,qty:req.body.qty,usname:req.body.usname,image_name:req.body.image_name,total:req.body.total};
 
  console.log(data)

    let sql =  "INSERT INTO acc Set ?";
    let query =conn.query (sql,data,(err,results)=>{
        console.log(results)
        if(err) throw err;
    
            res.json(results);
        
    });
});


//route for login page
app.post('/myaccount',(req, res)=>{

    let sql = "select * from register where fullname='"+req.body.fullname+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.json(results)
        });
});


//route for login page
app.post('/showmycard',(req, res)=>{

    let sql = "select * from acc where usname='"+req.body.fullname+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.json(results)
        });
});

//route for enquery 
app.get('/showcard',(req,res) =>{
    let sql ="SELECT * FROM acc";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for product update total
app.post('/tupdate',(req,res)=>{
    let sql ="UPDATE card SET total='"+req.body.total+"',discount='"+req.body.discount+"' WHERE fullname='"+req.body.fullname+"'";
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
    });


});

//route for product update inventery
app.post('/invenupd',(req,res)=>{
    let sql ="UPDATE products SET inventery = inventery - '"+req.body.qty+"'  WHERE name='"+req.body.name+"'";
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
    });


});

//route for product update increase value
app.post('/updatein',(req,res)=>{
    let sql ="UPDATE card SET qty = qty+1 WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
    });

    
});

app.get('/upindate/:data',function(req,res){
    const name=req.params.data;
    console.log(name);
    
    let sql ="UPDATE card SET qty = qty+1 WHERE name='"+req.params.data+"'";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//route for product update decrease value
app.post('/updatede',(req,res)=>{
    let sql ="UPDATE card SET qty = qty-1 WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
    });


});


//route for select subcategories
app.post('/card',(req,res) =>{
    
    let sql ="select * from card where fullname='"+req.body.fullname+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
           console.log(results)
    });
});




//route for select single product
app.post('/itopp',(req,res) =>{
    
    let sql ="select * from products where id='"+req.body.id+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for get  product
app.post('/wiselct',(req,res) =>{
    
    let sql ="select * from products where name='"+req.body.name+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for get wishlist product
app.post('/selctwish',(req,res) =>{
    
    let sql ="select * from wish where email='"+req.body.name+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for get discount coupns 
app.post('/disc',(req,res) =>{
    
    let sql ="select * from coupns where code='"+req.body.code+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for add to cart
app.post('/addcar/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="insert into card values('"+req.body.customer_name+"',"+id+","+req.body.qty+")";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for insert into card 
app.post('/addcard',(req,res) =>{
    let data = {name: req.body.name, price: req.body.price,fullname: req.body.fullname ,qty:req.body.qty,image_name:req.body.image};

  console.log(data)
    let sql =  "INSERT INTO card SET ?";
    let query =conn.query (sql,data,(err,results)=>{
        console.log(results)
           if(err){
            res.status(500).json({ status: "false"});
        }else{
            res.json(results);
        }
    });
});


//route for select categories
app.post('/smcate',(req,res) =>{
    
    let sql ="select * from sub where categories='"+req.body.categories+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results) 

           if(err)throw err;
           res.json(results);
    });
});

//route for select products
app.post('/jix',(req,res) =>{
    
    let sql ="select * from products where categories='"+req.body.categories+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for select subcategories
app.post('/flexc',(req,res) =>{
    
    let sql ="select * from products where subcategories='"+req.body.subcategories+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
       
        
           res.json(results);
       




    });
});




//route for list categories
app.get('/showcate',(req,res) =>{
    let sql ="SELECT * FROM  catego;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});




//route for list products
app.get('/showproducts',(req,res) =>{
    let sql ="SELECT * FROM product ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for list best seller
app.get('/showseller',(req,res) =>{
    let sql ="SELECT * FROM products where arriv ='Best seller'";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for delete product
app.get('/productdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM card WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for delete product
app.post('/oiuyt',function(req,res){
    const id=req.body.id;
    console.log(id);
    
    let sql ="select *from acc WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for show card product
app.post('/deletewish',function(req,res){
    const email=req.body.email;
    console.log(email);
    
    let sql ="delete from wish WHERE email='"+req.body.email+"'";;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for show card product
app.post('/bfgjjc',function(req,res){
    const fullname=req.body.fullname;
    console.log(fullname);
    
    let sql ="select *from card WHERE fullname='"+req.body.fullname+"'";;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for delete product
app.get('/wishdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM wish WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//route for delete product
app.get('/orderdel/:username',function(req,res){
    const username=req.params.username;
    console.log(username);
    
    let sql ="DELETE FROM acc WHERE usname='"+req.params.username+"'";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

app.get('/cardop/:fullname',function(req,res){
    const fullname=req.params.fullname;
    console.log(fullname);
   
    let sql = "select * from card where fullname='"+req.params.fullname+"'";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

// search api
app.get('/searching/:key',function(req,res) {
    
    const name= (req.params.key);
    //console.log(name);
  
  let sql ="SELECT * FROM products WHERE name LIKE ?"
 let value ="%"+name+"%"
    //let sql = "select * from products where name ='"+req.params.key+"'" ;
    let query = conn.query(sql,[value],(err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//select products 
app.get('/Showproducts/:proname',function(req,res){
    const subcategories =req.params.proname;
    console.log(subcategories ); 
   
    let sql = "select * from products where subcategories ='"+req.params.proname+"'";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});
//route for product edit
app.get('/productedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM product WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for product update
app.post('/updatell',(req,res)=>{
    let sql ="UPDATE product SET name='"+req.body.name+"',price='"+req.body.price+"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/showproduct');
    });


});

//route for add to cart
app.get('/addcardjj/:id',function(req,res){
    const p_id=req.params.id;
    const customer_name=req.body.name;
    const qty=req.body.qty;

    console.log(id);
    
    let sql ="insert into card values("+customer_name+","+p_id+","+qty+")";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/showproduct');
        });
});



//route for login page
app.post('/userlog',(req, res)=>{

    let sql = "select * from register where email='"+req.body.email+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.status(500).json({ status: false});
        }else{
            res.status(200).json({  status: "success",data:results});
        }
        });
});


app.post('/sign',(req,res) => {
    let data = {fullname:req.body.name,email:req.body.email,password:req.body.password};
   
    console.log(data);
    let sql = "INSERT INTO register SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(results.length == 0){
            res.status(500).json({ status: false});
        }else{
            res.status(200).json({  status: "success",data});
        }
        });
});


//route for login page
app.post('/log',(req, res) => {
    let data = {email: req.body.email, password: req.body.password};
    console.log(data);
    let sql = "INSERT INTO login SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err){
            res.send('user is already exist')
        }else{
            res.json(results);
        }
        });
});



//route for select single product
app.post('/carqty',(req,res) =>{
    
    let sql ="select * from card where id='"+req.body.data+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for wish insert
app.post('/wishc',(req, res) => {
    let data = {email: req.body.email, price: req.body.price,image: req.body.image,name: req.body.name};
    console.log(data);
    let sql = "INSERT INTO wish SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
        });
});


//route for wish list
app.post('/wishlist',(req, res)=>{

    let sql = "select * from wish where email='"+req.body.email+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.json(results)
        });
});

//route for insert order 
app.post('/buyorder',(req, res) => {
    let data = {name:req.body.name,price:req.body.price,image_name:req.body.image,usname:req.body.fullname,qty:req.body.qty,total:req.body.total,discount:req.body.discount,orderno:req.body.orderno,colors:req.body.color};
    console.log(data);
    let sql = "INSERT INTO acc SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        });
});

// ------------------------email send-------------------- 

app.get("/api/sendforgotmail/:email",(req, res) => {
    try {
      const email = req.params.email;
      console.log(req.params);
    //   const result = passwordChangingMail(email);
    let sql = "select*from register where email='"+req.params.email+"'";
    
    let query = conn.query(sql,(err, results) => {
        console.log(results)
         if (results.length != 0) {
        res.status(200).json(true);
       
        
          var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "surbhigulhana3@gmail.com",
                pass: "myrzqwawoprowinm",// generated ethereal password
            },
          });
        
          // send mail with defined transport object
          var info =  transporter.sendMail({
            from: "surbhigulhana3@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world? we are here", // plain text body
             html:`<a href=https://shieldradr.com/Dyv/${email}`, // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        
  
        
     
          
        
        }else{
            res.status(200).json(false);
        }
    
     });
     
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      
        
     }     catch (err) {
         console.log(err);
          res.status(500).json(false);
     }
      });


  

//route for enquery 
app.post('/location',(req,res) =>{


    let sql ="UPDATE location SET lon='"+req.body.lon+"',lat='"+req.body.lat+"' WHERE id='"+req.body.id+"'";
  let data ="lon='"+req.body.lon+"',lat='"+req.body.lat+"'";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json({data});
         console.log(results);
    });

});

//route for insert data 
app.post('/ca',(req, res) => {
    let data = {categories: req.body.categories};
    console.log(data);
    let sql = "INSERT INTO catego SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for insert color 
app.post('/caores',(req, res) => {
    let data = {color: req.body.color};
    console.log(data);
    let sql = "INSERT INTO color SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for insert sub
app.post('/done',(req, res) => {
    let data = {categories: req.body.categories,subcategories:req.body.subcategories};
    console.log(data);
    let sql = "INSERT INTO sub SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for Add categories
app.use("/filename",express.static("./public/images"))
app.post('/Saveproduct',upload.array('filename',10),(req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({reqFiles})



    let data = {name: req.body.name, price: req.body.price,sale: req.body.sale,sku: req.body.sku,percentage: req.body.percentage, description: req.body.description,categories : req.body.categories,subcategories : req.body.sub,arriv:req.body.arriv,Inventery:req.body.Inventery,
        color: req.body.color,image_name:`${reqFiles}`};
    console.log(data);
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for list products on the bases of color
app.post('/prcolor',(req,res) =>{
    
    let sql ="select * from products where color='"+req.body.color+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list categories
app.get('/colores',(req,res) =>{
    let sql ="SELECT * FROM  color;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list categories
app.get('/showcate',(req,res) =>{
    let sql ="SELECT * FROM  catego;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for list sub and categories
app.get('/showsub',(req,res) =>{
    let sql ="SELECT * FROM  sub;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list products
app.get('/showproduct',(req,res) =>{
    let sql ="SELECT * FROM products ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for dropdown
app.get('/cate',(req,res) =>{
    let sql ="select id,sofa from second";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list dropdown
app.post('/jio',(req,res) =>{
    
    let sql ="select * from sub where categories='"+req.body.categories+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list dropdown
app.get('/chair',(req,res) =>{
    let sql ="select id,chair from second";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list users
app.get('/users',(req,res) =>{
    let sql ="SELECT * FROM register ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list users
app.get('/showimage',(req,res) =>{
    let sql ="SELECT * FROM shop ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for delete users
app.get('/deleteuser/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM register WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});
//route for delete product
app.get('/productdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM products WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});

//route for delete categoris
app.get('/deletecate/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM catego WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});

//route for delete sub
app.get('/deletesub/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM sub WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});


//route for arriv(best seller etc) 
app.post('/selld',(req, res)=>{

    let sql = "select * from products where arriv ='"+req.body.arriv +"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err) throw err;
        res.json(results)
        });
});


//route for product edit
app.get('/productedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM product WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for product update
app.post('/updates',(req,res)=>{
    let sql ="UPDATE product SET name='"+req.body.name+"',price='"+req.body.price+"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/showproduct');
    });


});

//route for Add categories
app.use("/filename",express.static("./public/images"))
app.post('/Savecate',upload.array('filename',1),(req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({reqFiles})



    let data = {categories: req.body.categories,image:`${reqFiles}`};
    console.log(data);
    let sql = "INSERT INTO shop SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for add to cart
app.get('/addcard/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="insert into card values('raman',"+id+",1)";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/showproduct');
        });
});



//route for login page
app.post('/userlog',(req, res)=>{

    let sql = "select * from login where email='"+req.body.email+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.status(500).json({ success: false});
        }else{
            res.status(200).json({ success: true });
        }
        });
});



//route for list orders
app.get('/ordershw',(req,res) =>{
    let sql ="SELECT * FROM  acc;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for update status disable
app.post('/pro/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status recived
app.post('/pen/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status disable
app.post('/proi/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status recived
app.post('/peni/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});


//route for insert Copupans
app.post('/coupns',(req, res) => {
    let data = {code: req.body.code,discount:req.body.discount,minprice:req.body.amount};
    console.log(data);
    let sql = "INSERT INTO coupns SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for products edit
app.get('/edi/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM products WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});



app.listen(4200,()=>{
    console.log(`express server running on 4200`);
});