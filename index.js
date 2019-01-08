const createEnum = function () {
  if (!arguments || arguments.length === 0) {
    throw new Error("An enum must include at least one value");
  }
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    let item = arguments[i];
    if (typeof item !== 'string' || item.length === 0) {
      throw new TypeError("The arguments of createEnum must be non-zero length strings.")
    }
    if (!obj[item]) {
      Object.defineProperty(obj, item, {
        value: item,
        writable: false,
        enumerable: true,
        configurable: false
      });
    }
  }
  Object.freeze(obj);
  return obj;
};

module.exports = createEnum;