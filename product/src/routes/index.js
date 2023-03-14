/* eslint-disable linebreak-style */

import express from 'express';
// eslint-disable-next-line import/no-cycle, no-unused-vars
import app from '../app.js';
import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';

const routes = (application) => {
  application.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
