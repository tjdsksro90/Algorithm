// function solution(id_pw, db) {
//   let answer = "";
//   db.forEach(info => {
//     if (answer === "login") return false;
//     if (info[0] === id_pw[0] && info[1] === id_pw[1]) answer = "login";
//     else {
//       if (answer === "wrong pw") return false;
//       if (info[0] !== id_pw[0] && info[1] !== id_pw[1]) answer = "fail";
//       else if (info[0] === id_pw[0] && info[1] !== id_pw[1])
//         answer = "wrong pw";
//     }
//   });
//   return answer;
// }

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
