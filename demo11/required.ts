interface Info2 {
  name?: string,
  age?: number,
  phone: string,
  email?: string
}

// 将选中的属性变为必填
type requiredType<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
/*
    等价于
    interface Info {
       name?: string,
       age?: number,
       phone: string,
       email?: string
    }
*/
const requiredInfo: requiredType<Info2, 'name' | 'age'> = {
  name: 'string',
  age: 123,
  phone: 'string'
}

// 将选中的属性除开的其他属性变为必填
type requiredType2<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>
/*
    等价于
    interface Info {
       name: string,
       age: number,
       phone: string,
       email: string
    }
*/
const requiredInfo2: requiredType2<Info2, 'phone'> = {
  name: 'string',
  age: 213,
  phone: 'string',
  email: 'string'
}