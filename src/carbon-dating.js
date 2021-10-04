import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const parse = parseFloat(sampleActivity);

  if (parse>15 || parse<=0 || !sampleActivity || typeof sampleActivity!= 'string'||arguments.length ===0||isNaN(parse))
    return false;

  let a = 0.693 /HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY /parse) / a);

  return age;
}
