const express = require('express')
const app = express();

const cors = require("cors");
require("dotenv").config();

// const { connectDB } = require('./config/db');
// const { userRouter } = require('./routes/userRoute');


const connectDB = require("./config/db");
connectDB();

app.use(express.json);
app.use(cors());

/// routes to be defined
app.use('/api/auth',  require('./routes/authRoutes') )
// app.use('/api/admin')
// app.use('/api/student')
// app.use('/api/trainer')


// app.get('/', (req,res) => {
//     res.send({message:"Server started"})
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is started")
})