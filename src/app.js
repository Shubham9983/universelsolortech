require('dotenv').config();
const express = require("express");
const path = require("path");
const hbs =require("hbs");

const app = express();
const port =process.env.PORT || 9191;
const mongoose = require("mongoose");

// setting the path
const staticpath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const  partials_path = path.join(__dirname,"../templates/partials");

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

//Router
//app.get(path,callback)

app.get("/" ,(req, res) =>{
    res.render("index");
});
// app.get("/contact" ,(req, res) =>{
//     res.render("contact");
// });

// app.post("/contact", async (req, res) =>{
//     try {
//        // res.send(req.body);
//        const userData = new User(req.body);
//        await userData.save();
//        res.status(201).render("index");
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })


// server create
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})