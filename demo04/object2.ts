function func(config: { 
  name: 'a' | 'b';
  age: number;
}): void
{
  const { name, age } = config;
  console.log('name:', name);
  console.log('age:', age);
}

// func({ name: 'a', age: 2})

function func2({ name = 'aaa', age = 21}: { name?: string, age?: number}): void {
  console.log('name:', name);
  console.log('age:', age);
}
// func2({})

interface params {
  name?: string;
  age?: number;
}

function func3({ name = '123', age = 21}: params) {
  console.log('name:', name);
  console.log('age:', age);
}
func3({})