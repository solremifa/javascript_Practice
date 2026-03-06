myList = [10, 299, 30, 400];

// 배열의 각 요소를 순회, 어떤 조건을 만족하는 값만 새로운 배열로 리턴
function filter(argArray, argFn) {
    // 새로운 배열 생성
    let newList = [];
    // 입력 배열의 요소 순회
    for(let i in argArray) {
        // 어떤 조건을 만족하면 새로운 배열에 삽입
        if(argFn(argArray[i])) {    
            newList.push(argArray[i]);
        }
    }
    // 새로운 배열 반환
    return newList;

}
// 100 이상 값들만 리스트로 생성
console.log(filter(myList, v => v >= 100))
// 학생 객체에서 평균이 50 이상인 학생의 리스트 생성

