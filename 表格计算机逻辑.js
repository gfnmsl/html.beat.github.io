// 逻辑:弹出警示框,提醒用户输入运算值一和运算值二,并选择算法(+ - * / %),将结果输出到网页中
let $num1 = +prompt('输入计算值一')
let $num2 = +prompt('输入计算值二')
let $choose = prompt('选择要进行的算法(加法+ , 减法- ,乘法* , 除法/ , 取余%)')
switch ($choose) {

  case '+':
    document.write(`
  <table>
  <tr>
    <th>运算值一</th>
    <th>运算值二</th>
    <th>算法</th>
    <th>结果</th>
  </tr>
  <tr>
    <td>${$num1}</td>
    <td>${$num2}</td>
    <td>${$choose}</td>
    <td>${$num1 + $num2}</td>
  </tr>
  </table>
    `)
    break;

  case '-':
    document.write(`
  <table>
  <tr>
    <th>运算值一</th>
    <th>运算值二</th>
    <th>算法</th>
    <th>结果</th>
  </tr>
  <tr>
    <td>${$num1}</td>
    <td>${$num2}</td>
    <td>${$choose}</td>
    <td>${$num1 - $num2}</td>
  </tr>
  </table>
    `)
    break

  case '*':
    document.write(`
  <table>
  <tr>
    <th>运算值一</th>
    <th>运算值二</th>
    <th>算法</th>
    <th>结果</th>
  </tr>
  <tr>
    <td>${$num1}</td>
    <td>${$num2}</td>
    <td>${$choose}</td>
    <td>${$num1 * $num2}</td>
  </tr>
  </table>
    `)
    break

  case '/':
    document.write(`
  <table>
  <tr>
    <th>运算值一</th>
    <th>运算值二</th>
    <th>算法</th>
    <th>结果</th>
  </tr>
  <tr>
    <td>${$num1}</td>
    <td>${$num2}</td>
    <td>${$choose}</td>
    <td>${$num1 / $num2}</td>
  </tr>
  </table>
    `)
    break

  case '%':
    document.write(`
  <table>
  <tr>
    <th>运算值一</th>
    <th>运算值二</th>
    <th>算法</th>
    <th>结果</th>
  </tr>
  <tr>
    <td>${$num1}</td>
    <td>${$num2}</td>
    <td>${$choose}</td>
    <td>${$num1 % $num2}</td>
  </tr>
  </table>
    `)
    break

  default:
    document.write('<h1>错误</h1>')
    break
}
