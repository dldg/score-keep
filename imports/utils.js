console.log('Log from /imports/utils.js');

export let greetUser = function () {
  return 'Hello user!';
};

export let name = 'Daniel Dahan';

let myDefault = 'Some default value';
export default myDefault;
// Another option:
//export default 'A default';
