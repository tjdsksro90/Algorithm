function solution(array, height) {
    var answer = [];
    answer = array.filter(num => num > height);
    return answer.length;
}