import { Router, Request, Response } from 'express';
import asyncRoute from '../middlewares/asyncRoute';

const tasksRouter = Router();

tasksRouter.get(
  '/',
  asyncRoute((req: Request, res: Response) => {
    res.send('');
  }),
);

tasksRouter.post(
  '/',
  asyncRoute((req: Request, res: Response) => {
    res.send('');
  }),
);

tasksRouter.put(
  '/:id',
  asyncRoute((req: Request, res: Response) => {
    res.send('');
  }),
);

tasksRouter.delete(
  '/:id',
  asyncRoute((req: Request, res: Response) => {
    res.send('');
  }),
);

export default tasksRouter;
