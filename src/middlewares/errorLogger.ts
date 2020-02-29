import { Request, Response, NextFunction } from "express";
import logger from "../helpers/logger"
import notifier from "node-notifier";
import config from "../config/config"

export default function (err: any, req: Request, res: Response, next: NextFunction) {

    if (!config.isProduction) {
        notifier.notify({
            title: 'ERROR',
            message: `Occurred on ${req.method} ${req.originalUrl}`
        });
    }
    logger.error(err.stack);
    //TODO handle response
}
