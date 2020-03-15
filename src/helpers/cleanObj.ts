export default (obj: object) =>
  Object.keys(obj).reduce((acc, k) => {
    if (typeof obj[k] === 'undefined') return acc;
    acc[k] = obj[k];
    return acc;
  }, {});
