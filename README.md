# typescript-section2-"Arrays, OOP, Interfaces"

### Arrays

To indicate that a variable is an array type in typescript you indicate the type and then add "[]" after to indicate that is an array of whatever type you told it.

In this lesson, persons is an array of objects:

```javascript
const persons:{}[] = [{...}]
```

But anything can be added to show that it is an "something" array:

const traxigon: number[] const traxigon: string[] const traxigon: booleen[]

Back to Persons Array, we indicate that the objects that make up the array should be constructed like so:

const persons:{name: string job: string age: number}[]

#### Line 19

In the line:

```javascript
document.getElementById("app")!.innerHTML=<ul>${liListString}</ul>
```

"!" is used to indicate that the document.getElementById('app') should not return as Null or undefined. For reasons, typescript shows that when retrieving that element, it can either return as HTML or as Null.

! is used to add your opinion to the code, and indicate that this thing should be null.

### Interfaces

Interfaces in Typescript are used to create custom Types. In our persons example, a person in the persons object array is:

```javascript
{ name: string job: string age: number }
```

We use an interface to create a type so that we don't need to continually copy and paste that a person has a name, job, and age. Like so:

```typescript
interface Person {
  name: string
  job: string
  age: number
  isHappy?: boolean
  // We can even add an array inside the interface - the one below expects our Person typed array
  friendList?: Person[]
  // Functions can be added as well.
  sayHi?: () => void
}

const persons: Person[] = [
  { name: 'Alice', job: 'Front-end Dev', age: 28 },
  { name: 'Bob', job: 'Back-end Dev', age: 28 },
  { name: 'Codiku', job: 'Full Stack Dev', age: 28 }
]
```
