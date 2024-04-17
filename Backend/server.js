const express = require('express');
const mysql=require('mysql');
const cors = require('cors');
const path = require('path');


const app = express()
app.use(cors())

const db= mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'shopping_web'
});

// Define a route to serve images
app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    // Assuming your images are stored in the public/images directory
    const imagePath = path.join(__dirname, 'public', 'images', imageName);
    res.sendFile(imagePath);
});

app.get('/',(re, res)=>{
    return res.json("From Backend...");
})

app.get('/product',(req, res)=>{
    const sql= "SELECT * FROM product";
    db.query(sql,(err, data)=>{
        //if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8081, ()=>{
    console.log("listening");
})