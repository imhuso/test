# Python测试代码 - 包含安全和代码质量问题

import os
import subprocess

# 问题1: SQL注入风险
def get_user_data(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"  # SQL注入风险
    # 应该使用参数化查询
    return query

# 问题2: 命令注入风险  
def execute_command(filename):
    command = f"cat {filename}"  # 命令注入风险
    result = subprocess.run(command, shell=True, capture_output=True)
    return result.stdout

# 问题3: 硬编码敏感信息
API_KEY = "sk-1234567890abcdef"  # 硬编码API密钥
DATABASE_PASSWORD = "admin123"   # 硬编码数据库密码

# 问题4: 不安全的文件操作
def read_file(filepath):
    with open(filepath, 'r') as f:  # 没有验证文件路径
        return f.read()

# 问题5: 弱密码验证
def is_valid_password(password):
    return len(password) >= 6  # 过于简单的密码验证

# 问题6: 未处理异常
def divide_numbers(a, b):
    return a / b  # 可能除零错误

# 问题7: 使用危险的pickle
import pickle

def load_data(data):
    return pickle.loads(data)  # 不安全的反序列化