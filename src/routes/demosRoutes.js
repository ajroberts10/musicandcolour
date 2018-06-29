import express from 'express';
import demosController from '../controllers/demosController';

const demosRouter = express.Router();

demosRouter.route('/')
    .get(demosController.getIndex);


module.exports = demosRouter;
