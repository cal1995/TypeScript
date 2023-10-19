"use strict";
exports.__esModule = true;
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: 'aaa',
        age: 25,
        occupation: 'chimney sweep'
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
