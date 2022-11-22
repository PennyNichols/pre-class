"use strict";
const persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
    { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
    { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];
function isAdmin(person) {
    return person.type === "admin";
}
function isUser(person) {
    return person.type === "user";
}
function logPerson(person) {
    let jobInfo = "";
    if (isAdmin(person)) {
        jobInfo: person.role;
    }
    if (isUser(person)) {
        jobInfo = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${jobInfo}`);
}
logPerson(persons[0]);
logPerson(persons[1]);
console.log('Admins');
persons.filter(isAdmin).forEach(logPerson);
