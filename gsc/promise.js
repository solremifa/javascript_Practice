

let p = new Promise(
    // Executor -> user defined function
    (resolve, reject) => {
        console.log("start");
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve("S");
            } else {
                reject("F")
            }
        }, 3000);
        console.log("end");
    }
);

p.then(result => console.log(result), error => console.log(error));










// p.then(/* OnResolved */ /* OnRejected*/);

// let p2 = new Promise();

// // Task A => Task B => Task C => Task D
// p2.then().then().then().catch().finally();