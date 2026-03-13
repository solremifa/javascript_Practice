
class Bar {
    #x = 2;
    static y = 1;
    static prtY() {console.log(Bar.y)};
    set x(argX) {
        if(argX > 0) {
            this.#x = argX;            
        } 
    }

    get x() {
        return this.#x;
    }
}

obj = new Bar();
obj.x = 30;
console.log(obj.x);


Bar.y = 20;

console.log(Bar.y); //20
console.log(obj.y); //undefinded