import Joi from '@hapi/joi';
import { Response, Request, NextFunction } from 'express';
import error from '../helpers/Errors';
interface ValidationSchema {
  body?: any;
  query?: any;
}

export default (schema: ValidationSchema) => (req: Request, res: Response, next: NextFunction) => {
  const JoiSchema = Joi.object(schema);
  //TODO think about rewriting it
  const requestToValidate = { body: req.body, query: req.query };
  Object.entries(req.query).length === 0 && delete requestToValidate.query;
  Object.entries(req.body).length === 0 && delete requestToValidate.body;
  const result = JoiSchema.validate(requestToValidate);
  result.error ? next(error.badRequest(result.error.details[0].message)) : next();
};
