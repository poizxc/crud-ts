import path from 'path';
import fs from 'fs';
import { Application } from 'express';
import logger from '../helpers/logger';
export default {
  init: (app: Application) => {
    const routePath = path.resolve(__dirname);
    fs.readdirSync(routePath).forEach(file => {
      if (file !== 'index.ts') {
        const fileWithoutExt = file.substr(0, file.indexOf('.'));
        const cleanPath = routePath + '/' + fileWithoutExt;
        const route = path.resolve(cleanPath);

        logger.info(`added routes for /${fileWithoutExt}`);

        app.use(`/${fileWithoutExt}`, require(route).default);
      }
    });
  },
};
