
export type User = {
  name: string,
  age: number,
  occupation: string,
};

type  Admin = {
  name: string;
  age: number;
  role: string;
}


type Person = User | Admin

export const users: Person[] = [
  {
    name: 'aaa',
    age: 25,
    occupation: 'chimney sweep'
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
]

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  // if ((person as Admin).role) {
  //   additionalInformation = (person as Admin).role;
  // } else if((<User>person).occupation) {
  //   additionalInformation = (<User>person).occupation;
  // } else {
  //   additionalInformation = '';
  // }
  if ('role' in person) {
    additionalInformation = (person as Admin).role;
  } 
  if('occupation' in person) {
    additionalInformation = (<User>person).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Users:");
users.forEach(logPerson);