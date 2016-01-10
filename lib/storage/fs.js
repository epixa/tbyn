import { readFile, writeFile } from 'fs';
import { promisify } from 'bluebird';
import { deserialize, serialize } from './serializer';

const readFileFromFs = promisify(readFile);
const writeFileToFs = promisify(writeFile);

/**
 * Loads a JS object from file system
 * @param {String} path
 * @returns {Promise}
 */
export function load(path) {
  return readFileFromFs(path).then(deserialize);
}

/**
 * Saves a JS object to the file system
 * @param {String} path
 * @param {Object} obj
 * @returns {Promise}
 */
export function save(path, obj) {
  return writeFileToFs(path, serialize(obj));
}
