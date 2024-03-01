function solution(num_list, n) {
    var answer = 0;
    num_list.filter(x => x == n ? answer = 1 : '');
    return answer;
}