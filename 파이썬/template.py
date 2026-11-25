import os
import sys

# 같은 폴더에 input.txt가 있으면 거기서 입력을 읽어요. (없으면 키보드 입력)
INPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'input.txt')
if os.path.exists(INPUT_FILE):
    sys.stdin = open(INPUT_FILE, encoding='utf-8')

input = sys.stdin.readline

# ---------------- 풀이 ----------------

a, b = map(int, input().split())
print(a + b)
