new Promise((resolve, reject) => {
    resolve("Executor: S");
    reject("Excutor: F");
})
.then(
    (result) => {
        console.log(`then-S: ${result}`);
        throw new Error("Step 2에서 예상치 못한 에러!");
    },
    (error) => {
        console.log(`then-F: ${error}`);

    },
)
.catch((error) => console.log(`error: ${error}`))
.finally((result) => console.log(`finally: ${result}`))

Promise.resolve("Step 1 성공")
    .then(res => {
        console.log(res); 
        throw new Error("Step 2에서 예상치 못한 에러!"); // 여기서 에러 발생
    })
    .then(() => {
        console.log("Step 3"); // 위에서 에러가 났으므로 실행 안 됨
    })
    .catch(err => {
        console.log(`잡았다! : ${err.message}`); // 여기서 에러를 처리함
    });