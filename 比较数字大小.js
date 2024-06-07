// 需求:用户输入两个数字,并通过三元运算符比较大小
// 获取比较值
let $num1 = +prompt('输入比较值一')
let $num2 = +prompt('输入比较值二')
// 计算并返回结果
$num1 > $num2 ? document.write(`<h1>${$num1}是最大的值</h1>`) : document.write(`<h1>${$num2}是最大的值</h1>`)