const express = require("express");
const {connectDB} = require("./connectDB/db.js");
const Routes = require('./Routes/data.js')
const dotenv = require('dotenv');
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use('/api/data', Routes);



app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT}`);
})

