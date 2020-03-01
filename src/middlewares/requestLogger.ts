import { Request, Response, NextFunction } from 'express';
import logger from '../helpers/logger';
export default (req: Request, res: Response, next: NextFunction) => {
  logger.info(`
    id=[${req.id}]
    method=${req.method}
    startTime=[${req.time.toUTCString()}]
    originalUrl=${req.originalUrl}
    referer=${req.headers['referer']}
    user-agent=${req.headers['user-agent']}`);

  res.on('finish', () => {
    logger.info(`
        id=[${req.id}]
        statusCode=${res.statusCode}
        statusMessage=${res.statusMessage}
        processTime=${Date.now() - req.time.getTime()}
        ${res.get('Content-Length') || 0}b sent`);
  });

  next();
};
