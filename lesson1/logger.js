function Animal(name, age, food) {
    this.name = name;
    this.age = age;
    this.food = food;
}

Animal.prototype.home = 'My house'

const dog = new Animal("BlackBi", 12, "Meat");
const cat = new Animal("Blue", 13, "Fish");


console.log(dog.home)
console.log(cat);
