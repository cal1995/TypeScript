/**
 * 任意值（Any）用来表示允许赋值为任意类型
 */

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 但如果是 any 类型，则允许被赋值为任意类型。
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 任意值的属性和方法

let any: any = 'hello';
console.log(any.myName);
console.log(any.myName.firstName);

// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');