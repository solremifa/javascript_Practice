// 괄호 { } 안에 필요한 키값과 기본값을 선언해 보세요.
function registerUser({ 
    username,
    password,
    email,
    nickname = "신규회원",
    source = 'web'
}) {
  
  // 가이드 1: 필수 값 체크
  // if문을 사용해서 id, password, email 중 하나라도 없으면 
  // "가입 실패: 필수 정보가 없습니다."를 return 하세요.
  if (!username || !password || !email) {
    return("가입 실패: 필수 정보가 없습니다.")
  }
  

  // 가이드 2: 결과 출력
  // 모든 값이 있다면 console.log를 이용해 가입 정보를 예쁘게 출력해 보세요.
  // 팁: 백틱(`)을 사용한 템플릿 리터럴을 쓰면 편합니다.
  console.log(`[가입완료] ID: ${username}, Password: ${password}, `)
  

  return "회원가입 요청 처리 완료";
}

// --- 테스트 케이스 (코드를 다 짠 후 실행해 보세요) ---

console.log("--- 테스트 1: 모든 정보 입력 ---");
registerUser({
  id: "tester1",
  password: "pw1",
  email: "test@test.com",
  nickname: "코딩왕",
  age: 25
});

console.log("\n--- 테스트 2: 필수 정보만 입력 ---");
registerUser({
  id: "tester2",
  password: "pw2",
  email: "simple@test.com"
});

console.log("\n--- 테스트 3: 필수 정보 누락 ---");
const result = registerUser({ id: "missing_info" });
console.log(result);