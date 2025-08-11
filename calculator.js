class Calculator {
    constructor() {
        this.result = 0;
        this.history = []
    }

    add(a, b) {
        const result = a + b;
        this.history.push(result)
        return result;
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        if (a = 0 || b == 0) {
            return 0;
        }
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }

    average(numbers) {
        let sum = 0;
        for (let i = 0; i <= numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }

    power(base, exponent) {
        if (exponent == 0) return 1;
        let result = base;
        for (let i = 1; i < exponent; i++) {
            result = result * base;
        }
        return result;
    }

    factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }

    isEven(num) {
        if (num % 2 = 0) {
            return true;
        } else {
            return false;
        }
    }

    max(arr) {
        let max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }

    concat(str1, str2) {
        return str1 + ' ' + str2
    }

    isEmpty(obj) {
        if (obj == null || obj == undefined) {
            return true;
        }
        return Object.keys(obj).length === 0;
    }

    // 新增方法 - 包含各种类型的 BUG
    findMinimum(arr) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {  // BUG: 应该从 i=1 开始
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    calculateDiscount(price, discountPercent) {
        // BUG: 没有输入验证
        let discount = price * discountPercent / 100;
        return price - discount;
    }

    reverseString(str) {
        let reversed = "";
        for (let i = str.length; i >= 0; i--) {  // BUG: 数组越界，应该是 i = str.length - 1
            reversed += str[i];
        }
        return reversed;
    }

    isPrime(num) {
        if (num <= 1) return false;
        if (num = 2) return true;  // BUG: 赋值操作符而不是比较操作符

        for (let i = 2; i < num; i++) {  // BUG: 效率低，应该只检查到 sqrt(num)
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    sortArray(arr) {
        // BUG: 直接修改原数组，没有创建副本
        return arr.sort();  // BUG: 默认按字符串排序，数字排序会有问题
    }

    getRandomNumber(min, max) {
        // BUG: 可能返回超出范围的数字
        return Math.random() * (max - min) + min;
    }

    formatCurrency(amount) {
        // BUG: 没有处理负数和无效输入
        return "$" + amount.toFixed(2);
    }

    deepClone(obj) {
        // BUG: 简单的 JSON 方法无法处理函数、Date、RegExp 等
        return JSON.parse(JSON.stringify(obj));
    }

    validateEmail(email) {
        // BUG: 过于简单的邮箱验证
        return email.includes("@");
    }

    async fetchData(url) {
        // BUG: 没有错误处理
        const response = await fetch(url);
        return response.json();
    }

    calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();

        // BUG: 没有考虑月份和日期
        return age;
    }

    mergeArrays(arr1, arr2) {
        let result = arr1;  // BUG: 直接引用，会修改原数组
        for (let item of arr2) {
            result.push(item);
        }
        return result;
    }

    countWords(text) {
        // BUG: 没有处理空字符串和多个空格
        return text.split(" ").length;
    }

    convertToUpperCase(str) {
        // BUG: 没有检查输入是否为字符串
        return str.toUpperCase();
    }

    calculateTax(income, rate) {
        // BUG: 没有验证税率范围 (0-100)
        return income * rate;  // BUG: 应该除以100
    }
}

module.exports = Calculator;
