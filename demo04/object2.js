function func(config) {
    var name = config.name, age = config.age;
    console.log('name:', name);
    console.log('age:', age);
}
// func({ name: 'a', age: 2})
function func2(_a) {
    var _b = _a.name, name = _b === void 0 ? 'aaa' : _b, _c = _a.age, age = _c === void 0 ? 21 : _c;
    console.log('name:', name);
    console.log('age:', age);
}
func2({});
