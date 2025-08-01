// 测试代码 - 包含一些潜在问题供AI审查

// 问题1: 未使用的变量
function calculateTotal(items) {
    let total = 0;
    let unusedVariable = "not used"; // 未使用的变量
    
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    
    return total;
}

// 问题2: 可能的空指针引用
function getUserInfo(user) {
    return user.profile.name; // 如果user或profile为null会出错
}

// 问题3: 硬编码的值
function isAdult(age) {
    return age >= 18; // 硬编码年龄限制
}

// 问题4: 不安全的eval使用
function executeCode(code) {
    return eval(code); // 安全问题：使用eval
}

// 问题5: 缺少错误处理
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// 问题6: 性能问题 - 低效的循环
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}