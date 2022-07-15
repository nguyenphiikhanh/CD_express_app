import express from 'express';
import viewEngineConfig from './configs/viewEngine';
require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

viewEngineConfig(app);
app.get('/',(req, res)=>{
    res.render('index.ejs');
});
app.listen(port,()=>{
    console.log(`Express app is running in port ${port}`);
});


// This line to test merge and rebase
