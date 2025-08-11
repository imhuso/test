# feat: 扩展 Calculator 类功能

## 概述
为 Calculator 类添加了多个新的实用方法，提升计算器的功能完整性。

## 新增功能

### 数组操作
- `findMinimum(arr)` - 查找数组中的最小值
- `sortArray(arr)` - 数组排序功能
- `mergeArrays(arr1, arr2)` - 合并两个数组

### 字符串处理
- `reverseString(str)` - 字符串反转
- `countWords(text)` - 统计文本中的单词数量
- `convertToUpperCase(str)` - 转换为大写字母
- `validateEmail(email)` - 邮箱地址验证

### 数学计算
- `isPrime(num)` - 判断是否为质数
- `getRandomNumber(min, max)` - 生成指定范围的随机数
- `calculateAge(birthDate)` - 根据出生日期计算年龄
- `calculateTax(income, rate)` - 税收计算

### 业务逻辑
- `calculateDiscount(price, discountPercent)` - 折扣计算
- `formatCurrency(amount)` - 货币格式化

### 工具方法
- `deepClone(obj)` - 深度克隆对象
- `fetchData(url)` - 异步数据获取

## 测试
添加了 `bug_demo.js` 文件来演示所有新功能的使用方法。

## 变更文件
- `calculator.js` - 主要功能实现
- `bug_demo.js` - 功能演示和测试

## 注意事项
所有新方法都经过了基本测试，确保功能正常运行。代码遵循现有的编码规范和风格。
