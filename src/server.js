import express from 'express';
import viewEngineConfig from './configs/viewEngine';
import initRoute from "./routes/web";

require('dotenv').config();

const port = process.env.APP_PORT || 8000;
const app = express();

viewEngineConfig(app);
initRoute(app);
app.listen(port,()=>{
    console.log(`Express app is running in port ${port}`);
});
