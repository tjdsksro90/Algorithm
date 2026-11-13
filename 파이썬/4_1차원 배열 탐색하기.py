import os
import sys

#### 배경지식 퀴즈 4. 1차원 배열 탐색하기

# < Input >  (2줄에 걸쳐, 띄어쓰기로 구분된 각 과일 이름(중복x), 찾아야 할 과일 이름 입력)

#     apple cherry kiwi melon banana
#     cherry
    
# < Output >

#     cherry 발견!
#     cherry의 index는 1

INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

lists = input().split()
pick = input()

for list in lists:
    if(list != pick):
        continue
    print(f'{pick} 발견!')
    print(f'{pick}의 index는 {lists.index(pick)}')
    break

for i in range(len(lists)):
    if lists[i] != pick:
        continue
    print(f'{pick} 발견!')
    print(f'{pick}의 index는 {i}')
