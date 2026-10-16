'use strict';
const fn =() => {
    const obj1 = { name: 'Marcus'};
    let obj2 = { name: 'Marcus'};

obj1.name = 'Julius';
obj2.name = 'Julius';

// obj1 = { name: 'Nero' }; // Error: can't reassign a const
obj2 = {name: 'Nero'};

return {obj1, obj2};
};