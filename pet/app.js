// father class
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// child classes that want to inherit
class Dog extends Pet {
    sound(){
        return `${this.name} sounds WOOOF!!!`;
    }
}

// child class wants to inherit and change sth itself
class Cat extends Pet {
    constructor(name, age, rage){
        super(name, age); // with super you can access to the parent properties
        this.rage = rage;
    }
}
