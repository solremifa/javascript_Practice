// Javascript
class Student {
    static schoolName = "JS대학교"; // 클래스 변수 (공용)
    age = undefined;
    name = undefined;

    constructor(name, age) {
        this.name = name; // 인스턴스 변수 (독립적)
        this.age = age;   // 인스턴스 변수 (독립적)
    }

    // 인스턴스 메서드
    introduce() {
        // 내 주머니의 name과 공용 보관함의 schoolName을 출력
        console.log(`저는 ${Student.schoolName}의 ${this.name}입니다.`);
    }
}

const s1 = new Student("철수", 20);
const s2 = new Student("영희", 22);

s1.introduce(); // "저는 JS대학교의 철수입니다."
s2.introduce(); // "저는 JS대학교의 영희입니다."