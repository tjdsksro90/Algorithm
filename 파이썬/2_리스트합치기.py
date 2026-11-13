import os
import sys

#### 배경지식 퀴즈 2. 리스트 합치기

# 아래의 배열 a에 배열 b의 원소들을 추가하기

# < Input >

#     a = [1,2,3]
#     b = [4,5,6]

# < Output >

#     [1, 2, 3, 4, 5, 6]

INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

a = [1, 2, 3]
b = [4, 5, 6]

print(a+b)