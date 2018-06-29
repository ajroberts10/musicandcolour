import express from 'express';
import liveController from '../controllers/liveController';

const liveRouter = express.Router();

liveRouter.route('/')
    .get(liveController.getIndex);

module.exports = liveRouter;
