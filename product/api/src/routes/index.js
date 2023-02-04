import express  from "express";
import app from "../app.js";
import categories from "./categoriesRoutes.js";

const routes = (app) =>{
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Iniciando produtos"})
        app.use(
            express.json(),
            categories
        )
    });
}

export default routes;

