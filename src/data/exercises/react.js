import { createExercise } from "../exercises";

const reactExercises = [
  createExercise({
  id: 1001,
  language: "React",
  category: "Components",
  difficulty: "Beginner",
  title: "Basic Component",
  description:
    "A React component is a reusable piece of your user interface. Components allow you to split an application into smaller, organized pieces that each have a single responsibility. Most React applications are built by combining many small components together.",
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
  description:
    "Props are how a parent component passes data to a child component. They allow the same component to display different information without rewriting the component itself. Props are read-only, meaning the receiving component should use them but never change them.",
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
  description:
    "useState gives a component memory by storing values between renders. Whenever the setter function is called, React updates the state and automatically re-renders the component so the page reflects the latest data. State should be used for values that change while the application is running.",
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

createExercise({
  id: 1004,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Multiple State",
  description:
    "A component can have as many pieces of state as it needs. Each call to useState creates an independent value with its own setter function. Keeping related values in separate state variables often makes components easier to read and maintain.",
  fileName: "Profile.jsx",
  code: `import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Tyler");
  const [age, setAge] = useState(27);

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default Profile;`,
}),

createExercise({
  id: 1005,
  language: "React",
  category: "Events",
  difficulty: "Beginner",
  title: "Button Click",
  description:
    "React uses event handlers to respond to user interactions like clicks, typing, and form submissions. Event handlers are functions that run when an event occurs. In this example, clicking the button calls the handleClick function and displays an alert.",
  fileName: "Button.jsx",
  code: `function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default Button;`,
}),

createExercise({
  id: 1006,
  language: "React",
  category: "Conditional Rendering",
  difficulty: "Beginner",
  title: "Ternary",
  description:
    "Conditional rendering allows your UI to change based on data or state. The ternary operator works like an if/else statement inside JSX, making it useful when you want to display one thing if a condition is true and something else if it is false.",
  fileName: "Status.jsx",
  code: `function Status({ loggedIn }) {
  return (
    <h1>
      {loggedIn ? "Welcome!" : "Please Log In"}
    </h1>
  );
}

export default Status;`,
}),

createExercise({
  id: 1007,
  language: "React",
  category: "Conditional Rendering",
  difficulty: "Beginner",
  title: "Logical &&",
  description:
    "Sometimes you only want to display something when a condition is true. The && operator tells React to render the code on the right only if the value on the left is true. This pattern is commonly used for buttons, messages, and sections that should only appear in certain situations.",
  fileName: "Dashboard.jsx",
  code: `function Dashboard({ isAdmin }) {
  return (
    <>
      <h1>Dashboard</h1>

      {isAdmin && <button>Delete User</button>}
    </>
  );
}

export default Dashboard;`,
}),

createExercise({
  id: 1008,
  language: "React",
  category: "Lists",
  difficulty: "Beginner",
  title: "Render List",
  description:
    "React can render collections of data by using JavaScript's map() method. Each item in the array is transformed into JSX that React displays on the page. Every rendered item should have a unique key so React can efficiently track changes to the list.",
  fileName: "FruitList.jsx",
  code: `const fruits = [
  "Apple",
  "Banana",
  "Orange",
];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;`,
}),

createExercise({
  id: 1009,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Controlled Input",
  description:
    "A controlled input is an input whose value is managed by React state instead of the browser. Every time the user types, the state updates, and React immediately re-renders the input with the latest value. This gives your application complete control over the form data.",
  fileName: "Search.jsx",
  code: `import { useState } from "react";

function Search() {
  const [text, setText] = useState("");

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Search;`,
}),

createExercise({
  id: 1010,
  language: "React",
  category: "Effects",
  difficulty: "Beginner",
  title: "useEffect",
  description:
    "useEffect is used for work that happens after React finishes rendering the page. Common examples include fetching data, starting timers, listening for browser events, or updating the document title. The empty dependency array tells React to run this effect only once when the component first mounts.",
  fileName: "App.jsx",
  code: `import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Mounted");
  }, []);

  return <h1>Hello React</h1>;
}

export default App;`,
}),

createExercise({
  id: 1011,
  language: "React",
  category: "Effects",
  difficulty: "Beginner",
  title: "Fetch Data",
  description:
    "One of the most common uses of useEffect is fetching data from an API. The effect runs after the component mounts, sends a request to the server, and can then store the returned data in state. Separating data fetching from rendering keeps components organized and easier to understand.",
  fileName: "Users.jsx",
  code: `import { useEffect } from "react";

function Users() {
  useEffect(() => {
    fetch("/api/users");
  }, []);

  return <h1>Users</h1>;
}

export default Users;`,
}),

createExercise({
  id: 1012,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Update Object",
  description:
    "Objects stored in state should never be changed directly. Instead, create a new object that copies the existing values and updates only the properties you want to change. The spread operator (...) makes this pattern simple and is used throughout React applications.",
  fileName: "Profile.jsx",
  code: `import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Tyler",
    age: 27,
  });

  function birthday() {
    setUser({
      ...user,
      age: user.age + 1,
    });
  }

  return (
    <button onClick={birthday}>
      {user.age}
    </button>
  );
}

export default Profile;`,
}),

createExercise({
  id: 1013,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Update Array",
  description:
    "Arrays in React state should also be treated as immutable, meaning you create a new array instead of modifying the existing one. Using the spread operator creates a copy of the current array and allows you to add new items while keeping the original state unchanged.",
  fileName: "Todo.jsx",
  code: `import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
  ]);

  function addItem() {
    setItems([
      ...items,
      "JavaScript",
    ]);
  }

  return (
    <button onClick={addItem}>
      Add Item
    </button>
  );
}

export default Todo;`,
}),

createExercise({
  id: 1014,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Previous State",
  description:
    "Sometimes a new state value depends on the current state value. In those situations, React recommends using the callback form of the setter function. React passes the previous state into the callback, ensuring your update always uses the latest value, even if multiple updates happen quickly.",
  fileName: "Counter.jsx",
  code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      {count}
    </button>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1015,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Remove Item",
  description:
    "Removing items from an array in React is commonly done with the filter() method. Rather than changing the original array, filter() creates a new array containing only the items you want to keep. Returning a new array allows React to detect the state change and update the UI.",
  fileName: "Todo.jsx",
  code: `import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
    "CSS",
  ]);

  function removeItem() {
    setItems(items.filter((item) => item !== "CSS"));
  }

  return <button onClick={removeItem}>Remove</button>;
}

export default Todo;`,
}),

createExercise({
  id: 1016,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Update Array Item",
  description:
    "The map() method is commonly used to update a single item inside an array. It loops through every item and returns a new array, replacing only the item that matches your condition. This lets you update state without modifying the original array.",
  fileName: "Todo.jsx",
  code: `import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
    "CSS",
  ]);

  function updateItem() {
    setItems(items.map((item) =>
      item === "CSS" ? "JavaScript" : item
    ));
  }

  return <button onClick={updateItem}>Update</button>;
}

export default Todo;`,
}),

createExercise({
  id: 1017,
  language: "React",
  category: "Props",
  difficulty: "Beginner",
  title: "Multiple Props",
  description:
    "Components can receive as many props as they need. Passing multiple props allows a component to display or use several pieces of related information without hardcoding values. This keeps components flexible and reusable throughout an application.",
  fileName: "User.jsx",
  code: `function User({ name, age }) {
  return (
    <p>
      {name} - {age}
    </p>
  );
}

export default User;`,
}),

createExercise({
  id: 1018,
  language: "React",
  category: "Props",
  difficulty: "Beginner",
  title: "Children",
  description:
    "The special children prop represents whatever JSX is placed between a component's opening and closing tags. It allows you to build wrapper or layout components that can display different content without knowing what that content will be ahead of time.",
  fileName: "Card.jsx",
  code: `function Card({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Card;`,
}),

createExercise({
  id: 1019,
  language: "React",
  category: "Styling",
  difficulty: "Beginner",
  title: "Conditional Class",
  description:
    "React makes it easy to change CSS classes based on state or props. By choosing different class names conditionally, your components can change their appearance without changing the underlying HTML structure. This is commonly used for active buttons, validation, and themes.",
  fileName: "Button.jsx",
  code: `function Button({ active }) {
  return (
    <button
      className={active ? "active" : "inactive"}
    >
      Save
    </button>
  );
}

export default Button;`,
}),

createExercise({
  id: 1020,
  language: "React",
  category: "Styling",
  difficulty: "Beginner",
  title: "Inline Styles",
  description:
    "React allows CSS to be applied directly using the style prop. Instead of a CSS string, the style prop receives a JavaScript object where property names use camelCase. Inline styles are useful for dynamic styling, but reusable styles are usually better placed in CSS files.",
  fileName: "Title.jsx",
  code: `function Title() {
  return (
    <h1 style={{ color: "blue" }}>
      Hello
    </h1>
  );
}

export default Title;`,
}),

createExercise({
  id: 1021,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Form Submit",
  description:
    "Forms allow users to send information such as login credentials, search terms, or profile updates. React listens for the form's submit event using the onSubmit prop. Calling preventDefault() stops the browser from refreshing the page so React can handle the submission instead.",
  fileName: "Login.jsx",
  code: `function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}

export default Login;`,
}),

createExercise({
  id: 1022,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Checkbox",
  description:
    "Checkboxes are controlled the same way as other form inputs, but they use the checked property instead of value. React stores whether the checkbox is checked in state, keeping the UI and your application data synchronized.",
  fileName: "Checkbox.jsx",
  code: `import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

export default Checkbox;`,
}),

createExercise({
  id: 1023,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Select Menu",
  description:
    "Select elements allow users to choose one option from a list. Just like text inputs, React controls the selected value through state. Whenever the user chooses a new option, the state updates and React re-renders the component with the latest selection.",
  fileName: "Select.jsx",
  code: `import { useState } from "react";

function Select() {
  const [color, setColor] = useState("");

  return (
    <select
      value={color}
      onChange={(e) => setColor(e.target.value)}
    >
      <option>Red</option>
      <option>Blue</option>
    </select>
  );
}

export default Select;`,
}),

createExercise({
  id: 1024,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Textarea",
  description:
    "A textarea works almost exactly like a controlled text input, except it allows users to enter multiple lines of text. React stores the current contents in state, making it easy to validate, save, or display the user's input elsewhere in the application.",
  fileName: "Message.jsx",
  code: `import { useState } from "react";

function Message() {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Message;`,
}),

createExercise({
  id: 1025,
  language: "React",
  category: "Lists",
  difficulty: "Beginner",
  title: "Render Users",
  description:
    "The map() method can render any collection of data, not just simple strings or numbers. As your applications grow, you'll often receive arrays of objects from an API and use map() to create a component for each item. This is one of the most common rendering patterns in React.",
  fileName: "Users.jsx",
  code: `const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  return (
    <>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1026,
  language: "React",
  category: "Lists",
  difficulty: "Beginner",
  title: "Keys",
  description:
    "Keys help React identify which items in a list have changed, been added, or been removed. This allows React to update only the necessary parts of the page instead of re-rendering everything. Keys should be unique and stable, which is why IDs are usually the best choice instead of array indexes.",
  fileName: "Users.jsx",
  code: `const users = [
  { id: 1, name: "Tyler" },
  { id: 2, name: "Sarah" },
];

function Users() {
  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1027,
  language: "React",
  category: "Components",
  difficulty: "Beginner",
  title: "Nested Components",
  description:
    "React applications are built by combining components together like building blocks. A parent component can render one or many child components to organize the user interface into smaller, reusable pieces. This approach makes large applications much easier to manage and maintain.",
  fileName: "App.jsx",
  code: `function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <>
      <Header />
      <p>Welcome!</p>
    </>
  );
}

export default App;`,
}),

createExercise({
  id: 1028,
  language: "React",
  category: "Components",
  difficulty: "Beginner",
  title: "Component Composition",
  description:
    "Component composition means building larger components by combining smaller ones. Instead of creating one huge component that does everything, React encourages splitting your UI into focused pieces that each have a single responsibility. This makes code easier to reuse, test, and understand.",
  fileName: "App.jsx",
  code: `function Button() {
  return <button>Save</button>;
}

function Card() {
  return (
    <div>
      <Button />
    </div>
  );
}

export default Card;`,
}),

createExercise({
  id: 1029,
  language: "React",
  category: "Props",
  difficulty: "Beginner",
  title: "Default Props",
  description:
    "Sometimes a prop is optional, and a component should still work even if one isn't provided. Default parameter values allow your component to fall back to a predefined value when a prop is missing. This makes components more flexible and prevents unexpected empty content.",
  fileName: "Greeting.jsx",
  code: `function Greeting({ name = "Guest" }) {
  return (
    <h1>Hello {name}</h1>
  );
}

export default Greeting;`,
}),

createExercise({
  id: 1030,
  language: "React",
  category: "Events",
  difficulty: "Beginner",
  title: "Passing Arguments",
  description:
    "Event handlers often need additional information when they run. By wrapping the handler in an arrow function, you can pass arguments while still waiting until the user actually performs the event. This pattern is commonly used when working with lists of buttons or items.",
  fileName: "Button.jsx",
  code: `function Button() {
  function handleClick(message) {
    alert(message);
  }

  return (
    <button
      onClick={() => handleClick("Hello!")}
    >
      Click Me
    </button>
  );
}

export default Button;`,
}),

createExercise({
  id: 1031,
  language: "React",
  category: "Events",
  difficulty: "Beginner",
  title: "Event Object",
  description:
    "When an event occurs, React automatically passes an event object to the event handler. This object contains useful information about what happened, such as which element triggered the event or what value was entered into an input. Understanding the event object is essential when working with forms and user interactions.",
  fileName: "Input.jsx",
  code: `function Input() {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <input onChange={handleChange} />
  );
}

export default Input;`,
}),

createExercise({
  id: 1032,
  language: "React",
  category: "Conditional Rendering",
  difficulty: "Beginner",
  title: "Return Early",
  description:
    "Sometimes the simplest way to conditionally render something is to return early from the component. If a condition isn't met, the component can immediately return different JSX without rendering the rest of the code. This pattern often makes components easier to read than deeply nested conditions.",
  fileName: "Profile.jsx",
  code: `function Profile({ user }) {
  if (!user) {
    return <h1>Please Log In</h1>;
  }

  return <h1>{user.name}</h1>;
}

export default Profile;`,
}),

createExercise({
  id: 1033,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Toggle State",
  description:
    "Boolean state is commonly used to turn features on and off. Rather than setting a specific value, you can switch between true and false by using the opposite of the current value. This pattern is frequently used for menus, modals, dropdowns, and dark mode toggles.",
  fileName: "Toggle.jsx",
  code: `import { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button onClick={() => setOn(!on)}>
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;`,
}),

createExercise({
  id: 1034,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Counter Reset",
  description:
    "State can be updated to any value, not just incremented or decremented. Sometimes you'll want to restore state back to its original value, such as clearing a form or resetting a counter. Resetting state is a common feature in interactive applications.",
  fileName: "Counter.jsx",
  code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <button onClick={() => setCount(0)}>
      Reset
    </button>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1035,
  language: "React",
  category: "Lists",
  difficulty: "Beginner",
  title: "Filter Before Render",
  description:
    "Arrays can be filtered before they are rendered to display only the items you want. The filter() method creates a new array that matches a condition, and map() then converts those items into JSX. Combining filter() and map() is a very common pattern when displaying dynamic data.",
  fileName: "Users.jsx",
  code: `const users = [
  { id: 1, name: "Tyler", active: true },
  { id: 2, name: "Sarah", active: false },
];

function Users() {
  return (
    <>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1036,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Counter Decrement",
  description:
    "State can move in either direction depending on your application's needs. Just as you can increase a value, you can also decrease it by updating the current state. Counters like this are useful for inventory, pagination, timers, and many other real-world features.",
  fileName: "Counter.jsx",
  code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <button onClick={() => setCount(count - 1)}>
      {count}
    </button>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1037,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Input Mirror",
  description:
    "One advantage of controlled inputs is that the value stored in state can be displayed anywhere in the component. As the user types, React updates the state and immediately reflects those changes throughout the UI. This creates a single source of truth for your data.",
  fileName: "Mirror.jsx",
  code: `import { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}

export default Mirror;`,
}),

createExercise({
  id: 1038,
  language: "React",
  category: "Conditional Rendering",
  difficulty: "Beginner",
  title: "Loading State",
  description:
    "Applications often need to show different content while waiting for data to load. A loading state lets users know that work is happening in the background instead of leaving the page blank. Once the data is ready, the loading message is replaced with the normal content.",
  fileName: "App.jsx",
  code: `function App({ loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Data Loaded</h1>;
}

export default App;`,
}),

createExercise({
  id: 1039,
  language: "React",
  category: "Props",
  difficulty: "Beginner",
  title: "Passing Functions",
  description:
    "Props are not limited to data—they can also contain functions. Passing a function from a parent to a child allows the child component to communicate back to the parent. This is one of the most common patterns for handling user interactions in React.",
  fileName: "Button.jsx",
  code: `function Button({ onSave }) {
  return (
    <button onClick={onSave}>
      Save
    </button>
  );
}

export default Button;`,
}),

createExercise({
  id: 1040,
  language: "React",
  category: "Effects",
  difficulty: "Beginner",
  title: "Effect Cleanup",
  description:
    "Some effects create resources that should be cleaned up when a component is removed. Returning a cleanup function from useEffect allows React to stop timers, remove event listeners, or cancel subscriptions. Cleaning up effects helps prevent memory leaks and unexpected behavior.",
  fileName: "Timer.jsx",
  code: `import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Timer</h1>;
}

export default Timer;`,
}),

createExercise({
  id: 1041,
  language: "React",
  category: "Effects",
  difficulty: "Beginner",
  title: "Effect Dependencies",
  description:
    "The dependency array controls when a useEffect runs. React compares the values in the array after each render and only runs the effect if one of them has changed. Choosing the correct dependencies is important because it keeps your component up to date without running unnecessary code.",
  fileName: "Profile.jsx",
  code: `import { useEffect } from "react";

function Profile({ user }) {
  useEffect(() => {
    console.log(user.name);
  }, [user]);

  return <h1>{user.name}</h1>;
}

export default Profile;`,
}),

createExercise({
  id: 1042,
  language: "React",
  category: "Forms",
  difficulty: "Beginner",
  title: "Multiple Inputs",
  description:
    "Many forms contain more than one input, and React can manage all of them using state. Each input updates only the piece of state it is responsible for, allowing the form to stay synchronized with what the user enters. This pattern is used in login, registration, and profile forms.",
  fileName: "Form.jsx",
  code: `import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}

export default Form;`,
}),

createExercise({
  id: 1043,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Derived State",
  description:
    "Not every value needs to be stored in state. If a value can be calculated from existing state or props, it is usually better to compute it during rendering instead of creating additional state. This keeps components simpler and avoids unnecessary updates.",
  fileName: "Counter.jsx",
  code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  const doubled = count * 2;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <p>{doubled}</p>
    </>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1044,
  language: "React",
  category: "Events",
  difficulty: "Beginner",
  title: "Multiple Event Handlers",
  description:
    "A component can respond to many different user events, not just clicks. React provides event handlers for keyboard input, mouse movement, focus changes, and much more. Learning these events allows you to build rich, interactive user interfaces.",
  fileName: "Input.jsx",
  code: `function Input() {
  return (
    <input
      onFocus={() => console.log("Focused")}
      onBlur={() => console.log("Blurred")}
    />
  );
}

export default Input;`,
}),

createExercise({
  id: 1045,
  language: "React",
  category: "Components",
  difficulty: "Beginner",
  title: "Reusable Component",
  description:
    "One of React's biggest strengths is creating components that can be reused throughout an application. Instead of copying the same JSX multiple times, you can build one component and render it wherever it is needed. This reduces duplicated code and makes future updates much easier.",
  fileName: "App.jsx",
  code: `function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App;`,
}),

createExercise({
  id: 1046,
  language: "React",
  category: "Props",
  difficulty: "Beginner",
  title: "Prop Destructuring",
  description:
    "Props are passed into a component as a single object, but you'll usually access them using object destructuring. Destructuring lets you pull out only the values you need, making your code shorter and easier to read. This has become the standard way of working with props in modern React.",
  fileName: "User.jsx",
  code: `function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default User;`,
}),

createExercise({
  id: 1047,
  language: "React",
  category: "State",
  difficulty: "Beginner",
  title: "Disable Button",
  description:
    "State is often used to control whether an element should be interactive. The disabled prop allows React to enable or disable buttons based on the current state of the application. This pattern is commonly used while loading data, validating forms, or preventing duplicate submissions.",
  fileName: "Button.jsx",
  code: `import { useState } from "react";

function Button() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button disabled={disabled}>
        Submit
      </button>

      <button onClick={() => setDisabled(!disabled)}>
        Toggle
      </button>
    </>
  );
}

export default Button;`,
}),

createExercise({
  id: 1048,
  language: "React",
  category: "Lists",
  difficulty: "Beginner",
  title: "Empty List",
  description:
    "It's common for an array to be empty when an application first loads or when no results are found. Before rendering a list, you can check whether it contains any items and display a helpful message if it doesn't. This creates a better user experience than showing an empty page.",
  fileName: "Users.jsx",
  code: `function Users({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1049,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Lifting State Up",
  description:
    "Sometimes multiple components need access to the same piece of data. Instead of giving each component its own state, React encourages moving that state to their closest common parent and passing it down through props. This pattern, called lifting state up, keeps your data synchronized and creates a single source of truth.",
  fileName: "App.jsx",
  code: `import { useState } from "react";

function Child({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Child
      count={count}
      setCount={setCount}
    />
  );
}

export default App;`,
}),

createExercise({
  id: 1050,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Prop Drilling",
  description:
    "Prop drilling happens when data must be passed through several components that don't actually use it, just so a deeper component can receive it. While props are the normal way to share data, repeatedly passing them through many levels can make an application harder to maintain. This problem is one reason React provides the Context API.",
  fileName: "App.jsx",
  code: `function Grandchild({ name }) {
  return <h2>{name}</h2>;
}

function Child({ name }) {
  return <Grandchild name={name} />;
}

function App() {
  return <Child name="Tyler" />;
}

export default App;`,
}),

createExercise({
  id: 1051,
  language: "React",
  category: "Refs",
  difficulty: "Intermediate",
  title: "useRef",
  description:
    "The useRef hook stores a value that persists between renders without causing the component to re-render when it changes. It is most commonly used to directly access DOM elements, such as focusing an input or measuring an element. Refs are useful when you need to interact with the browser outside of React's normal rendering process.",
  fileName: "Input.jsx",
  code: `import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}

export default Input;`,
}),

createExercise({
  id: 1052,
  language: "React",
  category: "Refs",
  difficulty: "Intermediate",
  title: "Access DOM Element",
  description:
    "Unlike state and props, refs allow you to work directly with a DOM element after React has rendered it. This is helpful when focusing inputs, scrolling to elements, or reading measurements that React doesn't manage automatically. Direct DOM access should be used only when necessary.",
  fileName: "App.jsx",
  code: `import { useRef } from "react";

function App() {
  const headingRef = useRef(null);

  function logElement() {
    console.log(headingRef.current);
  }

  return (
    <>
      <h1 ref={headingRef}>Hello</h1>
      <button onClick={logElement}>
        Log
      </button>
    </>
  );
}

export default App;`,
}),

createExercise({
  id: 1053,
  language: "React",
  category: "Context",
  difficulty: "Intermediate",
  title: "Create Context",
  description:
    "The Context API allows data to be shared across many components without passing props through every level of the component tree. It is useful for information that many parts of an application need, such as the current user, theme, or authentication status. Creating a context is the first step toward eliminating unnecessary prop drilling.",
  fileName: "ThemeContext.jsx",
  code: `import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;`,
}),

createExercise({
  id: 1054,
  language: "React",
  category: "Context",
  difficulty: "Intermediate",
  title: "Context Provider",
  description:
    "A Context Provider makes a value available to every component inside of it. Instead of passing data through multiple layers of props, the provider shares the value directly with any component that needs it. Most React applications wrap providers near the top of the component tree.",
  fileName: "App.jsx",
  code: `import ThemeContext from "./ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;`,
}),

createExercise({
  id: 1055,
  language: "React",
  category: "Context",
  difficulty: "Intermediate",
  title: "useContext",
  description:
    "The useContext hook allows a component to read data from a Context Provider. This removes the need to pass props through intermediate components that don't use the data themselves. It is commonly used for themes, authentication, language settings, and user information.",
  fileName: "Home.jsx",
  code: `import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

export default Home;`,
}),

createExercise({
  id: 1056,
  language: "React",
  category: "Custom Hooks",
  difficulty: "Intermediate",
  title: "Custom Hook",
  description:
    "Custom hooks let you reuse stateful logic between multiple components. Instead of copying the same useState or useEffect code into different files, you can place it inside a custom hook and use it wherever it's needed. A custom hook is simply a JavaScript function whose name starts with 'use'.",
  fileName: "useCounter.js",
  code: `import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}

export default useCounter;`,
}),

createExercise({
  id: 1057,
  language: "React",
  category: "Custom Hooks",
  difficulty: "Intermediate",
  title: "Using a Custom Hook",
  description:
    "Once you've created a custom hook, any component can use it just like React's built-in hooks. This keeps your components focused on rendering while moving reusable logic into one central location. Custom hooks are a great way to reduce duplicated code across an application.",
  fileName: "Counter.jsx",
  code: `import useCounter from "./useCounter";

function Counter() {
  const { count, setCount } = useCounter();

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1058,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "useReducer",
  description:
    "The useReducer hook is an alternative to useState for managing more complex state. Instead of updating state directly, you dispatch actions to a reducer function that decides how the state should change. This pattern becomes especially useful as your application grows and state updates become more complicated.",
  fileName: "Counter.jsx",
  code: `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <button
      onClick={() => dispatch({ type: "increment" })}
    >
      {count}
    </button>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1059,
  language: "React",
  category: "Performance",
  difficulty: "Intermediate",
  title: "useMemo",
  description:
    "The useMemo hook remembers the result of an expensive calculation so it doesn't have to run on every render. React only recalculates the value when one of its dependencies changes. This can improve performance when working with large datasets or complex computations.",
  fileName: "Numbers.jsx",
  code: `import { useMemo } from "react";

function Numbers({ numbers }) {
  const total = useMemo(() => {
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  return <h1>{total}</h1>;
}

export default Numbers;`,
}),

createExercise({
  id: 1060,
  language: "React",
  category: "Performance",
  difficulty: "Intermediate",
  title: "useCallback",
  description:
    "The useCallback hook remembers a function between renders. This prevents React from creating a brand new function every time the component renders, which can improve performance when passing functions to child components. It is most useful in combination with memoized components.",
  fileName: "App.jsx",
  code: `import { useCallback } from "react";

function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}

export default App;`,
}),

createExercise({
  id: 1061,
  language: "React",
  category: "Performance",
  difficulty: "Intermediate",
  title: "React.memo",
  description:
    "React.memo prevents a component from re-rendering when its props have not changed. This can improve performance in larger applications where rendering is expensive. It should only be used when unnecessary re-renders are actually causing a performance problem.",
  fileName: "Greeting.jsx",
  code: `import { memo } from "react";

function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

export default memo(Greeting);`,
}),

createExercise({
  id: 1062,
  language: "React",
  category: "Effects",
  difficulty: "Intermediate",
  title: "Loading and Error State",
  description:
    "When fetching data, applications should handle more than just the successful response. Users should know when data is loading and be informed if something goes wrong. Managing loading, success, and error states creates a much better user experience and is considered a best practice.",
  fileName: "Users.jsx",
  code: `import { useState, useEffect } from "react";

function Users() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .catch(() => setError("Failed"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <h1>Users</h1>;
}

export default Users;`,
}),

createExercise({
  id: 1063,
  language: "React",
  category: "Effects",
  difficulty: "Intermediate",
  title: "Fetch JSON Data",
  description:
    "Most APIs return data in JSON format, so fetching data usually involves converting the response before using it. After calling fetch(), the response is typically transformed with response.json() and then stored in state. This is one of the most common workflows in modern React applications.",
  fileName: "Users.jsx",
  code: `import { useEffect } from "react";

function Users() {
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const users = await response.json();
      console.log(users);
    }

    loadUsers();
  }, []);

  return <h1>Users</h1>;
}

export default Users;`,
}),

createExercise({
  id: 1064,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Search Filter",
  description:
    "Searching through a list is a common feature in React applications. As the user types, React updates the search text in state and filters the data before rendering it. This creates a responsive interface where the displayed results update immediately without reloading the page.",
  fileName: "Users.jsx",
  code: `import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1065,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Sort a List",
  description:
    "Displaying data in different orders is another common requirement in React. Before rendering a list, you can create a copy of the array and sort it based on your desired criteria. Creating a copy first prevents you from accidentally modifying the original data.",
  fileName: "Users.jsx",
  code: `const users = [
  "Sarah",
  "Tyler",
  "Mike",
];

function Users() {
  const sorted = [...users].sort();

  return (
    <>
      {sorted.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1066,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Pagination",
  description:
    "Large collections of data are often split into smaller pages instead of displaying everything at once. Pagination improves performance and makes information easier for users to browse. React typically stores the current page in state and calculates which items should be displayed.",
  fileName: "Users.jsx",
  code: `import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
  "Emily",
];

function Users() {
  const [page] = useState(1);

  const pageSize = 2;

  const currentUsers = users.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <>
      {currentUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1067,
  language: "React",
  category: "Browser APIs",
  difficulty: "Intermediate",
  title: "Local Storage",
  description:
    "Local Storage allows your application to save small amounts of data inside the user's browser. Information stored there remains available even after the page is refreshed or the browser is closed. React commonly uses Local Storage to remember settings, themes, or authentication tokens.",
  fileName: "App.jsx",
  code: `function App() {
  function saveTheme() {
    localStorage.setItem("theme", "dark");
  }

  return (
    <button onClick={saveTheme}>
      Save Theme
    </button>
  );
}

export default App;`,
}),

createExercise({
  id: 1068,
  language: "React",
  category: "Browser APIs",
  difficulty: "Intermediate",
  title: "Read Local Storage",
  description:
    "Data saved in Local Storage can be retrieved whenever your application starts. This allows users to keep preferences such as themes or language settings between visits. Reading from Local Storage is often done when a component first loads.",
  fileName: "App.jsx",
  code: `function App() {
  const theme = localStorage.getItem("theme");

  return <h1>{theme}</h1>;
}

export default App;`,
}),

createExercise({
  id: 1069,
  language: "React",
  category: "Browser APIs",
  difficulty: "Intermediate",
  title: "Save with useEffect",
  description:
    "A common React pattern is automatically saving data whenever state changes. By combining useEffect with Local Storage, your application can persist information without requiring the user to click a save button. This technique is frequently used for settings, drafts, and user preferences.",
  fileName: "App.jsx",
  code: `import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme("dark")}>
      Dark Mode
    </button>
  );
}

export default App;`,
}),

createExercise({
  id: 1070,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Lifted Form State",
  description:
    "When multiple components need access to the same form data, the state should live in their closest shared parent. Child components receive both the current value and the setter through props. This keeps every part of the interface synchronized with the same data.",
  fileName: "App.jsx",
  code: `import { useState } from "react";

function Input({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

function App() {
  const [text, setText] = useState("");

  return (
    <Input
      value={text}
      setValue={setText}
    />
  );
}

export default App;`,
}),

createExercise({
  id: 1071,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Derived Filtered List",
  description:
    "Some values should be calculated from existing state instead of being stored separately. In this example, the filtered list is derived from the search text and the original data each time the component renders. This avoids duplicated state and keeps your data consistent.",
  fileName: "Users.jsx",
  code: `import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1072,
  language: "React",
  category: "Performance",
  difficulty: "Intermediate",
  title: "Memoized Filter",
  description:
    "Filtering large collections on every render can become expensive as your application grows. The useMemo hook can cache the filtered results so React only recalculates them when the search term or data changes. This helps improve performance when working with large datasets.",
  fileName: "Users.jsx",
  code: `import { useMemo, useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1073,
  language: "React",
  category: "Effects",
  difficulty: "Intermediate",
  title: "Debounced Search",
  description:
    "Some actions, like searching an API, shouldn't happen every time the user presses a key. Debouncing waits until the user stops typing before running the action, reducing unnecessary work and network requests. This pattern is commonly used in search bars and autocomplete fields.",
  fileName: "Search.jsx",
  code: `import { useEffect, useState } from "react";

function Search() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Search;`,
}),

createExercise({
  id: 1074,
  language: "React",
  category: "State Management",
  difficulty: "Intermediate",
  title: "Toggle Theme",
  description:
    "Many applications allow users to switch between light and dark mode. React can store the current theme in state and update the interface whenever it changes. This is a practical example of using state to control the appearance of an application.",
  fileName: "App.jsx",
  code: `import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>

      <h1>{theme}</h1>
    </>
  );
}

export default App;`,
}),

createExercise({
  id: 1075,
  language: "React",
  category: "Custom Hooks",
  difficulty: "Intermediate",
  title: "useLocalStorage Hook",
  description:
    "As applications grow, you'll often reuse the same Local Storage logic in multiple places. Creating a custom hook keeps that logic in one location while making it easy for any component to save and load persistent values. This is a common real-world use case for custom hooks.",
  fileName: "useLocalStorage.js",
  code: `import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}

export default useLocalStorage;`,
}),

createExercise({
  id: 1076,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "BrowserRouter",
  description:
    "React Router allows a single-page application to display different pages without performing a full page refresh. BrowserRouter provides the routing system that keeps the URL and your React components synchronized. It is typically wrapped around your entire application near the root.",
  fileName: "main.jsx",
  code: `import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`,
}),

createExercise({
  id: 1077,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "Routes and Route",
  description:
    "Routes connect specific URL paths to the components that should be displayed. When the browser's URL matches a route, React Router renders the associated component without reloading the page. This is the foundation of navigation in modern React applications.",
  fileName: "App.jsx",
  code: `import {
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;`,
}),

createExercise({
  id: 1078,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "Link",
  description:
    "The Link component lets users navigate between pages without refreshing the browser. Unlike a normal HTML anchor tag, Link works with React Router to update the URL while keeping your single-page application running. Nearly every multi-page React application uses Link for navigation.",
  fileName: "Navbar.jsx",
  code: `import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}

export default Navbar;`,
}),

createExercise({
  id: 1079,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "useNavigate",
  description:
    "The useNavigate hook allows your code to change pages programmatically instead of waiting for the user to click a link. This is commonly used after actions like logging in, registering, submitting a form, or deleting an item. It gives your application full control over navigation.",
  fileName: "Login.jsx",
  code: `import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;`,
}),

createExercise({
  id: 1080,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "useParams",
  description:
    "Dynamic routes allow part of the URL to change while still using the same component. The useParams hook reads those values from the URL, making it possible to display information for a specific user, product, task, or article. This pattern is extremely common when building CRUD applications.",
  fileName: "User.jsx",
  code: `import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User {id}</h1>;
}

export default User;`,
}),

createExercise({
  id: 1081,
  language: "React",
  category: "React Router",
  difficulty: "Advanced",
  title: "Nested Routes",
  description:
    "Nested routes allow related pages to share a common layout while displaying different content inside of it. Instead of rebuilding the same navigation or sidebar for every page, React Router renders child routes inside a shared parent component. This keeps your application organized and reduces duplicated code.",
  fileName: "App.jsx",
  code: `import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}

function Settings() {
  return <h2>Settings</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}

export default App;`,
}),

createExercise({
  id: 1082,
  language: "React",
  category: "Authentication",
  difficulty: "Advanced",
  title: "Protected Route",
  description:
    "Some pages should only be available to authenticated users. A protected route checks whether the user is logged in before rendering the page, redirecting them somewhere else if they are not. This is a standard pattern in applications with user accounts.",
  fileName: "ProtectedRoute.jsx",
  code: `import { Navigate } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  children,
}) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;`,
}),

createExercise({
  id: 1083,
  language: "React",
  category: "Authentication",
  difficulty: "Advanced",
  title: "Authentication Context",
  description:
    "Authentication information is needed throughout most applications, making it a perfect use case for React Context. Instead of passing the current user and login status through props, a context provider makes that information available anywhere in the application. This keeps authentication logic centralized and easy to access.",
  fileName: "AuthContext.jsx",
  code: `import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;`,
}),

createExercise({
  id: 1084,
  language: "React",
  category: "Authentication",
  difficulty: "Advanced",
  title: "useAuth Hook",
  description:
    "As applications grow, accessing authentication data directly with useContext everywhere can become repetitive. A custom useAuth hook wraps that logic into a single reusable function, making your components cleaner and easier to read. This is the pattern you'll see in many production React applications.",
  fileName: "useAuth.js",
  code: `import { useContext } from "react";
import AuthContext from "./AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;`,
}),

createExercise({
  id: 1085,
  language: "React",
  category: "API",
  difficulty: "Advanced",
  title: "Fetch on Mount",
  description:
    "Many pages load data as soon as they appear on the screen. By combining useEffect with state, a component can request information from an API after it mounts and display the results when they arrive. This pattern is used throughout dashboards, profile pages, and data-driven applications.",
  fileName: "Users.jsx",
  code: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`,
}),

createExercise({
  id: 1086,
  language: "React",
  category: "API",
  difficulty: "Advanced",
  title: "POST Request",
  description:
    "React applications don't just display data—they also send it to servers. POST requests are commonly used to create new resources such as users, tasks, or comments. After submitting data, applications often refresh the displayed information or navigate the user to another page.",
  fileName: "CreateUser.jsx",
  code: `async function createUser() {
  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Tyler",
    }),
  });
}

export default createUser;`,
}),

createExercise({
  id: 1087,
  language: "React",
  category: "API",
  difficulty: "Advanced",
  title: "PUT Request",
  description:
    "PUT requests are used to update existing data on a server. After a user edits information such as a profile or task, React sends the updated values to the backend so they can be saved permanently. Updating server data is one of the core pieces of CRUD applications.",
  fileName: "UpdateUser.jsx",
  code: `async function updateUser(id) {
  await fetch(\`/api/users/\${id}\`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Updated Name",
    }),
  });
}

export default updateUser;`,
}),

createExercise({
  id: 1088,
  language: "React",
  category: "API",
  difficulty: "Advanced",
  title: "DELETE Request",
  description:
    "DELETE requests remove data from a server, such as deleting a task or user account. After a successful request, React usually updates its local state so the deleted item disappears immediately from the page. This completes the final operation of the CRUD workflow.",
  fileName: "DeleteUser.jsx",
  code: `async function deleteUser(id) {
  await fetch(\`/api/users/\${id}\`, {
    method: "DELETE",
  });
}

export default deleteUser;`,
}),

createExercise({
  id: 1089,
  language: "React",
  category: "API",
  difficulty: "Advanced",
  title: "Optimistic UI",
  description:
    "Optimistic UI updates the interface before the server responds, making an application feel much faster. React immediately updates the local state and assumes the request will succeed, then corrects the UI if the request fails. This technique is commonly used in professional applications to create a smoother user experience.",
  fileName: "Todo.jsx",
  code: `import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["React"]);

  function addTask() {
    setTasks([...tasks, "JavaScript"]);
  }

  return (
    <>
      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </>
  );
}

export default Todo;`,
}),

createExercise({
  id: 1090,
  language: "React",
  category: "Performance",
  difficulty: "Advanced",
  title: "Lazy Loading",
  description:
    "Large applications don't need to download every page immediately. React.lazy allows components to be loaded only when they are actually needed, reducing the initial bundle size and helping pages load faster. This technique is known as code splitting.",
  fileName: "App.jsx",
  code: `import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

export default Dashboard;`,
}),

createExercise({
  id: 1091,
  language: "React",
  category: "Performance",
  difficulty: "Advanced",
  title: "Suspense",
  description:
    "When a lazily loaded component is still being downloaded, React needs something to display in the meantime. Suspense provides a fallback interface, such as a loading spinner or message, until the component is ready. It works together with React.lazy to improve the loading experience.",
  fileName: "App.jsx",
  code: `import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;`,
}),

createExercise({
  id: 1092,
  language: "React",
  category: "Error Handling",
  difficulty: "Advanced",
  title: "Error Boundary",
  description:
    "Error boundaries prevent your entire application from crashing when a component throws an error. Instead of displaying a blank screen, they catch rendering errors and show a fallback interface. They are an important tool for making production applications more reliable.",
  fileName: "ErrorBoundary.jsx",
  code: `import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`,
}),

createExercise({
  id: 1093,
  language: "React",
  category: "Components",
  difficulty: "Advanced",
  title: "Reusable Modal",
  description:
    "Modal windows are one of the most common reusable UI components in React applications. Rather than creating a different modal for every feature, developers typically build one flexible component that displays different content using props or children. This keeps applications organized and greatly reduces duplicated code.",
  fileName: "Modal.jsx",
  code: `function Modal({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}

export default Modal;`,
}),

createExercise({
  id: 1094,
  language: "React",
  category: "Components",
  difficulty: "Advanced",
  title: "Portal",
  description:
    "Sometimes a component needs to render outside of its normal position in the React component tree. React Portals make this possible while still allowing the component to behave like part of the same application. Portals are commonly used for modals, tooltips, and dropdown menus that should appear above the rest of the page.",
  fileName: "Modal.jsx",
  code: `import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <h1>Hello Portal</h1>,
    document.body
  );
}

export default Modal;`,
}),

createExercise({
  id: 1095,
  language: "React",
  category: "State Management",
  difficulty: "Advanced",
  title: "Complex Reducer",
  description:
    "As state becomes more complex, useReducer helps organize multiple types of updates into a single reducer function. Instead of scattering update logic throughout your component, each action describes what happened and the reducer determines the next state. This approach makes larger applications easier to understand and maintain.",
  fileName: "Counter.jsx",
  code: `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "reset":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: "reset" })
        }
      >
        Reset
      </button>

      <p>{state.count}</p>
    </>
  );
}

export default Counter;`,
}),

createExercise({
  id: 1096,
  language: "React",
  category: "Custom Hooks",
  difficulty: "Advanced",
  title: "Window Width Hook",
  description:
    "Custom hooks can also wrap browser events to make them reusable across your application. In this example, the hook listens for window resize events and provides the current browser width to any component that needs it. This keeps event listener logic in one reusable location.",
  fileName: "useWindowWidth.js",
  code: `import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return width;
}

export default useWindowWidth;`,
}),

createExercise({
  id: 1097,
  language: "React",
  category: "Performance",
  difficulty: "Advanced",
  title: "Infinite Scroll",
  description:
    "Instead of loading every item at once, many applications load additional content as the user scrolls. Infinite scrolling improves performance by requesting only the data that is currently needed. You'll commonly see this pattern in social media feeds, product listings, and news websites.",
  fileName: "Feed.jsx",
  code: `import { useEffect } from "react";

function Feed() {
  useEffect(() => {
    function handleScroll() {
      console.log("Load more...");
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return <h1>Feed</h1>;
}

export default Feed;`,
}),

createExercise({
  id: 1098,
  language: "React",
  category: "Components",
  difficulty: "Advanced",
  title: "Compound Components",
  description:
    "Compound components are a pattern where multiple components work together to build a larger feature while sharing a common purpose. Instead of one giant component with dozens of props, each smaller component has a focused responsibility. This pattern is used by many popular React component libraries.",
  fileName: "Card.jsx",
  code: `function Card({ children }) {
  return <div>{children}</div>;
}

Card.Header = function Header({ children }) {
  return <h2>{children}</h2>;
};

Card.Body = function Body({ children }) {
  return <p>{children}</p>;
};

export default Card;`,
}),

createExercise({
  id: 1099,
  language: "React",
  category: "Architecture",
  difficulty: "Advanced",
  title: "Folder Structure",
  description:
    "As React applications grow, organizing files becomes just as important as writing code. Separating components, pages, hooks, contexts, and utilities into their own folders makes projects easier to navigate and maintain. A well-organized folder structure also makes it easier for teams to collaborate on the same codebase.",
  fileName: "src/",
  code: `src/
├── components/
├── pages/
├── hooks/
├── context/
├── api/
├── assets/
├── App.jsx
└── main.jsx`,
}),

createExercise({
  id: 1100,
  language: "React",
  category: "Architecture",
  difficulty: "Advanced",
  title: "Feature-Based Structure",
  description:
    "Many larger React applications organize files by feature instead of by file type. Each feature contains its own components, hooks, styles, and utilities, making related code easy to find. This approach scales well as applications become larger and more complex.",
  fileName: "src/",
  code: `src/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── projects/
├── components/
├── App.jsx
└── main.jsx`,
}),

createExercise({
  id: 1101,
  language: "React",
  category: "Architecture",
  difficulty: "Advanced",
  title: "Lifting vs Context",
  description:
    "Both lifting state and Context help components share data, but they solve different problems. Lifting state is usually the best choice when only a few related components need the data, while Context is better for information used throughout the application. Choosing the right approach keeps your code simpler and easier to maintain.",
  fileName: "App.jsx",
  code: `function App() {
  return (
    <h1>
      Lift state for nearby components.
      Use Context for global data.
    </h1>
  );
}

export default App;`,
}),

createExercise({
  id: 1102,
  language: "React",
  category: "Best Practices",
  difficulty: "Advanced",
  title: "Single Responsibility",
  description:
    "A React component should ideally have one clear responsibility. Components that become too large are harder to understand, test, and reuse. Breaking large components into smaller ones is one of the most important habits for writing clean React code.",
  fileName: "Dashboard.jsx",
  code: `function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

export default Dashboard;`,
}),

createExercise({
  id: 1103,
  language: "React",
  category: "Best Practices",
  difficulty: "Advanced",
  title: "Thinking in React",
  description:
    "Building React applications starts by breaking the interface into small reusable components. Once the components are identified, determine which data belongs in state and where that state should live. Thinking this way helps you design applications that are easier to build, understand, and maintain.",
  fileName: "App.jsx",
  code: `function App() {
  return (
    <h1>
      Build small components.
      Share state wisely.
      Reuse everything possible.
    </h1>
  );
}

export default App;`,
}),

];

export default reactExercises;