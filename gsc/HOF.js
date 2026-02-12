// 각 요소를 순회하며 함수의 결과값을 반환
function forEach(argArray, argFn) {
    for(let i in argArray) {
        argFn(argArray[i]);
    }
    console.log();
}

// 각 요소를 순회하며 함수의 결과값을 반환 후 요소를 치환
function map(argArray, argFn) {
    for(let i in argArray) {
        argArray[i] = argFn(argArray[i]);
    }
}

let myList = [10, 20, 30, 40];

// forEach로 배열 순회하면서 출력
forEach(myList, v => process.stdout.write(`${v}\t`));

// map으로 배열에 계산 적용 후 요소 치환
map(myList, v => v + 1);

forEach(myList, v => process.stdout.write(`${v}\t`));

map(myList, v => v + 2);

forEach(myList, v => process.stdout.write(`${v}\t`));