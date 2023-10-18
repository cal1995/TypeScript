function sayHello(person) {
    return 'Hello ' + person;
}
var user = 'AAA';
console.log(sayHello(user));

// 执行 tsc demo01.ts  会生成一个demo01.js

/**
 * 在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以。
 * 
 *  上述例子中，我们用 : 指定 person 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。
 * 
 *  这是因为 TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。
 * 
 * 
 *  TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
 * 
 *  如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。关于 tsconfig.json，请参阅官方手册（中文版）
 * 
 *  https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html
 */