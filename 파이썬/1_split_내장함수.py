import os
import sys

#### 배경지식 퀴즈 1. 내장함수 split
# -  split : 문자열을 쪼개어(토큰화하여) 리스트 반환

# < Input >

#     text = 'a b c d e'
    
# < Output >

#     ['a', 'b', 'c', 'd', 'e']

INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

inputList = 'a b c d e'
answer = inputList.split()
print(answer)
