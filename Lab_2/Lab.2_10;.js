'use strict';
const hash = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
};

const findPhoneByName = (name) => hash[name];
console.dir(findPhoneByName('Marcus Aurelius'));