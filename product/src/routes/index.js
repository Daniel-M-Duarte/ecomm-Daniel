import express  from "express";
import app from "../app.js"
import categories from "./categoriesRoutes.js";
import products from "./productsRoutes.js"


const routes = (app) =>{
    app.use(
        express.json(),
        categories, 
        products
    )
}

export default routes;

