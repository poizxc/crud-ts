import { Response, Request, NextFunction } from 'express';
import { v4 as uuid4 } from 'uuid';

export default (req: Request, res: Response, next: NextFunction) => {
    req.id = `${uuid4()}::${((req.headers["X-forwarded-for"] || "ip-empty") as string).split(",")[0]}`
    next()
}