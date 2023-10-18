const arr: number[] = [1, 2, 3];
const arr2: Array<string> = ['1', '2', '3'];

const arr3: (string | number)[] = [1, '2'];

const arr4 = [1, true, 'aa', { name: '33'}, null, undefined, ['123']];
arr4[0] = 'a';