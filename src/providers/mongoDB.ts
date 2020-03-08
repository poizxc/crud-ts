import mongoose from 'mongoose';
import logger from '../helpers/logger';

type DbURI = {
  dbURI: string;
};
export default async ({ dbURI }: DbURI) => {
  const connect = async () => {
    try {
      await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
      logger.info(`Connected to DB : ${dbURI}`);
    } catch (error) {
      logger.error(`Error connecting to database: ${error}`);
      return process.exit(1);
    }
  };
  await connect();

  mongoose.connection.on('disconnected', connect);
};
