# Bootcamp-CoreCode 🚀

## Fourth week
### Week challenges (Tuesday)💻
1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read

2. Typescript object type [Exercise 2](https://typescript-exercises.github.io/#exercise=1)
```typescript
export interface User {
    name: string; age: number; occupation: string
    };

export const users: User[] =[
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```
3. Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)

4. Typescript union types [Exercise 4](https://typescript-exercises.github.io/#exercise=2)
```typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```
5. Typescript in operator [Exercise 5](https://typescript-exercises.github.io/#exercise=3)
```typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person : Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```

6. Find the odd int [Exercise 6](https://www.codewars.com/kata/54da5a58ea159efa38000836)
```javascript
function findOdd(A) {
var result, num = 0;

  A = A.sort();

  for (var i = 0; i < A.length; i++) {
    if (A[i] === A[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = A[i];
        break;
      }
    }
  }
  return result;
}
```

7. Stop gninnipS My sdroW! [Exercise 7](https://www.codewars.com/kata/5264d2b162488dc400000001)
```javascript
 function spinWords(string){
   let theWord = string.match(/\b\w{5,}\b/g);
   let reverseString;

   for(var i=0; i < theWord.length; i++){
       reverseString= theWord[i].toString().split('').reverse().join('');
       string = string.replace(theWord[i], reverseString);
     }
   return string;
}
```


> You can return to the index of week 4, [here](indexWeek4.md)