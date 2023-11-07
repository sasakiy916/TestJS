class Human {
   constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log(`初めまして。私の名前は${this.name},年齢は${this.age}歳です`);
    }
}

let h = new Human("サトウ", 32);
h.hello();
