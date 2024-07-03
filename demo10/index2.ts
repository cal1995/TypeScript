
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>
}

const func: CreateArrayFunc<any> = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

func(3, 3)