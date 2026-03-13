let myList = [10, 20, 30];

// 배열을 순회하면서 실행할 알고리즘은
// 사용자 함수가 반환하는 값을 각 요소에 입력
function map(argList, argFn) {
    // 배열 순회하면서 사용자 함수의 반환 값을 현재 요소 값으로 치환
    // 이때 사용자 함수 호출 시 , 현 요소값을 전달
    
    for(const index in argList) {
        argList[index] = argFn(argList[index])
    }
    return argList;
}


let bar = 3;
function addOne(argBar) {
    let bar = argBar + 1;
    return bar;
}

console.log(addOne(bar), bar)

class Student {constructor(argAge){this.age=argAge;}}
const myArray = [];
myArray.push(new Student(20));
myArray.push(new Student(30));
myArray.push(new Student(40));

// let newList = myArray.filter(v => v.age >= 30);
// 

// 나이가 20살 초과인 학생들의 나이를 배열로 반환
// filter로 20살 초과인 학생들 반환
// map으로 걸러진 객체의 나이만 골라서 배열로 반환
let newList = myArray.filter(v => v.age > 20);
console.log(newList.map(v => v.age));