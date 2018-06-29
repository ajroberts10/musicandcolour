import express from 'express';
import contactController from '../controllers/contactController';

const contactRouter = express.Router();

contactRouter.route('/').get(contactController.getIndex);

contactRouter.route('/').post(contactController.submitForm);

module.exports = contactRouter;
