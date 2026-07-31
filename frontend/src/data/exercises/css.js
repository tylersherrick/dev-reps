import { createExercise } from "../exercises";

const cssExercises = [
  createExercise({
    id: 4001,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Class Selector",
    description: "",
    fileName: "styles.css",
    code: `.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
}`,
  }),

  createExercise({
    id: 4002,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Beginner",
    title: "Centered Flexbox",
    description: "",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
  }),

  createExercise({
    id: 4003,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Three Column Grid",
    description: "",
    fileName: "styles.css",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
  }),

  createExercise({
    id: 4004,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "Button Hover",
    description: "",
    fileName: "styles.css",
    code: `button {
  background: royalblue;
  color: white;
}

button:hover {
  background: navy;
}`,
  }),

  createExercise({
    id: 4005,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Fixed Header",
    description: "",
    fileName: "styles.css",
    code: `.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`,
  }),
];

export default cssExercises;