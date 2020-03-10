import { Router, Request, Response } from 'express';
import asyncRoute from '../middlewares/asyncRoute';
import TaskModel from '../models/Task.model';
import requestValidator from '../middlewares/requestValidator';
import Joi from '@hapi/joi';
import errors from '../helpers/Errors';
const tasksRouter = Router();

tasksRouter.get(
  '/',
  asyncRoute(async (req: Request, res: Response) => {
    res.send(await TaskModel.find());
  }),
);

tasksRouter.get(
  '/:id([a-f\\d]{24})',
  asyncRoute(async (req: Request, res: Response) => {
    const resDb = await TaskModel.findOne({ _id: req.params.id });
    if (!resDb) {
      throw errors.notFound();
    }
    res.send(resDb);
  }),
);
tasksRouter.post(
  '/',
  requestValidator({
    body: {
      title: Joi.string().required(),
      description: Joi.string()
        .allow('')
        .required(),
      status: Joi.string().required(),
      category: Joi.string().required(),
    },
  }),
  asyncRoute(async (req: Request, res: Response) => {
    const { title, description, status, category } = req.body;
    const task = new TaskModel({ title, description, status, category });

    res.status(201).send(await task.save(task));
  }),
);

tasksRouter.delete(
  '/:id([a-f\\d]{24})',
  asyncRoute(async (req: Request, res: Response) => {
    const dbRes = await TaskModel.deleteOne({ _id: req.params.id });
    if (dbRes.deletedCount === 0) {
      throw errors.notFound();
    }
    res.status(200).send('resource deleted successfully');
  }),
);
//TODO write put and patch
export default tasksRouter;
