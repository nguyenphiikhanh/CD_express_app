const express = require('express');

const port = 8080;
const app = express();

app.get('/',(req, res)=>{ 
    res.send("Oi gioi oi");
});

app.listen(port,()=>{
    console.log(`Express app is running in port ${port}`);
});