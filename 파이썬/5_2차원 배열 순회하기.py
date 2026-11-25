import os
import sys

#### 배경지식 퀴즈 5. 2차원 배열 순회하기

# < Input >  

#     matrix = [
#         [1, 2, 3],
#         [4, 5, 6],
#         [7, 8, 9]
#     ]
    
#     target = 5
    
# < Output >

# 출력   (타겟을 찾을 때까지만 각 element를 순회하며 '현재 위치(인덱스), 현재 element' 출력. 종료 후 찾았는지 못 찾았는지 메시지 출력)

#     position : 0,0, element : 1
#     position : 0,1, element : 2
#     position : 0,2, element : 3
#     position : 1,0, element : 4
#     position : 1,1, element : 5
#     target이 matrix안에 있나요? True

INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

target = 10

N = len(matrix)
M = len(matrix[0])

found = False

print(target)

for i in range(N):
    for j in range(M):
        elem = matrix[i][j]
        print(f'position : {i},{j}, element : {elem}')
        if elem == target:
            found = True
            break
    if found: break

print('target이 matrix안에 있나요?', found)





#     position : 0,0, element : 1
#     position : 0,1, element : 2
#     position : 0,2, element : 3
#     position : 1,0, element : 4
#     position : 1,1, element : 5
#     target이 matrix안에 있나요? True