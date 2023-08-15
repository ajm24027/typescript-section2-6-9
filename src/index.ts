interface Person {
  name: string
  job: string
  age: number
}

const persons: Person[] = [
    {name: "Alice", job: 'Front-end Dev', age: 28},
    {name: "Bob", job: 'Back-end Dev', age: 28},
    {name: "Codiku", job: 'Full Stack Dev', age: 28},
  ]

// const persons:{name: string
// job: string
// age: number}[] = [
//   {name: "Alice", job: 'Front-end Dev', age: 28},
//   {name: "Bob", job: 'Back-end Dev', age: 28},
//   {name: "Codiku", job: 'Full Stack Dev', age: 28},
// ]

const formatedList : string[] = persons.map((person:{
  name: string
  job: string
  age: number}
  ) : string=>{
  return `<li>Name: ${person.name} - Job: ${person.job} - Age : ${person.age}</li>`
})

const liListString : string = formatedList.join("")

document.getElementById("app")!.innerHTML=`<ul>${liListString}</ul>`

console.log(formatedList)