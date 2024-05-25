import express from "express";
import usermodel from "./mongodb/model/user.js"
import path from 'path'
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(path.resolve(), 'public')))
app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/login',(req, res)=>{
    res.render('login')
})



app.post('/register',async(req, res)=>{
    const createuser = await usermodel.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    res.redirect('/')
})
app.post('/login',async(req,res)=>{
    let email =  req.body.email;
    let password = req.body.password

    let uservalue = await usermodel.findOne({email});

    if(!uservalue){
       return res.redirect('/')
    }

    const ismatch = password === uservalue.password
    if(!ismatch){
        return res.send('password is not matched');
    }

    res.render('userinfo' , {email,name:uservalue.name})
})

app.listen(5000,()=>{
    console.log('server is running on the port'+5000)
})