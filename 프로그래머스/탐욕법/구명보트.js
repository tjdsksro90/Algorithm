function solution(people, limit) {
    people.sort((a, b) => b - a);
    let [left, right] = [0, people.length - 1];
    let answer = 0;

    while (left < right) {
        let sum = people[left] + people[right];
        if (sum > limit) {
            left++;
        } else {
            left++;
            right--;
        }
        answer++;
    }

    if (left === right) answer++;

    return answer;
}