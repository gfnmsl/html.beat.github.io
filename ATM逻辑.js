// 需求:用户可以选择 取钱 存钱 查看余额 退出
let $money = 0// 初始余额
while (true) {// true 布尔值真,在while中代表执行
  let $choose = +prompt(`
  选择你要执行的操作:
  1.存钱
  2.取钱
  3.查看余额
  4.退出`)
  if ($choose === 1) {
    let $deposit = +prompt('你想要存放多少钱')
    alert(`已成功存入${$deposit}元`)
    $money += $deposit
  }

  else if ($choose === 2) {
    let $fetch = +prompt('你想要取多少钱')
    if ($money >= $fetch) {
      alert(`已成功取出${$fetch}元`)
      $money -= $fetch
    }
    else if ($money < $fetch) {
      alert(`你的账号余额为${$money}元,无法提取`)
    }
  }

  else if ($choose === 3) {
    alert(`当前余额为${$money}元`)
  }

  else if ($choose === 4) {
    document.write(`<h2>已退出提款机程序</h2>`)
    break
  }
}