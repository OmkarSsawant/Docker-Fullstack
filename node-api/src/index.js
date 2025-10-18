const express = require('express')
const morgan = require('morgan')
const {getDBTime} = require('./db.js')
require('dotenv').config()

const app  =express();

app.use(morgan('tiny'))


app.get('/time',async (req,res)=> {
    res.setHeader('Access-Control-Allow-Origin','*')
    const time =await getDBTime();
    res.status(200).json({
        "from":"node",
        "time":time
    });
})

app.get('/ping',(req,res)=> {
    res.setHeader('Access-Control-Allow-Origin','*')

    res.status(200).json({
        "message":"pong"
    })
})

const s = app.listen(process.env.PORT || 3000,'0.0.0.0',(err)=> {
    if(err){
        console.error(err);
    }else{
        console.log(`Listening on http://localhost:${process.env.PORT}/`);
        
    }
})

console.log(s.address());
