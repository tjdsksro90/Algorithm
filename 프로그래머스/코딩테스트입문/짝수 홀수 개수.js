function solution(num_list) {
    var answer = [];
    var odd = 0     // 홀수
    var even = 0    // 짝수

    for(i=0;i<num_list.length;i++){ num_list[i]%2 ==0 ? even++ : odd++ }
    answer = [even,odd]

    return answer;
}