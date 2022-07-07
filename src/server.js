import express from 'express';
import viewEngineConfig from './configs/viewEngine';
const port = 8080;
const app = express();

viewEngineConfig(app);
app.get('/',(req, res)=>{ 
    res.render('index.ejs');
});
app.listen(port,()=>{
    console.log(`Express app is running in port ${port}`);
});