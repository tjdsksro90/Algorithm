import os
import sys

#### 배경지식 퀴즈 2. 로그 개념

# 종이를 한 번 자르면 2개가 되고, 이 2장을 겹쳐서 자르면 4장이 된다.          
# - 32개의 정사각형을 만들기 위해 몇 번 절반으로 잘라야 하는가?         
# - 정사각형 개수가 N이라면, 가위로 잘라야 하는 횟수는 어떤 수식으로 표현할 수 있는가?     
    



INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

N = 32
pieces = 1
count = 0

for _ in range(N):
    if pieces >= N:
        break

    pieces *= 2
    count += 1

print(count)