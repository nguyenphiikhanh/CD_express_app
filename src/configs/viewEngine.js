import Express from "express";

const viewEngineConfig = (app) => {
    app.set('view engine','ejs');
    app.set('views','./src/views');
}

export default viewEngineConfig;