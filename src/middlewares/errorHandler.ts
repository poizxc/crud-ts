import { Request, Response, NextFunction } from "express";
import logger from "../helpers/logger"
import notifier from "node-notifier";
import config from "../config/config"
import { StatusError } from "../helpers/Errors";

export default function (err: any, req: Request, res: Response, next: NextFunction) {

    logger.error(err.stack);

    if(err instanceof  StatusError){
        res.status(err.statusCode).send(err.userMessage)
    }else{
        res.sendStatus(500);
    }

    if (!config.isProduction) {
        notifier.notify({
            title: 'ERROR',
            message: `Occurred on ${req.method} ${req.originalUrl}`
        });
    }
}
