'use strict';

const { freeze, getOwnPropertyNames } = Object;

const deepFreeze = (...objects) => {
  objects.forEach(obj => {
    getOwnPropertyNames(obj).forEach(name => {
      const prop = obj[name];
      if (typeof prop === "object" && prop !== null) {
        deepFreeze(prop);
      }
    });

    freeze(obj);
  });
};

export default deepFreeze;
