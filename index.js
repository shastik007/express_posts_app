import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";
import router from './route.js'


const PORT  = 5000

const DB_URL = 'mongodb+srv://user:user@cluster0.bzxnpvg.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api',router)

app.post('/',async(req,res)=>{
    try {
        const {title,author,image,content} = req.body
        const post = await Post.create({title,author,image,content})
        res.send(JSON.stringify(post))
    } catch (error) {
        res.status(500).json(error)
    }
})

const startApp = async () => {
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT,()=>{
            console.log('server started in port ', PORT);
        })

    }catch(error){
      console.error(error)
    }
}

startApp()


