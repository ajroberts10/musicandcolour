import express from 'express';
import homeController from '../controllers/homeController';

const homeRouter = express.Router();

homeRouter.route('/').get(homeController.getIndex);

module.exports = homeRouter;
