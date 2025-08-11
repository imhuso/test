const Calculator = require('./calculator');

// 演示各种 BUG 的测试文件
console.log('=== Calculator BUG 演示 ===\n');

const calc = new Calculator();

// BUG 1: multiply 方法中的赋值操作符
console.log('1. multiply(5, 0) 应该返回 0:');
try {
    console.log('结果:', calc.multiply(5, 0)); // 会因为 a = 0 而出错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 2: average 方法中的数组越界
console.log('\n2. average([1, 2, 3, 4, 5]) 应该返回 3:');
try {
    console.log('结果:', calc.average([1, 2, 3, 4, 5])); // 会返回 NaN
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 3: isEven 方法中的赋值操作符
console.log('\n3. isEven(4) 应该返回 true:');
try {
    console.log('结果:', calc.isEven(4)); // 会出错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 4: findMinimum 方法从索引0开始比较
console.log('\n4. findMinimum([5, 2, 8, 1, 9]) 应该返回 1:');
try {
    console.log('结果:', calc.findMinimum([5, 2, 8, 1, 9])); // 逻辑错误但不会报错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 5: reverseString 数组越界
console.log('\n5. reverseString("hello") 应该返回 "olleh":');
try {
    console.log('结果:', calc.reverseString("hello")); // 会包含 undefined
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 6: isPrime 赋值操作符
console.log('\n6. isPrime(2) 应该返回 true:');
try {
    console.log('结果:', calc.isPrime(2)); // 会出错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 7: sortArray 数字排序问题
console.log('\n7. sortArray([10, 2, 30, 4]) 数字排序:');
try {
    console.log('结果:', calc.sortArray([10, 2, 30, 4])); // 按字符串排序: [10, 2, 30, 4]
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 8: getRandomNumber 范围问题
console.log('\n8. getRandomNumber(1, 10) 可能返回超出范围:');
try {
    for (let i = 0; i < 5; i++) {
        console.log('结果:', calc.getRandomNumber(1, 10)); // 可能返回10
    }
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 9: formatCurrency 没有输入验证
console.log('\n9. formatCurrency("abc") 无效输入:');
try {
    console.log('结果:', calc.formatCurrency("abc")); // 会出错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 10: validateEmail 过于简单
console.log('\n10. validateEmail("invalid@") 无效邮箱:');
try {
    console.log('结果:', calc.validateEmail("invalid@")); // 返回 true，但邮箱无效
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 11: calculateAge 没有考虑月份日期
console.log('\n11. calculateAge("2000-12-31") 年龄计算:');
try {
    console.log('结果:', calc.calculateAge("2000-12-31")); // 可能不准确
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 12: mergeArrays 修改原数组
console.log('\n12. mergeArrays 修改原数组问题:');
try {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    console.log('原数组 arr1:', arr1);
    const result = calc.mergeArrays(arr1, arr2);
    console.log('合并后 result:', result);
    console.log('原数组 arr1 被修改:', arr1); // arr1 被修改了
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 13: countWords 空字符串和多空格
console.log('\n13. countWords 处理空格问题:');
try {
    console.log('countWords(""):', calc.countWords("")); // 返回1而不是0
    console.log('countWords("  hello   world  "):', calc.countWords("  hello   world  ")); // 计数错误
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 14: convertToUpperCase 类型检查
console.log('\n14. convertToUpperCase(123) 非字符串输入:');
try {
    console.log('结果:', calc.convertToUpperCase(123)); // 会出错
} catch (e) {
    console.log('错误:', e.message);
}

// BUG 15: calculateTax 税率计算错误
console.log('\n15. calculateTax(1000, 20) 税率20%:');
try {
    console.log('结果:', calc.calculateTax(1000, 20)); // 返回20000而不是200
} catch (e) {
    console.log('错误:', e.message);
}

console.log('\n=== BUG 演示完成 ===');
