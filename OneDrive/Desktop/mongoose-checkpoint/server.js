// import part

const connectDB = require("./config/connectDB");

express=require("express");
//****************************************************************** */

app=express();
require('dotenv').config();
//******************************************** */

// call functions which connect with the database

connectDB();

app.use(express.json());
//*********************** */
app.use("/api/contact",require("./router/contact"))



/**************************************** */
// port

const PORT= process.env.PORT 

// create server
app.listen(PORT,(err)=>{ err? console.log(err) : console.log("server is running", PORT)

});