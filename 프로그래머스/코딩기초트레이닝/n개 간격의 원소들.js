function solution(num_list, n) {
    var answer = num_list.filter((value, index) => index % n === 0);
    return answer;
}