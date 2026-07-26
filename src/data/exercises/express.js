import { createExercise } from "../exercises";

const expressExercises = [
  createExercise({
    id: 2001,
    language: "Express",
    category: "Server",
    difficulty: "Beginner",
    title: "Basic Server",
    description: "",
    fileName: "server.js",
    code: `import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});`,
  }),

  createExercise({
    id: 2002,
    language: "Express",
    category: "Routes",
    difficulty: "Beginner",
    title: "GET Route",
    description: "",
    fileName: "server.js",
    code: `import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);`,
  }),

  createExercise({
    id: 2003,
    language: "Express",
    category: "Middleware",
    difficulty: "Beginner",
    title: "JSON Middleware",
    description: "",
    fileName: "server.js",
    code: `import express from "express";

const app = express();

app.use(express.json());

app.listen(3000);`,
  }),

  createExercise({
    id: 2004,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "Route Parameters",
    description: "",
    fileName: "server.js",
    code: `app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});`,
  }),

  createExercise({
    id: 2005,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "POST Route",
    description: "",
    fileName: "server.js",
    code: `app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).send(user);
});`,
  }),
];

export default expressExercises;