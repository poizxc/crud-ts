import { Request, Response, NextFunction } from 'express';

const asyncRoute = fn => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncRoute;
