import Joi from "@hapi/joi"
import { Response, Request, NextFunction } from 'express';
import error from "../helpers/Errors"
interface ValidationSchema {
    body?: any;
    query?: any;
}

export default (schema: ValidationSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const JoiSchema = Joi.object(schema);
        const result = JoiSchema.validate({ body: req.body, query: req.query });
        result.error ? next(error.badRequest(result.error.details[0].message)) : next();
    }

