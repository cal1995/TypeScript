/**
 * 泛型
 * 
 *    泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * 
 */

function createArray(length: number, value: any): Array<any> {
  let result: any[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result
}

console.log(createArray(3, 'xx'))


function createArray2<T>(length: number, value: T): Array<T> {
  let result: any[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result
}

// 定义泛型的时候 可以一次定义多个参数

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

function swap2(list: [string, number]): [number, string] {
  return [list[1], list[0]]
}

// 泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

interface LengthWise {
  length: number,
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}
