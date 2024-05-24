

const obj = {};

obj[obj['a'] = 0] = 'a';

 console.log(obj)

 console.log(obj['a'], obj[0])

 obj[b = 1] = 'b'