import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

  if (date === undefined )
    return 'Unable to determine the time of year!';
  
  if (date.toString !== new Date().toString) 
    throw new Error("Invalid date!");
 
  const springDate = new Date(date);
  let a = springDate.getMonth();

  if (a === 11  || a === 0 || a === 1 ) 
    return 'winter';

  if (a >= 2  & a <= 4) 
    return 'spring';

  if (a >= 5  & a <= 7) 
    return 'summer';
  
  if (a >= 8  & a <= 10) 
    return 'autumn';
}
