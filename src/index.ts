import express from "express";
import cors from "cors";
import 'dotenv/config';

//logical imports
import init from "./services/init.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health',async (req,res)=>{
    try{
        return res.status(200).json({
            message:'works'
        })
    }
    catch(err){
        console.log(err);
        throw new Error(String(err))
    }
})

const PORT = parseInt(process.env.PORT as string) || 3001 ;

app.listen(PORT , ()=>{
    console.log('server listens on http://localhost:'+PORT);
    init()
})