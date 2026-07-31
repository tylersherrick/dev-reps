import { createExercise } from "../exercises";

const htmlExercises = [
  createExercise({
    id: 3001,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Basic HTML Document",
    description: "",
    fileName: "index.html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>

</body>
</html>`,
  }),

  createExercise({
    id: 3002,
    language: "HTML",
    category: "Elements",
    difficulty: "Beginner",
    title: "Heading and Paragraph",
    description: "",
    fileName: "index.html",
    code: `<h1>Welcome</h1>

<p>
  This is my website.
</p>`,
  }),

  createExercise({
    id: 3003,
    language: "HTML",
    category: "Links",
    difficulty: "Beginner",
    title: "Anchor Tag",
    description: "",
    fileName: "index.html",
    code: `<a
  href="https://google.com"
  target="_blank"
>
  Google
</a>`,
  }),

  createExercise({
    id: 3004,
    language: "HTML",
    category: "Images",
    difficulty: "Beginner",
    title: "Image",
    description: "",
    fileName: "index.html",
    code: `<img
  src="./images/logo.png"
  alt="Company Logo"
/>`,
  }),

  createExercise({
    id: 3005,
    language: "HTML",
    category: "Lists",
    difficulty: "Beginner",
    title: "Unordered List",
    description: "",
    fileName: "index.html",
    code: `<ul>
  <li>JavaScript</li>
  <li>React</li>
  <li>Express</li>
</ul>`,
  }),
];

export default htmlExercises;