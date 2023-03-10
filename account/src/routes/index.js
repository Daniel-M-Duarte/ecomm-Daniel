import express from 'express';
// eslint-disable-next-line import/extensions
import accounts from './accountsRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    accounts,
  );
};

export default routes;
