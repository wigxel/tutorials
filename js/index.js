// OBJECT ORIENTED PROGRAMMING -> OOP
// Basically programming with Real life Objects
// Object is a data-type

// class ToyotaCar {
//     wheels: 4 // Number
//     color: 'black' // String
//     horsepower: 12000 // Number
//     model: 'Toyota Camry' // String
//     converitible: false // Boolean
// }

// ES6 Ecma Script -> Javascript
// ES6 - ES8
class Car {
  // Blueprint
  constructor(model, color, horsepower, convertible) {
    this.model = model;
    this.wheels = 4;
    this.color = color;
    this.horsepower = horsepower;
    this.convertible = convertible;
  }
  // functions that are attached to the Car Object are called -> Methods
  calculateDistance(miles) {
    return this.horsepower / miles; // a number / another number e.g 1200 / 3
  }
}

// Instantiation
const Toyota = new Car("Toyota Camry", "blue", 12000, false); // Instance 1
const Maserati = new Car("Maserati Gx", "red", 100000, true); // Instance 2

console.log(Toyota.calculateDistance(3)); // miles
console.log(Maserati.calculateDistance(3));
// Okay. Let's take another example
console.log(Toyota);
console.log(Maserati);

class Cake {
  constructor(flavour, icy_type, inches, icy, shape) {
    this.icy = icy;
    this.flavour = flavour;
    this.icy_type = icy_type;
    this.inches = inches;
    this.shape = shape;
  }

  isBirthdayCake() {
    return this.inches <= 6 && this.icy === true;
  }

  isForBigEvent() {
    return this.inches > 6 && this.icy === true;
  }
}

const sandrasCake = new Cake("Red Velvet", "Butter", 4, true, "triangular");
const johnAndGracesCake = new Cake("Exotic", "Royal", 12, true, "circle");
const bananaCake = new Cake("Banana", null, 3, false, "square");

console.log(bananaCake.isBirthdayCake());
console.log(johnAndGracesCake.isBirthdayCake());
console.log(johnAndGracesCake.isForBigEvent());

console.log(sandrasCake);
console.log(sandrasCake.isForBigEvent());
console.log(sandrasCake.isBirthdayCake());

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  greet(person) {
    if (person instanceof Person) {
      return "Hello, " + person.firstname + ". My name is " + this.firstname;
    } else {
      throw Error("The argument is not an instance of Person");
    }
  }
}

const john = new Person("John", "Snow", 30);
const sophia = new Person("Sophia", "Williams", 16);
const paul = new Person("Paul", "Trani", 34);

console.log(sophia.greet(john));
console.log(john.greet(sophia));
console.log(john.greet(paul));

console.log(john.isAdult());
console.log(sophia.isAdult());
console.log(john instanceof Person);
console.log(john instanceof Cake);

class Classroom {
  constructor() {
    this.students = [];
  }

  removePerson(person) {
    this.students = this.students.filter(
      (e) => e.firstname !== person.firstname
    );
  }

  countPerson() {
    return this.students.length;
  }
  // add a person to the classroom
  addPerson(person) {
    if (person.isAdult() === false) return "";
    if (person instanceof Person) {
      return this.students.push(person);
    }
    throw Error("The argument is not a person");
  }

  generateTable() {
    const tbody = document.querySelector("table > tbody");
    tbody.innerHTML = ""; // clear
    this.students.forEach((person) => {
      const row = generatePersonRow(person);
      tbody.appendChild(row);
    });
  }
}

console.clear();

const darl = new Person("Darl", "Sele", 24);
const codelabs = new Classroom();
codelabs.addPerson(john);
codelabs.addPerson(darl);
codelabs.addPerson(sophia);

console.log(codelabs.countPerson());
console.log(codelabs.countPerson());

/* Generates the HTML structure
    <tr>
        <td>Firstname</td>
        <td>Lastname</td>
        <td>age</td>
    </tr>
*/
function generatePersonRow(person) {
  // tr
  const tr = document.createElement("tr");
  // td -> First Name
  const ftd = document.createElement("td");
  ftd.textContent = person.firstname;
  tr.appendChild(ftd);
  // td -> Last Name
  const ltd = document.createElement("td");
  ltd.textContent = person.lastname;
  tr.appendChild(ltd);
  // td -> Age
  const agetd = document.createElement("td");
  agetd.textContent = person.age;
  tr.appendChild(agetd);

  return tr;
}

codelabs.generateTable();
