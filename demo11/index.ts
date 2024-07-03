
interface Info {
  name: string,
  age: number,
  phone: string,
  email?: string,
}

// Omit   Omit类型可以从一个对象类型中 忽略某些属性 
type OmitType = Omit<Info, 'name' | 'age'>;
const omitInfo: OmitType = {
  phone: '123',
  email: '123'
}

// Pick   Pick类型可以从一个对象类型中 取出某些属性 
type PickType = Pick<Info, 'name'>
const pickInfo: PickType = {
  name: 'aaa'
}

// Partial    Partial类型可以快速把某个接口类型中定义的属性变成可选的 
type PartialType = Partial<Info>
/**
 *    interface Info {
 *        name?: string,
 *        age?: number,
 *        phone?: string,
 *        email?: string
 *    }
 */

// Required   Required可以将接口中的所有可选项变为必选项
type RequiredType = Required<Info>
/**
 *    interface Info {
 *        name: string,
 *        age: number,
 *        phone: string,
 *        email: string
 *    }
 */

 interface IArticle {
  title: string; // 文章标题
  content: string; // 文章内容
  author: string; // 作者
  date: string | Date | number; // 时间
}
 
// type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// 把某个接口指定的属性变为可选
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type OptionalType = Optional<IArticle, 'date'>
/**
 *    interface Info {
 *        title: string,
 *        content: string,
 *        author: string,
 *        date?: string | Date | number; // 时间
 *    }
 */
const article: Optional<IArticle, 'author'> = {
  author: 'auth',
  title: 'title',
  content: 'content',
  date: 'date'
}