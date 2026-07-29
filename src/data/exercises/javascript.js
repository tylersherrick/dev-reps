import { createExercise } from "../exercises";

const javascriptExercises = [
  createExercise({
  id: 1,
  language: "JavaScript",
  category: "Variables",
  difficulty: "Beginner",
  title: "String Variables",
  description:
    "Learn how to create variables that store text values using strings. Variables allow you to save information and reuse it throughout your program.",
  fileName: "variables.js",
  code: `const firstName = "John";
const lastName = "Doe";
let age = 25;`,
}),

createExercise({
  id: 2,
  language: "JavaScript",
  category: "Variables",
  difficulty: "Beginner",
  title: "Number Variables",
  description:
    "Learn how to store numeric values inside variables. Numbers are commonly used for calculations, measurements, counters, and other data in applications.",
  fileName: "numbers.js",
  code: `const width = 1920;
const height = 1080;
let scale = 1;`,
}),

createExercise({
  id: 3,
  language: "JavaScript",
  category: "Variables",
  difficulty: "Beginner",
  title: "Boolean Variables",
  description:
    "Learn how to store true or false values using booleans. Boolean variables are commonly used to track states like whether a user is logged in or an action is completed.",
  fileName: "boolean.js",
  code: `const loggedIn = true;
let isAdmin = false;`,
}),

createExercise({
  id: 4,
  language: "JavaScript",
  category: "Variables",
  difficulty: "Beginner",
  title: "Template Literals",
  description:
    "Learn how to create dynamic strings using template literals. Template literals allow you to insert variable values directly into text using ${} syntax.",
  fileName: "template.js",
  code: `const firstName = "John";
const greeting = \`Hello \${firstName}\`;`,
}),

createExercise({
  id: 5,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Simple Array",
  description:
    "Learn how to create arrays that store multiple values inside a single variable. Arrays are commonly used to organize collections of related data.",
  fileName: "array.js",
  code: `const colors = ["red", "green", "blue"];`,
}),

createExercise({
  id: 6,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Numbers Array",
  description:
    "Learn how to store multiple numeric values inside an array. Arrays allow programs to work with groups of related information efficiently.",
  fileName: "numbersArray.js",
  code: `const scores = [90, 84, 76, 100];`,
}),

createExercise({
  id: 7,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Beginner",
  title: "Object Literal",
  description:
    "Learn how to create objects that store related information using key-value pairs. Objects are commonly used to represent real-world data like users, products, and settings.",
  fileName: "object.js",
  code: `const user = {
  name: "John",
  age: 25,
  admin: false,
};`,
}),

createExercise({
  id: 8,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Beginner",
  title: "Nested Object",
  description:
    "Learn how objects can contain other objects as values. Nested objects help organize more complex data structures by grouping related information together.",
  fileName: "nestedObject.js",
  code: `const player = {
  name: "Bryce",
  team: {
    city: "Philadelphia",
    mascot: "Phillies",
  },
};`,
}),

createExercise({
  id: 9,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Beginner",
  title: "Basic Function",
  description:
    "Learn how to create reusable blocks of code with functions. Functions allow you to group instructions together and run them whenever they are needed.",
  fileName: "function.js",
  code: `function greet(name) {
  return \`Hello \${name}\`;
}`,
}),

createExercise({
  id: 10,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Beginner",
  title: "Arrow Function",
  description:
    "Learn how to write functions using modern arrow function syntax. Arrow functions provide a shorter way to create functions and are commonly used in modern JavaScript applications.",
  fileName: "arrow.js",
  code: `const greet = (name) => {
  return \`Hello \${name}\`;
};`,
}),

  createExercise({
  id: 11,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Beginner",
  title: "Multiple Parameters",
  description:
    "Learn how to pass multiple values into a function using parameters. Parameters allow functions to receive information and use that data when performing a task.",
  fileName: "parameters.js",
  code: `function add(a, b) {
  return a + b;
}`,
}),

createExercise({
  id: 12,
  language: "JavaScript",
  category: "Conditionals",
  difficulty: "Beginner",
  title: "If Statement",
  description:
    "Learn how to make decisions in your code using if statements. Conditional logic allows programs to run specific code only when a condition is true.",
  fileName: "if.js",
  code: `if (age >= 18) {
  console.log("Adult");
}`,
}),

createExercise({
  id: 13,
  language: "JavaScript",
  category: "Conditionals",
  difficulty: "Beginner",
  title: "If Else",
  description:
    "Learn how to handle two possible outcomes using if and else statements. This allows your program to choose between different paths based on a condition.",
  fileName: "ifElse.js",
  code: `if (loggedIn) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}`,
}),

createExercise({
  id: 14,
  language: "JavaScript",
  category: "Conditionals",
  difficulty: "Beginner",
  title: "Else If",
  description:
    "Learn how to check multiple conditions using else if statements. This allows programs to evaluate several possibilities and respond with the correct result.",
  fileName: "elseIf.js",
  code: `if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}`,
}),

createExercise({
  id: 15,
  language: "JavaScript",
  category: "Conditionals",
  difficulty: "Beginner",
  title: "Switch Statement",
  description:
    "Learn how to handle multiple possible values using a switch statement. Switch statements are useful when comparing one value against several different cases.",
  fileName: "switch.js",
  code: `switch (day) {
  case "Monday":
    console.log("Start");
    break;
  default:
    console.log("Other");
}`,
}),

createExercise({
  id: 16,
  language: "JavaScript",
  category: "Loops",
  difficulty: "Beginner",
  title: "For Loop",
  description:
    "Learn how to repeat code a specific number of times using a for loop. Loops help automate repeated actions and are commonly used when working with collections of data.",
  fileName: "forLoop.js",
  code: `for (let i = 0; i < 10; i++) {
  console.log(i);
}`,
}),

createExercise({
  id: 17,
  language: "JavaScript",
  category: "Loops",
  difficulty: "Beginner",
  title: "While Loop",
  description:
    "Learn how to repeat code while a condition remains true using a while loop. This type of loop is useful when you do not know exactly how many times code needs to run.",
  fileName: "while.js",
  code: `let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}`,
}),

createExercise({
  id: 18,
  language: "JavaScript",
  category: "Loops",
  difficulty: "Beginner",
  title: "For Of Loop",
  description:
    "Learn how to loop through values inside an iterable collection using a for of loop. This is commonly used when working with arrays.",
  fileName: "forOf.js",
  code: `for (const team of teams) {
  console.log(team);
}`,
}),

createExercise({
  id: 19,
  language: "JavaScript",
  category: "Loops",
  difficulty: "Beginner",
  title: "For In Loop",
  description:
    "Learn how to loop through the keys of an object using a for in loop. This is useful when you need to access object properties dynamically.",
  fileName: "forIn.js",
  code: `for (const key in user) {
  console.log(key);
}`,
}),

createExercise({
  id: 20,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Push Method",
  description:
    "Learn how to add new values to an existing array using the push method. Array methods like push allow you to modify and manage collections of data.",
  fileName: "push.js",
  code: `const teams = ["Phillies", "Yankees"];

teams.push("Dodgers");`,
}),

  createExercise({
  id: 21,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Pop Method",
  description:
    "Learn how to remove the last item from an array using the pop method. Array methods like pop allow you to modify collections by adding or removing values.",
  fileName: "pop.js",
  code: `const teams = ["Phillies", "Yankees"];

teams.pop();`,
}),

createExercise({
  id: 22,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Shift Method",
  description:
    "Learn how to remove the first item from an array using the shift method. Shift is useful when working with ordered lists where the first value needs to be removed.",
  fileName: "shift.js",
  code: `const teams = ["Phillies", "Yankees"];

teams.shift();`,
}),

createExercise({
  id: 23,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Beginner",
  title: "Unshift Method",
  description:
    "Learn how to add a new value to the beginning of an array using the unshift method. This allows you to insert new data while keeping the existing values.",
  fileName: "unshift.js",
  code: `const teams = ["Yankees", "Dodgers"];

teams.unshift("Phillies");`,
}),

createExercise({
  id: 24,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Beginner",
  title: "Uppercase Method",
  description:
    "Learn how to transform text into uppercase using the toUpperCase method. String methods allow you to modify and analyze text values in your applications.",
  fileName: "uppercase.js",
  code: `const team = "phillies";

const upper = team.toUpperCase();`,
}),

createExercise({
  id: 25,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Beginner",
  title: "Split Method",
  description:
    "Learn how to convert a string into an array using the split method. This is useful when breaking apart text into smaller pieces that can be processed individually.",
  fileName: "split.js",
  code: `const sentence = "Learn JavaScript Today";

const words = sentence.split(" ");`,
}),

createExercise({
  id: 26,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Beginner",
  title: "Replace Method",
  description:
    "Learn how to replace part of a string using the replace method. String replacement is commonly used when updating text or modifying user input.",
  fileName: "replace.js",
  code: `const team = "Phillies";

const updated = team.replace("Phillies", "Eagles");`,
}),

createExercise({
  id: 27,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Beginner",
  title: "Includes Method",
  description:
    "Learn how to check whether a string contains specific text using the includes method. This is useful when searching for keywords or validating user input.",
  fileName: "includes.js",
  code: `const sentence = "Learn JavaScript";

const hasJavaScript = sentence.includes("JavaScript");`,
}),

createExercise({
  id: 28,
  language: "JavaScript",
  category: "Numbers",
  difficulty: "Beginner",
  title: "Math.max",
  description:
    "Learn how to find the largest value from a group of numbers using Math.max. Built-in Math methods help perform common calculations without writing the logic yourself.",
  fileName: "mathMax.js",
  code: `const highest = Math.max(12, 44, 18, 99);`,
}),

createExercise({
  id: 29,
  language: "JavaScript",
  category: "Numbers",
  difficulty: "Beginner",
  title: "Random Number",
  description:
    "Learn how to generate random values using Math.random and convert them into usable numbers. Random values are commonly used in games, testing, and applications.",
  fileName: "random.js",
  code: `const randomNumber = Math.floor(Math.random() * 100);`,
}),

createExercise({
  id: 30,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Map Method",
  description:
    "Learn how to create a new array by transforming each item in an existing array using the map method. Map is one of the most commonly used array methods in modern JavaScript development.",
  fileName: "map.js",
  code: `const doubled = numbers.map((number) => {
  return number * 2;
});`,
}),

  createExercise({
  id: 31,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Filter Method",
  description:
    "Learn how to create a new array containing only values that match a condition using the filter method. Filter is commonly used when searching, sorting, and displaying specific data in applications.",
  fileName: "filter.js",
  code: `const adults = users.filter((user) => {
  return user.age >= 18;
});`,
}),

createExercise({
  id: 32,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Find Method",
  description:
    "Learn how to search through an array and return the first item that matches a condition using the find method. Find is useful when locating a specific object from a collection.",
  fileName: "find.js",
  code: `const player = players.find((player) => {
  return player.id === 7;
});`,
}),

createExercise({
  id: 33,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Some Method",
  description:
    "Learn how to check whether at least one item in an array meets a condition using the some method. This is useful when you only need to know if a matching value exists.",
  fileName: "some.js",
  code: `const hasWinner = teams.some((team) => {
  return team.wins > 100;
});`,
}),

createExercise({
  id: 34,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Every Method",
  description:
    "Learn how to check whether every item in an array passes a condition using the every method. This is useful when validating that all values meet a requirement.",
  fileName: "every.js",
  code: `const allAdults = users.every((user) => {
  return user.age >= 18;
});`,
}),

createExercise({
  id: 35,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Reduce Method",
  description:
    "Learn how to combine values from an array into a single result using the reduce method. Reduce is commonly used for totals, calculations, and transforming collections into new values.",
  fileName: "reduce.js",
  code: `const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);`,
}),

createExercise({
  id: 36,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Intermediate",
  title: "Object Destructuring",
  description:
    "Learn how to extract values from objects using destructuring. Destructuring makes it easier to access properties without repeatedly writing the object name.",
  fileName: "destructure.js",
  code: `const user = {
  name: "John",
  age: 28,
};

const { name, age } = user;`,
}),

createExercise({
  id: 37,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Array Destructuring",
  description:
    "Learn how to extract values from arrays using destructuring. This allows you to quickly store array elements into separate variables.",
  fileName: "arrayDestructure.js",
  code: `const scores = [95, 88, 76];

const [first, second] = scores;`,
}),

createExercise({
  id: 38,
  language: "JavaScript",
  category: "Operators",
  difficulty: "Intermediate",
  title: "Spread Operator",
  description:
    "Learn how to copy and expand arrays using the spread operator. The spread operator is commonly used when creating updated versions of existing data without modifying the original.",
  fileName: "spread.js",
  code: `const updatedTeams = [...teams, "Mets"];`,
}),

createExercise({
  id: 39,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Intermediate",
  title: "Rest Parameters",
  description:
    "Learn how to collect multiple function arguments into a single array using rest parameters. Rest parameters make functions more flexible by allowing them to accept any number of values.",
  fileName: "rest.js",
  code: `function total(...numbers) {
  return numbers.reduce(
    (sum, number) => sum + number,
    0
  );
}`,
}),

createExercise({
  id: 40,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Intermediate",
  title: "Default Parameters",
  description:
    "Learn how to provide fallback values for function parameters using default parameters. Default values help prevent errors when a function is called without all expected arguments.",
  fileName: "default.js",
  code: `function greet(name = "Guest") {
  return \`Hello \${name}\`;
}`,
}),

  createExercise({
  id: 41,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Intermediate",
  title: "Object Keys",
  description:
    "Learn how to retrieve all property names from an object using Object.keys. This is useful when you need to loop through or inspect the structure of an object.",
  fileName: "keys.js",
  code: `const keys = Object.keys(user);`,
}),

createExercise({
  id: 42,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Intermediate",
  title: "Object Values",
  description:
    "Learn how to retrieve all values from an object using Object.values. This allows you to work directly with the data stored inside an object.",
  fileName: "values.js",
  code: `const values = Object.values(user);`,
}),

createExercise({
  id: 43,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Intermediate",
  title: "Object Entries",
  description:
    "Learn how to retrieve an object's key-value pairs using Object.entries. This is useful when you need to loop through both property names and their values together.",
  fileName: "entries.js",
  code: `const entries = Object.entries(user);`,
}),

createExercise({
  id: 44,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Sort Numbers",
  description:
    "Learn how to organize array values using the sort method. JavaScript requires a comparison function when sorting numbers so values are arranged correctly.",
  fileName: "sort.js",
  code: `numbers.sort((a, b) => {
  return a - b;
});`,
}),

createExercise({
  id: 45,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Reverse Method",
  description:
    "Learn how to reverse the order of values inside an array using the reverse method. This is useful when you need to display data in the opposite order.",
  fileName: "reverse.js",
  code: `const reversed = numbers.reverse();`,
}),

createExercise({
  id: 46,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Slice Method",
  description:
    "Learn how to copy a portion of an array using the slice method. Slice creates a new array without changing the original data.",
  fileName: "slice.js",
  code: `const firstThree = numbers.slice(0, 3);`,
}),

createExercise({
  id: 47,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Splice Method",
  description:
    "Learn how to modify an array by adding or removing values using the splice method. Unlike slice, splice changes the original array.",
  fileName: "splice.js",
  code: `numbers.splice(2, 1);`,
}),

createExercise({
  id: 48,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Join Method",
  description:
    "Learn how to combine array values into a single string using the join method. This is useful when formatting lists of data for display.",
  fileName: "join.js",
  code: `const result = teams.join(", ");`,
}),

createExercise({
  id: 49,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Intermediate",
  title: "Trim Method",
  description:
    "Learn how to remove extra whitespace from the beginning and end of a string using the trim method. This is commonly used when cleaning user input from forms.",
  fileName: "trim.js",
  code: `const username = input.trim();`,
}),

createExercise({
  id: 50,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Chaining Methods",
  description:
    "Learn how to combine multiple array methods together to transform data. Method chaining allows you to filter, modify, and format data in a clean and readable way.",
  fileName: "chain.js",
  code: `const names = users
  .filter((user) => user.active)
  .map((user) => user.name);`,
}),

    createExercise({
  id: 51,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Intermediate",
  title: "Callback Function",
  description:
    "Learn how to pass a function as an argument to another function using callbacks. Callbacks are commonly used when you want code to run after another action has completed.",
  fileName: "callback.js",
  code: `function greet(name, callback) {
  callback(name);
}

greet("John", console.log);`,
}),

createExercise({
  id: 52,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Intermediate",
  title: "Anonymous Callback",
  description:
    "Learn how to create inline callback functions without giving them a name. Anonymous callbacks are commonly used with array methods like forEach, map, and filter.",
  fileName: "anonymousCallback.js",
  code: `numbers.forEach((number) => {
  console.log(number);
});`,
}),

createExercise({
  id: 53,
  language: "JavaScript",
  category: "Timing",
  difficulty: "Intermediate",
  title: "setTimeout",
  description:
    "Learn how to delay the execution of code using setTimeout. Timers are commonly used for delayed actions, notifications, animations, and asynchronous behavior.",
  fileName: "timeout.js",
  code: `setTimeout(() => {
  console.log("Done");
}, 1000);`,
}),

createExercise({
  id: 54,
  language: "JavaScript",
  category: "Timing",
  difficulty: "Intermediate",
  title: "setInterval",
  description:
    "Learn how to repeatedly run code at a set time interval using setInterval. Intervals are commonly used for clocks, polling data, and recurring updates.",
  fileName: "interval.js",
  code: `const interval = setInterval(() => {
  console.log("Tick");
}, 1000);`,
}),

createExercise({
  id: 55,
  language: "JavaScript",
  category: "JSON",
  difficulty: "Intermediate",
  title: "JSON Parse",
  description:
    "Learn how to convert JSON formatted text into a JavaScript object using JSON.parse. This is commonly used when receiving data from APIs or external sources.",
  fileName: "jsonParse.js",
  code: `const json = '{"name":"John"}';

const user = JSON.parse(json);`,
}),

createExercise({
  id: 56,
  language: "JavaScript",
  category: "JSON",
  difficulty: "Intermediate",
  title: "JSON Stringify",
  description:
    "Learn how to convert JavaScript objects into JSON text using JSON.stringify. This is commonly used when sending data to APIs or storing information.",
  fileName: "jsonStringify.js",
  code: `const json = JSON.stringify(user);`,
}),

createExercise({
  id: 57,
  language: "JavaScript",
  category: "Promises",
  difficulty: "Intermediate",
  title: "Create a Promise",
  description:
    "Learn how to create promises that represent operations that may complete in the future. Promises are a core part of handling asynchronous JavaScript code.",
  fileName: "promise.js",
  code: `const promise = new Promise((resolve) => {
  resolve("Success");
});`,
}),

createExercise({
  id: 58,
  language: "JavaScript",
  category: "Promises",
  difficulty: "Intermediate",
  title: "Promise Then",
  description:
    "Learn how to handle the result of a promise using the then method. The then method allows code to run after an asynchronous operation successfully completes.",
  fileName: "then.js",
  code: `promise.then((result) => {
  console.log(result);
});`,
}),

createExercise({
  id: 59,
  language: "JavaScript",
  category: "Async",
  difficulty: "Intermediate",
  title: "Async Function",
  description:
    "Learn how to create asynchronous functions using the async keyword. Async functions allow you to work with promises using cleaner and more readable syntax.",
  fileName: "async.js",
  code: `async function loadData() {
  return "Loaded";
}`,
}),

createExercise({
  id: 60,
  language: "JavaScript",
  category: "Async",
  difficulty: "Intermediate",
  title: "Await",
  description:
    "Learn how to pause an async function until a promise is completed using await. Await makes asynchronous code easier to read by allowing it to be written in a more sequential style.",
  fileName: "await.js",
  code: `async function getData() {
  const data = await promise;

  return data;
}`,
}),

  createExercise({
  id: 61,
  language: "JavaScript",
  category: "Fetch",
  difficulty: "Intermediate",
  title: "Fetch Request",
  description:
    "Learn how to request data from an API using fetch. Fetch is commonly used in frontend applications to communicate with backend servers and retrieve information.",
  fileName: "fetch.js",
  code: `const response = await fetch("/api/users");`,
}),

createExercise({
  id: 62,
  language: "JavaScript",
  category: "Fetch",
  difficulty: "Intermediate",
  title: "Read JSON Response",
  description:
    "Learn how to convert an API response into usable JavaScript data using response.json. Most APIs return JSON data that needs to be parsed before it can be used.",
  fileName: "responseJson.js",
  code: `const users = await response.json();`,
}),

createExercise({
  id: 63,
  language: "JavaScript",
  category: "Errors",
  difficulty: "Intermediate",
  title: "Try Catch",
  description:
    "Learn how to handle unexpected errors using try and catch blocks. Error handling helps applications continue running and provide better feedback when something goes wrong.",
  fileName: "tryCatch.js",
  code: `try {
  console.log(user.name);
} catch (error) {
  console.error(error);
}`,
}),

createExercise({
  id: 64,
  language: "JavaScript",
  category: "Errors",
  difficulty: "Intermediate",
  title: "Throw Error",
  description:
    "Learn how to create custom errors using throw. Throwing errors allows you to stop execution and communicate when something does not meet the expected requirements.",
  fileName: "throw.js",
  code: `throw new Error("Something went wrong");`,
}),

createExercise({
  id: 65,
  language: "JavaScript",
  category: "Sets",
  difficulty: "Intermediate",
  title: "Create Set",
  description:
    "Learn how to create a Set, a collection that only stores unique values. Sets are useful when you need to remove duplicates or quickly check whether a value exists.",
  fileName: "set.js",
  code: `const ids = new Set([1, 2, 3]);`,
}),

createExercise({
  id: 66,
  language: "JavaScript",
  category: "Sets",
  difficulty: "Intermediate",
  title: "Add to Set",
  description:
    "Learn how to add new values to a Set using the add method. Sets automatically prevent duplicate values from being stored.",
  fileName: "setAdd.js",
  code: `ids.add(4);`,
}),

createExercise({
  id: 67,
  language: "JavaScript",
  category: "Maps",
  difficulty: "Intermediate",
  title: "Create Map",
  description:
    "Learn how to create a Map collection for storing key-value pairs. Maps are useful when you need keys that can be different data types or need more control than regular objects.",
  fileName: "mapObject.js",
  code: `const scores = new Map();`,
}),

createExercise({
  id: 68,
  language: "JavaScript",
  category: "Maps",
  difficulty: "Intermediate",
  title: "Map Set",
  description:
    "Learn how to add values to a Map using the set method. Maps store information by connecting a unique key with a related value.",
  fileName: "mapSet.js",
  code: `scores.set("John", 98);`,
}),

createExercise({
  id: 69,
  language: "JavaScript",
  category: "Dates",
  difficulty: "Intermediate",
  title: "Current Date",
  description:
    "Learn how to create a Date object representing the current time. JavaScript dates are used for timestamps, scheduling, and working with time-based data.",
  fileName: "date.js",
  code: `const today = new Date();`,
}),

createExercise({
  id: 70,
  language: "JavaScript",
  category: "Dates",
  difficulty: "Intermediate",
  title: "Current Year",
  description:
    "Learn how to extract the current year from a Date object using getFullYear. Date methods allow applications to display and work with specific parts of a date.",
  fileName: "year.js",
  code: `const year = today.getFullYear();`,
}),

  createExercise({
  id: 71,
  language: "JavaScript",
  category: "Strings",
  difficulty: "Intermediate",
  title: "Pad Start",
  description:
    "Learn how to add characters to the beginning of a string using padStart. This is commonly used when formatting values like numbers, dates, or IDs with consistent lengths.",
  fileName: "padStart.js",
  code: `const number = "7".padStart(2, "0");`,
}),

createExercise({
  id: 72,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Flat Method",
  description:
    "Learn how to flatten nested arrays into a single array using the flat method. This is useful when working with data structures that contain multiple levels of arrays.",
  fileName: "flat.js",
  code: `const values = [[1, 2], [3, 4]];

const result = values.flat();`,
}),

createExercise({
  id: 73,
  language: "JavaScript",
  category: "Operators",
  difficulty: "Intermediate",
  title: "Nullish Coalescing",
  description:
    "Learn how to provide fallback values using the nullish coalescing operator. This operator returns a default value when the original value is null or undefined.",
  fileName: "nullish.js",
  code: `const username = user.name ?? "Guest";`,
}),

createExercise({
  id: 74,
  language: "JavaScript",
  category: "Operators",
  difficulty: "Intermediate",
  title: "Optional Chaining",
  description:
    "Learn how to safely access nested properties using optional chaining. This prevents errors when trying to access values that may not exist.",
  fileName: "optionalChaining.js",
  code: `const city = user.address?.city;`,
}),

createExercise({
  id: 75,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Intermediate",
  title: "Find Index",
  description:
    "Learn how to find the position of an item in an array using findIndex. This is useful when you need the location of a value instead of the value itself.",
  fileName: "findIndex.js",
  code: `const index = users.findIndex((user) => {
  return user.id === 5;
});`,
}),

createExercise({
  id: 76,
  language: "JavaScript",
  category: "Classes",
  difficulty: "Advanced",
  title: "Basic Class",
  description:
    "Learn how to create classes that define reusable object blueprints. Classes are used to create objects with shared properties and behaviors.",
  fileName: "class.js",
  code: `class User {
  constructor(name) {
    this.name = name;
  }
}`,
}),

createExercise({
  id: 77,
  language: "JavaScript",
  category: "Classes",
  difficulty: "Advanced",
  title: "Class Method",
  description:
    "Learn how to add methods to classes. Methods define actions that objects created from a class can perform.",
  fileName: "classMethod.js",
  code: `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello \${this.name}\`;
  }
}`,
}),

createExercise({
  id: 78,
  language: "JavaScript",
  category: "Modules",
  difficulty: "Advanced",
  title: "Export Function",
  description:
    "Learn how to export functions from a JavaScript module. Exports allow you to organize code into separate files and reuse functionality throughout an application.",
  fileName: "math.js",
  code: `export function add(a, b) {
  return a + b;
}`,
}),

createExercise({
  id: 79,
  language: "JavaScript",
  category: "Modules",
  difficulty: "Advanced",
  title: "Import Function",
  description:
    "Learn how to import functions from another JavaScript module. Imports allow applications to bring reusable code into different files.",
  fileName: "app.js",
  code: `import { add } from "./math";

console.log(add(2, 3));`,
}),

createExercise({
  id: 80,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Query Selector",
  description:
    "Learn how to select HTML elements using querySelector. Selecting elements allows JavaScript to interact with and modify content on a webpage.",
  fileName: "dom.js",
  code: `const button = document.querySelector("button");`,
}),

  createExercise({
  id: 81,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Add Event Listener",
  description:
    "Learn how to respond to user actions by adding event listeners. Event listeners allow JavaScript to run code when events like clicks, typing, or submissions occur.",
  fileName: "event.js",
  code: `button.addEventListener("click", () => {
  console.log("Clicked");
});`,
}),

createExercise({
  id: 82,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Change Text",
  description:
    "Learn how to update webpage content using textContent. Changing text dynamically allows JavaScript to modify what users see without refreshing the page.",
  fileName: "text.js",
  code: `const heading = document.querySelector("h1");

heading.textContent = "Welcome";`,
}),

createExercise({
  id: 83,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Toggle Class",
  description:
    "Learn how to add or remove CSS classes dynamically using classList.toggle. This is commonly used for changing styles, showing content, and creating interactive user interfaces.",
  fileName: "toggle.js",
  code: `button.classList.toggle("active");`,
}),

createExercise({
  id: 84,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Create Element",
  description:
    "Learn how to create new HTML elements with JavaScript using createElement. Creating elements dynamically allows applications to build and update page content.",
  fileName: "create.js",
  code: `const li = document.createElement("li");

li.textContent = "Phillies";`,
}),

createExercise({
  id: 85,
  language: "JavaScript",
  category: "DOM",
  difficulty: "Advanced",
  title: "Append Child",
  description:
    "Learn how to add newly created elements to a webpage using appendChild. This allows JavaScript to insert content into the existing DOM structure.",
  fileName: "append.js",
  code: `list.appendChild(li);`,
}),

createExercise({
  id: 86,
  language: "JavaScript",
  category: "Storage",
  difficulty: "Advanced",
  title: "Save Local Storage",
  description:
    "Learn how to save data in the browser using localStorage. Local storage allows applications to remember information even after the user closes the page.",
  fileName: "save.js",
  code: `localStorage.setItem("theme", "dark");`,
}),

createExercise({
  id: 87,
  language: "JavaScript",
  category: "Storage",
  difficulty: "Advanced",
  title: "Read Local Storage",
  description:
    "Learn how to retrieve saved browser data using localStorage.getItem. Reading stored values allows applications to restore previous user settings or preferences.",
  fileName: "read.js",
  code: `const theme = localStorage.getItem("theme");`,
}),

createExercise({
  id: 88,
  language: "JavaScript",
  category: "Storage",
  difficulty: "Advanced",
  title: "Remove Local Storage",
  description:
    "Learn how to delete saved browser data using localStorage.removeItem. Removing stored values is useful when resetting preferences or clearing saved information.",
  fileName: "remove.js",
  code: `localStorage.removeItem("theme");`,
}),

createExercise({
  id: 89,
  language: "JavaScript",
  category: "Forms",
  difficulty: "Advanced",
  title: "Prevent Default",
  description:
    "Learn how to prevent the browser's default behavior when handling forms. Preventing default actions allows JavaScript to control submissions and create custom user experiences.",
  fileName: "form.js",
  code: `form.addEventListener("submit", (event) => {
  event.preventDefault();
});`,
}),

createExercise({
  id: 90,
  language: "JavaScript",
  category: "Forms",
  difficulty: "Advanced",
  title: "Read Input Value",
  description:
    "Learn how to access values entered by users in form inputs. Reading input values is a key part of handling forms, validation, and user interactions.",
  fileName: "input.js",
  code: `const username = input.value;`,
}),

createExercise({
  id: 91,
  language: "JavaScript",
  category: "Fetch",
  difficulty: "Advanced",
  title: "POST Request",
  description:
    "Learn how to send data to an API using a POST request with fetch. POST requests are commonly used when creating new records, submitting forms, or sending user information to a backend server.",
  fileName: "post.js",
  code: `await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});`,
}),

createExercise({
  id: 92,
  language: "JavaScript",
  category: "Async",
  difficulty: "Advanced",
  title: "Promise.all",
  description:
    "Learn how to run multiple asynchronous operations at the same time using Promise.all. This allows applications to wait for multiple requests to finish before continuing.",
  fileName: "promiseAll.js",
  code: `const results = await Promise.all([
  getUsers(),
  getTeams(),
]);`,
}),

createExercise({
  id: 93,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Advanced",
  title: "Flat Map",
  description:
    "Learn how to transform and flatten arrays at the same time using flatMap. This method is useful when working with nested data that needs to become a single list.",
  fileName: "flatMap.js",
  code: `const words = sentences.flatMap((sentence) => {
  return sentence.split(" ");
});`,
}),

createExercise({
  id: 94,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Advanced",
  title: "Merge Objects",
  description:
    "Learn how to combine multiple objects together using the spread operator. Merging objects is commonly used when creating updated versions of data without changing the originals.",
  fileName: "merge.js",
  code: `const settings = {
  ...defaults,
  ...userSettings,
};`,
}),

createExercise({
  id: 95,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Advanced",
  title: "Higher Order Function",
  description:
    "Learn how functions can return other functions. Higher order functions are a powerful JavaScript concept commonly used with callbacks, array methods, and functional programming patterns.",
  fileName: "higherOrder.js",
  code: `function multiply(multiplier) {
  return (number) => {
    return number * multiplier;
  };
}`,
}),

createExercise({
  id: 96,
  language: "JavaScript",
  category: "Functions",
  difficulty: "Advanced",
  title: "Closure",
  description:
    "Learn how closures allow functions to remember variables from their outer scope even after the outer function has finished running. Closures are commonly used for private data and state management.",
  fileName: "closure.js",
  code: `function counter() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}`,
}),

createExercise({
  id: 97,
  language: "JavaScript",
  category: "Errors",
  difficulty: "Advanced",
  title: "Finally Block",
  description:
    "Learn how to run cleanup code with the finally block. Finally executes whether an error occurs or not and is useful for closing connections, resetting states, or finishing tasks.",
  fileName: "finally.js",
  code: `try {
  await getUsers();
} catch (error) {
  console.error(error);
} finally {
  console.log("Finished");
}`,
}),

createExercise({
  id: 98,
  language: "JavaScript",
  category: "Objects",
  difficulty: "Advanced",
  title: "Freeze Object",
  description:
    "Learn how to prevent changes to an object using Object.freeze. Freezing objects helps protect important configuration values from being accidentally modified.",
  fileName: "freeze.js",
  code: `const config = {
  theme: "dark",
};

Object.freeze(config);`,
}),

createExercise({
  id: 99,
  language: "JavaScript",
  category: "Arrays",
  difficulty: "Advanced",
  title: "Remove Duplicates",
  description:
    "Learn how to remove duplicate values from an array using a Set. This is a common technique for cleaning data and ensuring collections only contain unique values.",
  fileName: "duplicates.js",
  code: `const uniqueNumbers = [
  ...new Set(numbers),
];`,
}),

createExercise({
  id: 100,
  language: "JavaScript",
  category: "Interview",
  difficulty: "Advanced",
  title: "Frequency Counter",
  description:
    "Learn how to count how often values appear in a collection using an object as a frequency counter. This pattern is commonly used in coding interviews and data processing problems.",
  fileName: "frequency.js",
  code: `const counts = {};

for (const word of words) {
  counts[word] =
    (counts[word] || 0) + 1;
}`,
}),
  
];
export default javascriptExercises;