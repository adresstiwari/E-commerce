import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

// configure env
dotenv.config();

// connect database 
connectDB();
// rest object 
const app = express ()

// middelwares 
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/auth", authRoutes)

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to E-commerce app'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
});