"use strict";

var uniq = require('lodash.uniq');

var objUtils = {

  omitDeep: function (obj, key) {
    const keys = Object.keys(obj);
    const newObj = {};

    for (const i of keys) {
      if (i !== key) {
        const val = obj[i];
        if (Array.isArray(val)) {
          newObj[i] = objUtils.omitDeepArrayWalk(val, key);
        } else if (typeof val === 'object' && val !== null) {
          newObj[i] = objUtils.omitDeep(val, key);
        } else {
          newObj[i] = val;
        }
      }
    }
    return newObj;
  },

  omitDeepArrayWalk : function (arr, key) {
    return arr.map(function (val) {
      return Array.isArray(val) ? objUtils.omitDeepArrayWalk(val, key) : typeof val === 'object' ? objUtils.omitDeep(val, key) : val;
    });
  },

  flatten : function (arrayOfArrays) {
    return arrayOfArrays.reduce(function (a, b) {
      return a.concat(b);
    }, [])
  },

  getFirstFromSingleElementArray: function (array) {
    array = (typeof array !== 'undefined') ? array : [];
    return array.length === 1 ? array[0] : null
  },

  getAnyFromArray: function(array) {
    array = (typeof array !== 'undefined') ? array : [];
    return array.length > 0 ? array[0] : null;
  },

  getLastFromArrayOrObject: function(array) {
    array = (typeof array !== 'undefined') ? array : [];
    return array.length > 0 ? array[array.length - 1] : {};
  },

  getFirstFromSingleElementArrayNotNull: function(array) {
    array = (typeof array !== 'undefined') ? array : [];
    return array.length === 1 ? array[0] : {};
  },

  isEmptyOrNull: function(value) {
    return value == null || value.length === 0;
  },

  isNotEmptyOrNull: function(value) {
    return !(objUtils.isEmptyOrNull(value));
  },

  verifyIfString: function(string) {
    return string !== null && string !== undefined && typeof string === 'string';
  },

  isStringNotBlank: function(string) {
    return objUtils.isNotEmptyOrNull(string) && string.trim().length;
  },

  truncateString: function(string, max) {
    max = (typeof max !== 'undefined') ? max : 30;
    return string.substr(0, max - 1) + (string.length > max ? '...' : '');
  },

  removeDuplicates: function(myArr, prop) {
    const arrayOfKeys = myArr.map(function (mapObj) {
      return mapObj[prop];
    });
    return myArr.filter(function (obj, pos) {
      return arrayOfKeys.indexOf(obj[prop]) === pos;
    });
  },

  resolveObj: function(path, obj) {
    obj = (typeof obj !== 'undefined') ? obj : null;
    const newPath = path.split('.');
    let current = obj;
    while (newPath.length) {
      if (typeof current !== 'object' || current === null) {
        return null;
      }
      current = current[newPath.shift()];
    }
    return current;
  },

  concat: function(x, y) {
    return x.concat(y);
  },

  flatMap: function(f, xs) {
    return xs.map(f).reduce(objUtils.concat, []);
  },

  cleanArray : function (a) {
    return uniq(a.filter(n => n));
  }

};

module.exports = objUtils;