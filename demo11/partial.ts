interface Info {
  name: string,
  age: number,
  phone: string,
  email?: string
}

// 将选中的属性变为可选
type optionalType<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
/*
    等价于
    interface Info {
       name?: string,
       age?: number,
       phone: string,
       email?: string
    }
*/

const optionalInfo: optionalType<Info, 'name'| 'age'> = {
  phone: 'string'
}

// 将选中的属性除开的其他属性变为可选
type optionalType2<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
/*
    等价于
    interface Info {
       name: string,
       age: number,
       phone?: string,
       email?: string
    }
*/
const optionalInfo2: optionalType2<Info, 'name' | 'age'> = {
  name: '123',
  age: 123,
}