const arr: number[] = [1, 2, 3];

const arr2: Array<string> = ['1', '2', '3'];  // 泛型

const arr3: (string | number)[] = [1, '2'];   // 联合类型

const arr4 = [1, true, 'aa', { name: '33'}, null, undefined, ['123']];

arr4[0] = 'a';


// 用接口interface表示数组
interface NumberArray {
  [x: number] : number
}

/**
 * NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组。
 */
const arr5: NumberArray = [1, 2, 3, 4, 5,]


