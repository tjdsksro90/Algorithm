import os
import sys

#### 배경지식 퀴즈 7. N 진수

# 퀴즈 : 7, 8, 9, 10을 각 각 2진수로 표현하면?



INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

def function(number):
    if number == 0:
        return "0"

    result = ""

    while number > 0:
        remainder = number % 2              # 2로 나눈 나머지
        result = str(remainder) + result    # 나머지를 앞에 붙이기
        number //= 2                        # 몫으로 갱신

    return result

for number in [7, 8, 9, 10]:
    print(f"{number} -> {function(number)}")