# Bootcamp-CoreCode 🚀

## Fourth week
### Week challenges (Tuesday)💻
1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read

2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1)
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

4. [Typescript union types](https://typescript-exercises.github.io/#exercise=2)
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
5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3)
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

6. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

7. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

> You can return to the index of week 4, [here](indexWeek4.md)