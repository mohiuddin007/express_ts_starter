//external import
import cors from "cors";
import express from "express";

//internal import


//middleware
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

//db connection


//routes
app.get("/", (req: any, res: any)=> {
    res.send("Hello world!!")
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`)
})