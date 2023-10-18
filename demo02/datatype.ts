/**
 * 数据类型
 *    JavaScript 的数据类型分为两种 原始数据类型(primitive data types) 和 对象类型(Object types)
 * 
 *    原始数据类型包括: string、number、 boolean、null、undefined 以及ES6 中的新类型 symbol 和 ES10中的 BigInt
 */

// 布尔值
let isDone: boolean = false;
// 编译通过

// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
let createdByNewBoolean: boolean = new Boolean(1);  //  new Boolean() 返回的是一个 Boolean 对象：
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.



// 数值
// 使用number定义数值类型

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 编译结果
// var decLiteral = 6;
// var hexLiteral = 0xf00d;
// // ES6 中的二进制表示法
// var binaryLiteral = 10;
// // ES6 中的八进制表示法
// var octalLiteral = 484;
// var notANumber = NaN;
// var infinityNumber = Infinity;



// 字符串
let myName: string = 'Tom';
let myAge: number = 18;

// 模板字符串
let sentence: string = `Hello, ${myName}`



/**
 * 空值 (Void)
 *    JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
 * 
 *    声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null（只在 --strictNullChecks 未指定时）
 */

function alertName(): void {
  alert('My name is Tom');
}



// Null 和 undefined

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

let u: undefined = undefined;
let n: null = null;

//  与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
let num: number = undefined;

// 这样也不会报错
// let u: undefined;
// let num: number = u;


// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u: void;
// let num: number = u;

// Type 'void' is not assignable to type 'number'.
