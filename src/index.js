"use strict";
const persons = [
    { name: "Alice", job: 'Front-end Dev', age: 28 },
    { name: "Bob", job: 'Back-end Dev', age: 28 },
    { name: "Codiku", job: 'Full Stack Dev', age: 28 },
];
const formatedList = persons.map((person) => {
    return `<li>Name: ${person.name} - Job: ${person.job} - Age : ${person.age}</li>`;
});
const liListString = formatedList.join("");
document.getElementById("app").innerHTML = `<ul>${liListString}</ul>`;
console.log(formatedList);
