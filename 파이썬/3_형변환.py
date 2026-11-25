import os
import sys

#### 배경지식 퀴즈 3. 형변환
# 3.1. 문자열로 주어진 정수를 int자료형으로 형변환하고 출력하기  
# < input >

#     my_num = '112'

# < output >
#     1
    
#### 배경지식 퀴즈 3. 형변환
# 3.1. 문자열로 주어진 정수를 int자료형으로 형변환하고 출력하기  
# < input >

#     my_num = '112'

# < output >
#     112
    
# 3.2. set 으로 주어진 자료를 list 로 형변환하고 출력하기
# < Input >
       
#     my_data = {1,2,3}

# < Output >
    
#     [1,2,3]

INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

my_num = '112'
my_num_int = int(my_num)
print(my_num_int)

my_data = {1,2,3}
my_data_list = list(my_data)
print(my_data_list)