const express = require('express')
const userRouter = require('./routes/user.routes')

const app = express()

app.set('view engine', 'ejs')

// Serve static assets from public/
app.use(express.static('public'))

// app.get('/',(req , res)=>{
//     res.render("index")
// })

app.use('/user',userRouter)

app.listen(3000, ()=>{
    console.log("The server is running at http://localhost:3000")
})