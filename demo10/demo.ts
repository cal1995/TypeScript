interface User {
  id: number,
  kind: string
}

// 错误原因 extends的含义是类型约束，T受到User的约束，必须包含User中规定的类型，但是不局限于User类型，也就是说 T 的类型也许会更广泛，所以返回时，多余类型没有处理已导致报错。解决方案就是处理好多余的类型
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     kind: 'customer'
//   }
// }

// 第一种
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  }
}

// 第二种 返回类型改为 User 类型

function makeCustomer2<T extends User>(u: T): User {
  return {
    id: u.id,
    kind: 'customer'
  }
}

