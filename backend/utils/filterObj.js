exports.filterObject = (obj, ...allowedFields) => {
  if (!obj) return {};
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};
