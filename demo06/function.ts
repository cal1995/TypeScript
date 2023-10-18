function fn1(a: number, b: number): number {
  return a + b
}

const fn2 = (a: number, b: number): number => {
  return a + b
}

// 参数可选
const fn3 = (a?: string, b?: string): string => {
  return `${a} + ${b}`
}

fn3('a')