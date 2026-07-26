import { createExercise } from "../exercises";

const javascriptExercises = [
  createExercise({
    id: 1,
    language: "JavaScript",
    category: "Variables",
    difficulty: "Beginner",
    title: "String Variables",
    description: "Declare string variables.",
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
    description: "Declare numeric variables.",
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
    description: "Store boolean values.",
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
    description: "Combine strings.",
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
    description: "Create an array.",
    fileName: "array.js",
    code: `const colors = [
  "red",
  "green",
  "blue",
];`,
  }),

  createExercise({
    id: 6,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Beginner",
    title: "Numbers Array",
    description: "Store numbers.",
    fileName: "numbersArray.js",
    code: `const scores = [
  90,
  84,
  76,
  100,
];`,
  }),

  createExercise({
    id: 7,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Beginner",
    title: "Object Literal",
    description: "Basic object.",
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
    description: "Object inside an object.",
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
    description: "Function declaration.",
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
    description: "Arrow syntax.",
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
    description: "Function with two parameters.",
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
    description: "Basic condition.",
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
    description: "If/else statement.",
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
    description: "Multiple conditions.",
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
    title: "Switch",
    description: "Switch statement.",
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
    description: "Count to ten.",
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
    description: "Basic while loop.",
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
    title: "For Of",
    description: "Loop over values.",
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
    title: "For In",
    description: "Loop over object keys.",
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
    title: "Push",
    description: "Add an item.",
    fileName: "push.js",
    code: `const teams = [
  "Phillies",
  "Yankees",
];

teams.push("Dodgers");`,
  }),

  createExercise({
    id: 21,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Beginner",
    title: "Pop",
    description: "Remove the last item.",
    fileName: "pop.js",
    code: `const teams = [
  "Phillies",
  "Yankees",
];

teams.pop();`,
  }),

  createExercise({
    id: 22,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Beginner",
    title: "Shift",
    description: "Remove the first item.",
    fileName: "shift.js",
    code: `const teams = [
  "Phillies",
  "Yankees",
];

teams.shift();`,
  }),

  createExercise({
    id: 23,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Beginner",
    title: "Unshift",
    description: "Add an item to the beginning.",
    fileName: "unshift.js",
    code: `const teams = [
  "Yankees",
  "Dodgers",
];

teams.unshift("Phillies");`,
  }),

  createExercise({
    id: 24,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Beginner",
    title: "Uppercase",
    description: "Convert text.",
    fileName: "uppercase.js",
    code: `const team = "phillies";

const upper = team.toUpperCase();`,
  }),

  createExercise({
    id: 25,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Beginner",
    title: "Split",
    description: "Split a string into an array.",
    fileName: "split.js",
    code: `const sentence = "Learn JavaScript Today";

const words = sentence.split(" ");`,
  }),

  createExercise({
    id: 26,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Beginner",
    title: "Replace Text",
    description: "Replace part of a string.",
    fileName: "replace.js",
    code: `const team = "Phillies";

const updated = team.replace(
  "Phillies",
  "Eagles"
);`,
  }),

  createExercise({
    id: 27,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Beginner",
    title: "Includes",
    description: "Check if a string contains text.",
    fileName: "includes.js",
    code: `const sentence = "Learn JavaScript";

const hasJavaScript =
  sentence.includes("JavaScript");`,
  }),

  createExercise({
    id: 28,
    language: "JavaScript",
    category: "Numbers",
    difficulty: "Beginner",
    title: "Math.max",
    description: "Find the largest number.",
    fileName: "mathMax.js",
    code: `const highest = Math.max(
  12,
  44,
  18,
  99
);`,
  }),

  createExercise({
    id: 29,
    language: "JavaScript",
    category: "Numbers",
    difficulty: "Beginner",
    title: "Random Number",
    description: "Generate a random integer.",
    fileName: "random.js",
    code: `const randomNumber =
  Math.floor(Math.random() * 100);`,
  }),

  createExercise({
    id: 30,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Map",
    description: "Create a new array.",
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
    title: "Filter",
    description: "Filter an array.",
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
    title: "Find",
    description: "Find one item.",
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
    title: "Some",
    description: "Check if any items match.",
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
    title: "Every",
    description: "Check if all items match.",
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
    title: "Reduce",
    description: "Sum an array.",
    fileName: "reduce.js",
    code: `const total = prices.reduce(
  (sum, price) => {
    return sum + price;
  },
  0
);`,
  }),

  createExercise({
    id: 36,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Intermediate",
    title: "Object Destructuring",
    description: "Extract object values.",
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
    description: "Extract array values.",
    fileName: "arrayDestructure.js",
    code: `const scores = [
  95,
  88,
  76,
];

const [first, second] = scores;`,
  }),

  createExercise({
    id: 38,
    language: "JavaScript",
    category: "Operators",
    difficulty: "Intermediate",
    title: "Spread Operator",
    description: "Copy an array.",
    fileName: "spread.js",
    code: `const updatedTeams = [
  ...teams,
  "Mets",
];`,
  }),

  createExercise({
    id: 39,
    language: "JavaScript",
    category: "Functions",
    difficulty: "Intermediate",
    title: "Rest Parameters",
    description: "Collect remaining arguments.",
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
    description: "Use a default value.",
    fileName: "default.js",
    code: `function greet(
  name = "Guest"
) {
  return \`Hello \${name}\`;
}`,
  }),

  createExercise({
    id: 41,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Intermediate",
    title: "Object Keys",
    description: "Get all object keys.",
    fileName: "keys.js",
    code: `const keys = Object.keys(user);`,
  }),

  createExercise({
    id: 42,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Intermediate",
    title: "Object Values",
    description: "Get all object values.",
    fileName: "values.js",
    code: `const values =
  Object.values(user);`,
  }),

  createExercise({
    id: 43,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Intermediate",
    title: "Object Entries",
    description: "Get key/value pairs.",
    fileName: "entries.js",
    code: `const entries =
  Object.entries(user);`,
  }),

  createExercise({
    id: 44,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Sort Numbers",
    description: "Sort ascending.",
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
    title: "Reverse",
    description: "Reverse an array.",
    fileName: "reverse.js",
    code: `const reversed =
  numbers.reverse();`,
  }),

  createExercise({
    id: 46,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Slice",
    description: "Copy part of an array.",
    fileName: "slice.js",
    code: `const firstThree =
  numbers.slice(0, 3);`,
  }),

  createExercise({
    id: 47,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Splice",
    description: "Remove an item.",
    fileName: "splice.js",
    code: `numbers.splice(2, 1);`,
  }),

  createExercise({
    id: 48,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Join",
    description: "Join array into a string.",
    fileName: "join.js",
    code: `const result =
  teams.join(", ");`,
  }),

  createExercise({
    id: 49,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Intermediate",
    title: "Trim",
    description: "Remove whitespace.",
    fileName: "trim.js",
    code: `const username =
  input.trim();`,
  }),

  createExercise({
    id: 50,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Chaining Methods",
    description: "Filter then map.",
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
    description: "Pass a function as an argument.",
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
    description: "Use an inline callback.",
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
    description: "Run code later.",
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
    description: "Run repeatedly.",
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
    description: "Convert JSON to an object.",
    fileName: "jsonParse.js",
    code: `const json =
  '{"name":"John"}';

const user =
  JSON.parse(json);`,
  }),

  createExercise({
    id: 56,
    language: "JavaScript",
    category: "JSON",
    difficulty: "Intermediate",
    title: "JSON Stringify",
    description: "Convert an object to JSON.",
    fileName: "jsonStringify.js",
    code: `const json =
  JSON.stringify(user);`,
  }),

  createExercise({
    id: 57,
    language: "JavaScript",
    category: "Promises",
    difficulty: "Intermediate",
    title: "Create a Promise",
    description: "Basic promise.",
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
    description: "Handle a promise.",
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
    description: "Declare an async function.",
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
    description: "Await a promise.",
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
    description: "Fetch data from an API.",
    fileName: "fetch.js",
    code: `const response = await fetch("/api/users");`,
  }),

  createExercise({
    id: 62,
    language: "JavaScript",
    category: "Fetch",
    difficulty: "Intermediate",
    title: "Read JSON",
    description: "Parse JSON response.",
    fileName: "responseJson.js",
    code: `const users =
  await response.json();`,
  }),

  createExercise({
    id: 63,
    language: "JavaScript",
    category: "Errors",
    difficulty: "Intermediate",
    title: "Try Catch",
    description: "Handle errors.",
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
    description: "Throw an error.",
    fileName: "throw.js",
    code: `throw new Error(
  "Something went wrong"
);`,
  }),

  createExercise({
    id: 65,
    language: "JavaScript",
    category: "Sets",
    difficulty: "Intermediate",
    title: "Create Set",
    description: "Unique values.",
    fileName: "set.js",
    code: `const ids = new Set([
  1,
  2,
  3,
]);`,
  }),

  createExercise({
    id: 66,
    language: "JavaScript",
    category: "Sets",
    difficulty: "Intermediate",
    title: "Add to Set",
    description: "Insert a value.",
    fileName: "setAdd.js",
    code: `ids.add(4);`,
  }),

  createExercise({
    id: 67,
    language: "JavaScript",
    category: "Maps",
    difficulty: "Intermediate",
    title: "Create Map",
    description: "Store key/value pairs.",
    fileName: "mapObject.js",
    code: `const scores = new Map();`,
  }),

  createExercise({
    id: 68,
    language: "JavaScript",
    category: "Maps",
    difficulty: "Intermediate",
    title: "Map Set",
    description: "Store a value.",
    fileName: "mapSet.js",
    code: `scores.set(
  "John",
  98
);`,
  }),

  createExercise({
    id: 69,
    language: "JavaScript",
    category: "Dates",
    difficulty: "Intermediate",
    title: "Current Date",
    description: "Create today's date.",
    fileName: "date.js",
    code: `const today =
  new Date();`,
  }),

  createExercise({
    id: 70,
    language: "JavaScript",
    category: "Dates",
    difficulty: "Intermediate",
    title: "Current Year",
    description: "Get the year.",
    fileName: "year.js",
    code: `const year =
  today.getFullYear();`,
  }),

  createExercise({
    id: 71,
    language: "JavaScript",
    category: "Strings",
    difficulty: "Intermediate",
    title: "Pad Start",
    description: "Pad a string.",
    fileName: "padStart.js",
    code: `const number =
  "7".padStart(2, "0");`,
  }),

  createExercise({
    id: 72,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Flat",
    description: "Flatten an array.",
    fileName: "flat.js",
    code: `const values = [
  [1, 2],
  [3, 4],
];

const result =
  values.flat();`,
  }),

  createExercise({
    id: 73,
    language: "JavaScript",
    category: "Operators",
    difficulty: "Intermediate",
    title: "Nullish Coalescing",
    description: "Provide a default.",
    fileName: "nullish.js",
    code: `const username =
  user.name ?? "Guest";`,
  }),

  createExercise({
    id: 74,
    language: "JavaScript",
    category: "Operators",
    difficulty: "Intermediate",
    title: "Optional Chaining",
    description: "Safely access properties.",
    fileName: "optionalChaining.js",
    code: `const city =
  user.address?.city;`,
  }),

  createExercise({
    id: 75,
    language: "JavaScript",
    category: "Arrays",
    difficulty: "Intermediate",
    title: "Find Index",
    description: "Find an element index.",
    fileName: "findIndex.js",
    code: `const index =
  users.findIndex((user) => {
    return user.id === 5;
  });`,
  }),

    createExercise({
    id: 76,
    language: "JavaScript",
    category: "Classes",
    difficulty: "Advanced",
    title: "Basic Class",
    description: "Create a class.",
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
    description: "Add a method.",
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
    description: "Named export.",
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
    description: "Named import.",
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
    description: "Select an element.",
    fileName: "dom.js",
    code: `const button =
  document.querySelector("button");`,
  }),

  createExercise({
    id: 81,
    language: "JavaScript",
    category: "DOM",
    difficulty: "Advanced",
    title: "Add Event Listener",
    description: "Listen for clicks.",
    fileName: "event.js",
    code: `button.addEventListener(
  "click",
  () => {
    console.log("Clicked");
  }
);`,
  }),

  createExercise({
    id: 82,
    language: "JavaScript",
    category: "DOM",
    difficulty: "Advanced",
    title: "Change Text",
    description: "Update content.",
    fileName: "text.js",
    code: `const heading =
  document.querySelector("h1");

heading.textContent =
  "Welcome";`,
  }),

  createExercise({
    id: 83,
    language: "JavaScript",
    category: "DOM",
    difficulty: "Advanced",
    title: "Toggle Class",
    description: "Toggle a CSS class.",
    fileName: "toggle.js",
    code: `button.classList.toggle(
  "active"
);`,
  }),

  createExercise({
    id: 84,
    language: "JavaScript",
    category: "DOM",
    difficulty: "Advanced",
    title: "Create Element",
    description: "Create a DOM node.",
    fileName: "create.js",
    code: `const li =
  document.createElement("li");

li.textContent = "Phillies";`,
  }),

  createExercise({
    id: 85,
    language: "JavaScript",
    category: "DOM",
    difficulty: "Advanced",
    title: "Append Child",
    description: "Insert an element.",
    fileName: "append.js",
    code: `list.appendChild(li);`,
  }),

  createExercise({
    id: 86,
    language: "JavaScript",
    category: "Storage",
    difficulty: "Advanced",
    title: "Save Local Storage",
    description: "Store data.",
    fileName: "save.js",
    code: `localStorage.setItem(
  "theme",
  "dark"
);`,
  }),

  createExercise({
    id: 87,
    language: "JavaScript",
    category: "Storage",
    difficulty: "Advanced",
    title: "Read Local Storage",
    description: "Retrieve data.",
    fileName: "read.js",
    code: `const theme =
  localStorage.getItem("theme");`,
  }),

  createExercise({
    id: 88,
    language: "JavaScript",
    category: "Storage",
    difficulty: "Advanced",
    title: "Remove Local Storage",
    description: "Delete data.",
    fileName: "remove.js",
    code: `localStorage.removeItem(
  "theme"
);`,
  }),

  createExercise({
    id: 89,
    language: "JavaScript",
    category: "Forms",
    difficulty: "Advanced",
    title: "Prevent Default",
    description: "Handle a form submit.",
    fileName: "form.js",
    code: `form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
  }
);`,
  }),

  createExercise({
    id: 90,
    language: "JavaScript",
    category: "Forms",
    difficulty: "Advanced",
    title: "Read Input",
    description: "Get an input value.",
    fileName: "input.js",
    code: `const username =
  input.value;`,
  }),

  createExercise({
    id: 91,
    language: "JavaScript",
    category: "Fetch",
    difficulty: "Advanced",
    title: "POST Request",
    description: "Send JSON data.",
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
    description: "Run multiple requests.",
    fileName: "promiseAll.js",
    code: `const results =
  await Promise.all([
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
    description: "Flatten while mapping.",
    fileName: "flatMap.js",
    code: `const words =
  sentences.flatMap((sentence) => {
    return sentence.split(" ");
  });`,
  }),

  createExercise({
    id: 94,
    language: "JavaScript",
    category: "Objects",
    difficulty: "Advanced",
    title: "Merge Objects",
    description: "Combine two objects.",
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
    description: "Return a function.",
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
    description: "Remember outer scope.",
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
    title: "Finally",
    description: "Always execute cleanup.",
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
    description: "Prevent changes.",
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
    description: "Use a Set.",
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
    description: "Count occurrences.",
    fileName: "frequency.js",
    code: `const counts = {};

for (const word of words) {
  counts[word] =
    (counts[word] || 0) + 1;
}`,
  }),
];
export default javascriptExercises;