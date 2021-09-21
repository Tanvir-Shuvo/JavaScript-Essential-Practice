/**
 * create a new object used by Dailyroutine class
 */

// eslint-disable-next-line import/extensions
import DailyRoutine from './dailyroutine.js'; // importing the Dailyroutine classs

/** pram example: rise, shower, breakfast, emailCheck, workStart, projectA, projectB, lunchTime,
workDone, refreshment, dinner, familyTime, sleep
*/
// myDayroutine object create

const myDayroutine = new DailyRoutine(
    '17 January, 1991 27:00:00 GMT+6',
    5,
    'yes',
    8,
    9,
    10,
    'Meeting with client',
    'Meeting with emplyee',
    '2.30pm - 3.30pm',
    6,
    'Outing',
    9,
    true,
    11
);

console.log('The myDailyroutine object:', myDayroutine);
console.log('The project schedule:', myDayroutine.projects);

myDayroutine.projectChange('Team Meeting', 'Project Brief');
console.log('The projects New schedule:', myDayroutine.projects);
