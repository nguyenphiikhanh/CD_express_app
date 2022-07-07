import Express from "express";

const viewEngineConfig = (app) => {
    app.use(Express.static('./src/public'))
    app.set('view engine','ejs');
    app.set('views','./src/views');
}

export default viewEngineConfig;
