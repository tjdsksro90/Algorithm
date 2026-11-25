import os
import sys

#### 배경지식 퀴즈 6. 인덱싱이 가능한 자료형        

# 서로 다른 자료형인 아래 네 가지 객체들 중, indexing이 가능한 것을 고르시오.

# my_list = [1,2,3,4]
# my_tuple = (1,2,3,4)
# my_set = {1,2,3,4}
# my_dict = {1:'a',2:'b',3:'c',4:'d'}



INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

my_list = [1,2,3,4]
my_tuple = (1,2,3,4)
my_set = {1,2,3,4}
my_dict = {1:'a',2:'b',3:'c',4:'d'}

print(my_list[1])
print(my_tuple[1])
# print(my_set[1]) # false
# print(my_dict[1]) # key 값으로