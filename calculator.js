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
}

module.exports = Calculator;