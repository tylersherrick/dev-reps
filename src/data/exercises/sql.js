import { createExercise } from "../exercises";

const sqlExercises = [
  createExercise({
    id: 5001,
    language: "SQL",
    category: "Queries",
    difficulty: "Beginner",
    title: "Select All",
    description: "",
    fileName: "queries.sql",
    code: `SELECT *
FROM users;`,
  }),

  createExercise({
    id: 5002,
    language: "SQL",
    category: "Filtering",
    difficulty: "Beginner",
    title: "WHERE Clause",
    description: "",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
WHERE age >= 18;`,
  }),

  createExercise({
    id: 5003,
    language: "SQL",
    category: "Sorting",
    difficulty: "Beginner",
    title: "ORDER BY",
    description: "",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
ORDER BY price DESC;`,
  }),

  createExercise({
    id: 5004,
    language: "SQL",
    category: "Joining",
    difficulty: "Intermediate",
    title: "INNER JOIN",
    description: "",
    fileName: "queries.sql",
    code: `SELECT users.name,
       orders.total
FROM users
JOIN orders
ON users.id = orders.user_id;`,
  }),

  createExercise({
    id: 5005,
    language: "SQL",
    category: "Grouping",
    difficulty: "Intermediate",
    title: "GROUP BY",
    description: "",
    fileName: "queries.sql",
    code: `SELECT department,
       COUNT(*) AS employees
FROM staff
GROUP BY department;`,
  }),
];

export default sqlExercises;