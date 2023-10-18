
export {}
interface obj {
  name?: string | undefined;
  age?: number
}
const a: obj = {
  name: 'aaa',
  age: 11,
}
// const { name, age }: { name: any; age: any} = a;
const { name, age } = a;
console.log('name11:', name);
console.log('age11:', age)