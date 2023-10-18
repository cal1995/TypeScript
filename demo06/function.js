function fn1(a, b) {
    return a + b;
}
var fn2 = function (a, b) {
    return a + b;
};
// 参数可选
var fn3 = function (a, b) {
    return "".concat(a, " + ").concat(b);
};
fn3('a');
