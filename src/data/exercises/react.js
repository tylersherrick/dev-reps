import { createExercise } from "../exercises";

const reactExercises = [
  createExercise({
    id: 1001,
    language: "React",
    category: "Components",
    difficulty: "Beginner",
    title: "Basic Component",
    description: "",
    fileName: "App.jsx",
    code: `function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;`,
  }),

  createExercise({
    id: 1002,
    language: "React",
    category: "Props",
    difficulty: "Beginner",
    title: "Props",
    description: "",
    fileName: "Greeting.jsx",
    code: `function Greeting({ name }) {
  return (
    <h1>Hello {name}</h1>
  );
}

export default Greeting;`,
  }),

  createExercise({
    id: 1003,
    language: "React",
    category: "State",
    difficulty: "Beginner",
    title: "useState",
    description: "",
    fileName: "Counter.jsx",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;`,
  }),
];

export default reactExercises;