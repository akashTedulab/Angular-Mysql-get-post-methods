const express = require('express');
const app = express();
const con = require('./server');
const cors = require('cors');
const PORT = 5001;

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    con.query('select * from userdata', (err, result)=>{
        console.log(result)
        res.send(result);
    })
})

app.post('/', (req, res)=>{
    const data = req.body;
    con.query('insert into userdata SET ?', data, (err, result, field)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`)
})