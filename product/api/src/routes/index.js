import express  from "express";
import app from "../app.js";
import categories from "./categoriesRoutes.js";

const routes = (app) =>{
    app.use(
        express.json(),
        categories
    )
}

export default routes;

