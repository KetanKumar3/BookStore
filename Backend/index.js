import express from 'express'
const app= express()
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

app.use(cors())
app.use(express.json())


try {
    mongoose.connect("mongodb://127.0.0.1:27017/bookstores")
    console.log("mongodb connected")
} catch (error) {
    console.log("error ",error)
}


app.use('/book',bookRoute)
app.use('/user',userRoute)

if(process.env.NODE_ENV === "production"){
    const dirPath=path.resolve()
    app.use(express.static('./Frontend/dist'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"))
    })
}

app.listen(4200,()=>{
    console.log("successfully run")
})