import express from "express";
import homeController from "../app/Https/Controllers/HomeController";

const router = express.Router();

const initRoute = (app) => {
    app.get('/',homeController.getHomePage);

    return app.use('/',router);
}

export default initRoute;
