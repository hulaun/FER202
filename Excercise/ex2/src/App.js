import logo from "./logo.svg";
import "./App.css";

function App() {
  const greet = (name, age) => {
    return `Hello my name is ${name}. I am ${age} years old`;
  };
  greet("Khanh", "morning");
  greet("Hoang", "evening");

  //Arrow single parameter
  let square = (num) => {
    return num * num;
  };
  console.log(square(5));
  console.log(square(10));

  //Arrow any parameter
  let sayhi = () => {
    console.log("Hi");
  };
  sayhi();

  //Arrow object literals
  let person = {
    name: "khanh",
    age: 20,
    greet: function () {
      console.log(
        "Hello my name is ${this.name} and i am ${this.age} years old."
      );
    },
  };
  person.greet();

  //Example
  let greets = (name, time) => {
    console.log(`${name} an ${time} cuc cut`);
  };
  greets("hoang", "10");

  //Arrow-6 Promises and Callbacks
  //Example using Promises
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "This is the fetched data";
        resolve(data);
      }, 2000);
    });
  }
  fetchData()
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.log("Error occured:", error);
    });

  //let
  function example() {
    let x = 10;
    if (true) {
      let y = 20;
      console.log(x);
      console.log(y);
    }
    console.log(x);
    //console.log(y) error: not define y
  }
  example();

  //const
  function examples() {
    const PI = 3.14159;
    if (true) {
      const MAX_VALUE = 100;
      console.log(PI);
      console.log(MAX_VALUE);
    }
    console.log(PI);
    //console.log(MAX_VALUE) error: not define Max_value
  }
  examples();

  //Rest parameter (dau' 3 cham thaythe cho 1 mang dai`)
  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4));
  console.log(sum(10, 20, 3, 4));
  console.log(sum(3, 6, 8, 9));

  //Array destructuring
  const numbers = [1, 2, 3, 4, 5];

  //Destructuring assignment
  const [a, b, ...rest] = numbers;

  console.log(a);
  console.log(b);
  console.log(rest);
  //Object destructuring
  const persons = {
    name: "David Khanh",
    age: 20,
    city: "Los Angeles",
  };
  //Destructuring assignment:
  const { name, age, city } = persons;

  console.log(name);
  console.log(age);
  console.log(city);
  return (
    <div className="App">
      <div>{greet("hung", "21")}</div>
    </div>
  );
}

export default App;
