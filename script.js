function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = function () {
    alert(this.name + " runs!")
}

function Rabbit(name) {
    Animal.apply(this, arguments);
}

function Cat(name) {
    Animal.apply(this, arguments);
}

function Dog(name) {
    Animal.apply(this, arguments);
}

function Rooster(name) {
    Animal.apply(this, arguments);
}

function Snake(name) {
    Animal.apply(this, arguments);
}

function Elephant(name) {
    Animal.apply(this, arguments);
}

const descendants = [
    [Rabbit, " jumps up!"],
    [Cat, " meows!"],
    [Dog, " barks!"],
    [Rooster, " crows!"],
    [Snake, " hisses!"],
    [Elephant, " stomps!"]
]

for (let i = 0; i < descendants.length; i++) {
    descendants[i][0].prototype = Object.create(Animal.prototype);
    descendants[i][0].prototype.constructor = descendants[i][0];
    descendants[i][0].prototype.run = function () {
        alert(this.name + descendants[i][1]);
    };
}

const animals = [new Rabbit('Rabbit'), new Cat('Cat'), new Dog('Dog'), new Rooster('Rooster'), new Snake('Snake'), new Elephant('Elephant')];
for (let i = 0; i < animals.length; i++) {
    animals[i].run();
}