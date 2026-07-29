import { createExercise } from "../exercises";

const expressExercises = [
  createExercise({
    id: 2001,
    language: "Express",
    category: "Server",
    difficulty: "Beginner",
    title: "Basic Express Server",
    description:
      "Learn how to create the foundation of an Express application. A server listens for incoming requests and provides a place to define routes and backend logic.",
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
    description:
      "Learn how to create a GET route that sends data back to a client. GET routes are commonly used when retrieving information from an API.",
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
    description:
      "Learn how Express middleware processes incoming requests. express.json allows your server to read JSON data sent from a frontend application.",
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
    description:
      "Learn how to capture dynamic values from URLs using route parameters. Route parameters are commonly used when requesting specific resources like users, projects, or tasks.",
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
    description:
      "Learn how to create a POST route for receiving new data from a client. POST routes are commonly used when creating users, projects, tasks, or other database records.",
    fileName: "server.js",
    code: `app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).send(user);
});`,
  }),

    createExercise({
    id: 2006,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "GET Single Resource",
    description:
      "Learn how to create a route that retrieves one specific resource. This pattern is commonly used for endpoints like getting one user, project, task, or product by its ID.",
    fileName: "server.js",
    code: `app.get("/users/:id", async (req, res) => {
  const user = await getUserById(req.params.id);

  res.send(user);
});`,
  }),

  createExercise({
    id: 2007,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "DELETE Route",
    description:
      "Learn how to create a DELETE route for removing data. DELETE endpoints are commonly used when deleting users, tasks, projects, or other database records.",
    fileName: "server.js",
    code: `app.delete("/users/:id", async (req, res) => {
  await deleteUser(req.params.id);

  res.sendStatus(204);
});`,
  }),

  createExercise({
    id: 2008,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "PUT Route",
    description:
      "Learn how to update existing data with a PUT route. PUT requests are commonly used when editing complete records like user profiles or project information.",
    fileName: "server.js",
    code: `app.put("/users/:id", async (req, res) => {
  const updatedUser = await updateUser(req.params.id, req.body);

  res.send(updatedUser);
});`,
  }),

  createExercise({
    id: 2009,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "Router File",
    description:
      "Learn how to organize Express routes into separate files using routers. Splitting routes keeps larger applications easier to maintain and is common in production projects.",
    fileName: "users.js",
    code: `import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users");
});

export default router;`,
  }),

  createExercise({
    id: 2010,
    language: "Express",
    category: "Routes",
    difficulty: "Intermediate",
    title: "Mount Router",
    description:
      "Learn how to connect a router file to your main Express application. Mounting routers allows different sections of an API to have their own route files.",
    fileName: "server.js",
    code: `import userRouter from "./users.js";

app.use("/users", userRouter);`,
  }),

    createExercise({
    id: 2011,
    language: "Express",
    category: "Middleware",
    difficulty: "Intermediate",
    title: "Custom Middleware",
    description:
      "Learn how to create your own middleware functions. Middleware runs between the request and response cycle and is commonly used for logging, authentication, and validation.",
    fileName: "middleware.js",
    code: `function logger(req, res, next) {
  console.log(req.method, req.url);

  next();
}

app.use(logger);`,
  }),

  createExercise({
    id: 2012,
    language: "Express",
    category: "Middleware",
    difficulty: "Intermediate",
    title: "Request Validation",
    description:
      "Learn how middleware can validate incoming request data before it reaches your route. Validation helps prevent invalid data from being stored in your database.",
    fileName: "validation.js",
    code: `function requireBody(req, res, next) {
  if (!req.body.name) {
    return res.status(400).send("Missing name");
  }

  next();
}`,
  }),

  createExercise({
    id: 2013,
    language: "Express",
    category: "Middleware",
    difficulty: "Intermediate",
    title: "Error Middleware",
    description:
      "Learn how Express handles errors with special middleware. Centralized error handling keeps routes cleaner and provides consistent responses when problems occur.",
    fileName: "error.js",
    code: `function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).send("Server Error");
}

app.use(errorHandler);`,
  }),

  createExercise({
    id: 2014,
    language: "Express",
    category: "Middleware",
    difficulty: "Intermediate",
    title: "Authentication Middleware",
    description:
      "Learn how middleware can protect routes by checking whether a user is authenticated. Protected routes are commonly used for accounts, dashboards, and private data.",
    fileName: "auth.js",
    code: `function requireUser(req, res, next) {
  if (!req.user) {
    return res.sendStatus(401);
  }

  next();
}

app.get("/profile", requireUser, (req, res) => {
  res.send(req.user);
});`,
  }),

  createExercise({
    id: 2015,
    language: "Express",
    category: "Middleware",
    difficulty: "Intermediate",
    title: "Middleware Order",
    description:
      "Learn why the order of Express middleware matters. Middleware runs from top to bottom, so placing authentication, JSON parsing, or logging in the correct order affects how your application works.",
    fileName: "server.js",
    code: `app.use(express.json());

app.use(logger);

app.use("/users", userRouter);`,
  }),

    createExercise({
    id: 2016,
    language: "Express",
    category: "Authentication",
    difficulty: "Intermediate",
    title: "Hash Password",
    description:
      "Learn how to securely store user passwords using bcrypt. Passwords should never be saved as plain text, so applications hash them before storing them in a database.",
    fileName: "auth.js",
    code: `import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash(password, 10);`,
  }),

  createExercise({
    id: 2017,
    language: "Express",
    category: "Authentication",
    difficulty: "Intermediate",
    title: "Compare Password",
    description:
      "Learn how to compare a user's password with a stored hash during login. bcrypt compares the values securely without exposing the original password.",
    fileName: "auth.js",
    code: `const valid = const valid = await bcrypt.compare(password, user.password);`,
  }),

  createExercise({
    id: 2018,
    language: "Express",
    category: "Authentication",
    difficulty: "Intermediate",
    title: "Create JWT Token",
    description:
      "Learn how to create authentication tokens using JSON Web Tokens. JWTs allow servers to identify logged-in users without storing session information on the server.",
    fileName: "jwt.js",
    code: `const token = jwt.sign(
  { id: user.id },
  process.env.JWT_SECRET
);`,
  }),

  createExercise({
    id: 2019,
    language: "Express",
    category: "Authentication",
    difficulty: "Intermediate",
    title: "Verify JWT Token",
    description:
      "Learn how to verify a JWT token sent by a client. Verification allows protected routes to confirm that a request comes from an authenticated user.",
    fileName: "jwt.js",
    code: `const payload = jwt.verify(token, process.env.JWT_SECRET);`,
  }),

  createExercise({
    id: 2020,
    language: "Express",
    category: "Authentication",
    difficulty: "Intermediate",
    title: "Bearer Token",
    description:
      "Learn how authenticated requests send JWT tokens using the Authorization header. Bearer tokens are commonly used when connecting React applications to Express APIs.",
    fileName: "auth.js",
    code: `const auth = req.headers.authorization;

const token = auth.replace("Bearer ", "");`,
  }),

    createExercise({
    id: 2021,
    language: "Express",
    category: "Database",
    difficulty: "Intermediate",
    title: "Get All Records",
    description:
      "Learn how to connect an Express route to a database query. This pattern is commonly used for retrieving lists of records like users, projects, tasks, or products.",
    fileName: "users.js",
    code: `app.get("/users", async (req, res) => {
  const users = await getUsers();

  res.send(users);
});`,
  }),

  createExercise({
    id: 2022,
    language: "Express",
    category: "Database",
    difficulty: "Intermediate",
    title: "Handle Missing Record",
    description:
      "Learn how to check whether a database result exists before sending a response. Handling missing records prevents errors and allows APIs to return proper status codes.",
    fileName: "users.js",
    code: `const user = await getUserById(id);

if (!user) {
  return res.sendStatus(404);
}

res.send(user);`,
  }),

  createExercise({
    id: 2023,
    language: "Express",
    category: "Database",
    difficulty: "Intermediate",
    title: "Create Database Record",
    description:
      "Learn how POST routes connect incoming request data to database creation functions. This pattern is used when creating users, tasks, projects, and other resources.",
    fileName: "users.js",
    code: `const user = await createUser(req.body);

res.status(201).send(user);`,
  }),

  createExercise({
    id: 2024,
    language: "Express",
    category: "Database",
    difficulty: "Intermediate",
    title: "Update Database Record",
    description:
      "Learn how to update existing records through an API route. Update routes commonly receive an ID and new data, then save the changes to the database.",
    fileName: "users.js",
    code: `const user = await updateUser(req.params.id, req.body);

res.send(user);`,
  }),

  createExercise({
    id: 2025,
    language: "Express",
    category: "Database",
    difficulty: "Intermediate",
    title: "Delete Database Record",
    description:
      "Learn how DELETE routes remove records from a database. This pattern is commonly used for deleting accounts, tasks, projects, or other stored information.",
    fileName: "users.js",
    code: `await deleteUser(req.params.id);

res.sendStatus(204);`,
  }),

    createExercise({
    id: 2026,
    language: "Express",
    category: "API Design",
    difficulty: "Intermediate",
    title: "REST Resource Naming",
    description:
      "Learn how to design API routes using REST conventions. REST APIs use clear resource names like users, projects, and tasks instead of describing actions in the URL.",
    fileName: "routes.js",
    code: `app.get("/projects", getProjects);

app.get("/projects/:id", getProject);`,
  }),

  createExercise({
    id: 2027,
    language: "Express",
    category: "API Design",
    difficulty: "Intermediate",
    title: "HTTP Status Codes",
    description:
      "Learn how to send the correct HTTP status codes from your API. Status codes communicate whether a request succeeded, failed, or needs additional action.",
    fileName: "status.js",
    code: `res.status(201).send(newUser);

res.status(404).send("Not Found");`,
  }),

  createExercise({
    id: 2028,
    language: "Express",
    category: "API Design",
    difficulty: "Intermediate",
    title: "Controller Function",
    description:
      "Learn how to separate route logic into controller functions. Controllers keep route files clean by moving database and business logic into organized functions.",
    fileName: "controllers.js",
    code: `async function getUsers(req, res) {
  const users = await findUsers();

  res.send(users);
}`,
  }),

  createExercise({
    id: 2029,
    language: "Express",
    category: "API Design",
    difficulty: "Intermediate",
    title: "Async Route Error Handling",
    description:
      "Learn how to handle errors inside asynchronous routes. Database calls and API requests can fail, so proper error handling prevents unexpected server crashes.",
    fileName: "routes.js",
    code: `app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();

    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});`,
  }),

  createExercise({
    id: 2030,
    language: "Express",
    category: "API Design",
    difficulty: "Intermediate",
    title: "Request Validation Pattern",
    description:
      "Learn how APIs validate incoming data before creating or updating records. Validation protects your database by ensuring required information is provided.",
    fileName: "validation.js",
    code: `if (!req.body.email) {
  return res.status(400).send("Email required");
}

next();`,
  }),

    createExercise({
    id: 2031,
    language: "Express",
    category: "Authentication",
    difficulty: "Advanced",
    title: "Register User Flow",
    description:
      "Learn the typical process for creating a user account. Registration usually includes validating input, hashing the password, saving the user, and returning a safe response without exposing sensitive information.",
    fileName: "register.js",
    code: `const hashedPassword = await bcrypt.hash(password, 10);

const user = await createUser({ email, password: hashedPassword, });

res.status(201).send(user);`,
  }),

  createExercise({
    id: 2032,
    language: "Express",
    category: "Authentication",
    difficulty: "Advanced",
    title: "Login User Flow",
    description:
      "Learn the typical login process in an Express application. Login routes verify credentials, create authentication tokens, and return information needed by the frontend.",
    fileName: "login.js",
    code: `const valid = await bcrypt.compare(password, user.password);

const token = jwt.sign({ id: user.id }, secret);

res.send({ token });`,
  }),

  createExercise({
    id: 2033,
    language: "Express",
    category: "Authorization",
    difficulty: "Advanced",
    title: "Admin Middleware",
    description:
      "Learn how to restrict routes based on user permissions. Authorization checks whether an authenticated user has the correct role before allowing access.",
    fileName: "admin.js",
    code: `function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }

  next();
}`,
  }),

  createExercise({
    id: 2034,
    language: "Express",
    category: "Authorization",
    difficulty: "Advanced",
    title: "Owner Check",
    description:
      "Learn how APIs verify that a user owns the resource they are trying to modify. Ownership checks prevent users from editing or deleting someone else's data.",
    fileName: "owner.js",
    code: `if (task.created_by !== req.user.id) {
  return res.sendStatus(403);
}

next();`,
  }),

  createExercise({
    id: 2035,
    language: "Express",
    category: "Projects",
    difficulty: "Advanced",
    title: "Create Project Route",
    description:
      "Learn how a real application creates a new resource. This pattern combines authentication, request data, database creation, and sending a response back to the frontend.",
    fileName: "projects.js",
    code: `app.post("/projects", requireUser, async (req, res) => {
  const project = await createProject(req.body);

  res.status(201).send(project);
});`,
  }),

    createExercise({
    id: 2036,
    language: "Express",
    category: "Projects",
    difficulty: "Advanced",
    title: "Get Project By ID",
    description:
      "Learn how to retrieve a single resource using an ID parameter. This pattern is used throughout APIs when loading details for a specific project, task, user, or other record.",
    fileName: "projects.js",
    code: `app.get("/projects/:id", async (req, res) => {
  const project = await getProjectById(req.params.id);

  res.send(project);
});`,
  }),

  createExercise({
    id: 2037,
    language: "Express",
    category: "Relationships",
    difficulty: "Advanced",
    title: "Add Project Member",
    description:
      "Learn how APIs handle relationships between database records. Many applications use routes like this to connect users, projects, teams, or other related resources.",
    fileName: "projectMembers.js",
    code: `app.post("/projects/:id/members", async (req, res) => {
  const member = await addMember(req.params.id, req.body.userId);

  res.status(201).send(member);
});`,
  }),

  createExercise({
    id: 2038,
    language: "Express",
    category: "Tasks",
    difficulty: "Advanced",
    title: "Create Task Route",
    description:
      "Learn how task creation works in a project management API. This pattern combines request validation, authentication, and database creation to add new work items.",
    fileName: "tasks.js",
    code: `app.post("/tasks", requireUser, async (req, res) => {
  const task = await createTask(req.body);

  res.status(201).send(task);
});`,
  }),

  createExercise({
    id: 2039,
    language: "Express",
    category: "Tasks",
    difficulty: "Advanced",
    title: "Update Task Status",
    description:
      "Learn how APIs update specific fields on existing records. Status updates are common in applications like project trackers, ticket systems, and workflow tools.",
    fileName: "tasks.js",
    code: `app.put("/tasks/:id", async (req, res) => {
  const task = await updateTask(req.params.id, req.body.status);

  res.send(task);
});`,
  }),

  createExercise({
    id: 2040,
    language: "Express",
    category: "Tasks",
    difficulty: "Advanced",
    title: "Task Notes Route",
    description:
      "Learn how applications create related records connected to a main resource. Task updates, comments, and notes are commonly stored separately and linked with IDs.",
    fileName: "taskUpdates.js",
    code: `app.post("/tasks/:id/updates", async (req, res) => {
  const update = await createUpdate(req.params.id, req.body.note);

  res.status(201).send(update);
});`,
  }),

    createExercise({
    id: 2041,
    language: "Express",
    category: "Routes",
    difficulty: "Advanced",
    title: "Query Parameters",
    description:
      "Learn how to read query parameters from a request URL. Query parameters are commonly used for filtering, searching, sorting, and pagination in APIs.",
    fileName: "routes.js",
    code: `app.get("/tasks", async (req, res) => {
  const { status } = req.query;

  const tasks = await getTasks(status);

  res.send(tasks);
});`,
  }),

  createExercise({
    id: 2042,
    language: "Express",
    category: "API Design",
    difficulty: "Advanced",
    title: "API Filtering",
    description:
      "Learn how APIs filter data based on user requests. Filtering allows clients to request only the information they need instead of loading everything.",
    fileName: "tasks.js",
    code: `const tasks = await getTasks({
    status: req.query.status,
  });

res.send(tasks);`,
  }),

  createExercise({
    id: 2043,
    language: "Express",
    category: "API Design",
    difficulty: "Advanced",
    title: "Pagination",
    description:
      "Learn how APIs limit large amounts of data using pagination. Pagination improves performance by loading smaller groups of records instead of everything at once.",
    fileName: "users.js",
    code: `const page = Number(req.query.page) || 1;

const users = await getUsers(page);

res.send(users);`,
  }),

  createExercise({
    id: 2044,
    language: "Express",
    category: "Server",
    difficulty: "Advanced",
    title: "Environment Variables",
    description:
      "Learn how applications store sensitive configuration values outside the code using environment variables. This is commonly used for database URLs, API keys, and authentication secrets.",
    fileName: ".env",
    code: `const secret = process.env.JWT_SECRET;`,
  }),

  createExercise({
    id: 2045,
    language: "Express",
    category: "Server",
    difficulty: "Advanced",
    title: "CORS Middleware",
    description:
      "Learn how CORS allows frontend applications and backend servers to communicate when they run on different domains or ports. This is commonly needed when connecting React apps to Express APIs.",
    fileName: "server.js",
    code: `import cors from "cors";

app.use(cors());`,
  }),

    createExercise({
    id: 2046,
    language: "Express",
    category: "Database",
    difficulty: "Advanced",
    title: "Include Related Data",
    description:
      "Learn how APIs return related information from connected database tables. Many applications combine data like users with projects or tasks with their updates before sending a response.",
    fileName: "projects.js",
    code: `const project = await getProjectWithMembers(req.params.id);

res.send(project);`,
  }),

  createExercise({
    id: 2047,
    language: "Express",
    category: "Database",
    difficulty: "Advanced",
    title: "Database Error Handling",
    description:
      "Learn how to safely handle database failures inside API routes. Proper error handling prevents crashes and allows your API to return useful responses.",
    fileName: "database.js",
    code: `try {
  const users = await getUsers();

  res.send(users);
} catch (error) {
  res.status(500).send(error);
}`,
  }),

  createExercise({
    id: 2048,
    language: "Express",
    category: "API Design",
    difficulty: "Advanced",
    title: "Nested Resource Route",
    description:
      "Learn how to design routes for related resources. Nested routes clearly represent relationships, such as projects containing tasks or users belonging to workspaces.",
    fileName: "routes.js",
    code: `app.get("/projects/:id/tasks", getProjectTasks);`,
  }),

  createExercise({
    id: 2049,
    language: "Express",
    category: "Architecture",
    difficulty: "Advanced",
    title: "Service Function Pattern",
    description:
      "Learn how to separate business logic from route handlers. Service functions keep Express routes smaller and make code easier to test and maintain.",
    fileName: "services.js",
    code: `async function createNewTask(data) {
  return await createTask(data);
}`,
  }),

  createExercise({
    id: 2050,
    language: "Express",
    category: "Architecture",
    difficulty: "Advanced",
    title: "Complete CRUD Feature",
    description:
      "Learn how a complete Express feature is structured. Real applications combine routes, middleware, database functions, validation, and responses into one working feature.",
    fileName: "tasks.js",
    code: `router.get("/tasks", getTasks);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);`,
  }),



];

export default expressExercises;