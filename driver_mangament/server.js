require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT
const Company = require('./models/company');
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/companies', {useNewUrlParser: true })
.then(()=>{
    console.log("mongoose is running "),
    (err) => console.log(err)
})
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

//homepage
app.get('/company', (req, res )=>{
Company.find()
.then( (companies)=>{
    res.render('index.ejs', {companies})
})
.catch( err => console.log(err))
})

// INDEX 
app.get('/company/index', (req, res)=>{
    res.render('index.ejs')
    
})

// NEW
app.get('/companies/new', (req, res )=>{
res.render('new.ejs');
})

//CREATE
app.post('/company', (req, res)=>{
    let data= {
        name: req.body.name,
        logo:req.body.logo
    }

    let compaany = new Company(data)
    compaany.save()
    .then(()=>{
        res.redirect('/company')
        .catch(err=> console.log(err))
    })

    
    })

//SHOW 
app.get('/company/:id',(req,res)=>{
res.render('show.ejs', {
  company: companies[req.params.id] } 
    )
})


app.listen(PORT, ()=>{
    console.log(`its running fine on ${PORT}`);
})