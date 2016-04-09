'use strict';

const { freeze, getOwnPropertyNames } = Object;

const deepFreeze = (...objects) => {
  objects.forEach(obj => {
    if (!isObject(obj)) return;

    getOwnPropertyNames(obj).forEach(name => {
      const prop = obj[name];
      if (isObject(prop)) deepFreeze(prop);
    });

    freeze(obj);
  });
};

function isObject(val) {
  return typeof val === "object" && val !== null;
}

export default deepFreeze;
