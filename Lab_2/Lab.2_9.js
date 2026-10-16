'use strict'
const phoneBook = [
{ name: 'Marcus Aurelius', phone: '+380445554433'},
{ name: ' Julius Ceaser', phone:'+380445554434'},
];

const findPhoneByName = (name) => {
    for(const item of phoneBook) {
        if (item.name ===name) return item.phone;

    }
};
console.dir (findPhoneByName('Marcus Aurelius'));