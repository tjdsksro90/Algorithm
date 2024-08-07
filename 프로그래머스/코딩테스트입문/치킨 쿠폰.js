function solution(chicken) {
  let coupons = chicken;  // 초기 쿠폰 수는 주문한 치킨의 수와 같다.
  let serviceChicken = 0; // 서비스 치킨의 수를 저장할 변수
  
  while (coupons >= 10) {
      let newService = Math.floor(coupons / 10); // 이번에 받을 수 있는 서비스 치킨 수
      serviceChicken += newService; // 서비스 치킨 수를 추가
      coupons = coupons % 10 + newService; // 남은 쿠폰과 새로운 서비스 치킨으로 생긴 쿠폰을 합
  }
  
  return serviceChicken;
}