function solution(progresses, speeds) {
  let days = [];

  // 각 기능이 완료되는데 걸리는 일수를 days 배열에 저장
  progresses.forEach((percent, index) => {
    let day = 0;
    while (percent < 100) {
      percent += speeds[index];
      day++;
    }
    days.push(day);
  });

  // 배포 처리 로직
  let maxDay = days[0];
  let count = 1;
  let answer = [];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    }
  }

  // 마지막으로 남은 count 추가
  answer.push(count);

  return answer;
}
