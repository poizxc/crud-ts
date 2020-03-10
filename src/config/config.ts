export default {
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  mongoDbURI: 'mongodb://127.0.0.1:27017/ts_crud',
};
