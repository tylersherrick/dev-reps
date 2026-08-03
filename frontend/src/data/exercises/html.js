import { createExercise } from "../exercises";

const htmlExercises = [
  createExercise({
    id: 1,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Basic HTML Document",
    description:
      "Learn the basic structure that every HTML webpage starts with. The html element contains the entire page, the head stores information about the page, and the body contains everything users see.",
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
    id: 2,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Heading Element",
    description:
      "Learn how to create headings in HTML. Heading elements organize content by importance, with h1 being the largest and most important heading.",
    fileName: "index.html",
    code: `<h1>My First Website</h1>`,
  }),

  createExercise({
    id: 3,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Paragraph Element",
    description:
      "Learn how to display regular text on a webpage. The paragraph element is used for blocks of text such as descriptions, articles, and explanations.",
    fileName: "index.html",
    code: `<p>Welcome to my website.</p>`,
  }),

  createExercise({
    id: 4,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Multiple Text Elements",
    description:
      "Learn how multiple HTML elements work together. Websites are created by combining different elements to organize and display information.",
    fileName: "index.html",
    code: `<h1>About Me</h1>

<p>I am learning HTML.</p>`,
  }),

  createExercise({
    id: 5,
    language: "HTML",
    category: "Links",
    difficulty: "Beginner",
    title: "Creating a Link",
    description:
      "Learn how to create clickable links using the anchor element. The href attribute tells the browser where the user should go when they click the link.",
    fileName: "index.html",
    code: `<a href="https://google.com">Visit Google</a>`,
  }),

    createExercise({
    id: 6,
    language: "HTML",
    category: "Links",
    difficulty: "Beginner",
    title: "Link Attributes",
    description:
      "Learn how to add extra information to links using attributes. The target attribute controls where the link opens, and the rel attribute provides additional information about the relationship between pages.",
    fileName: "index.html",
    code: `<a href="https://google.com" target="_blank" rel="noopener">Visit Google</a>`,
  }),

  createExercise({
    id: 7,
    language: "HTML",
    category: "Images",
    difficulty: "Beginner",
    title: "Adding an Image",
    description:
      "Learn how to display images on a webpage using the image element. The src attribute tells HTML where the image file is located.",
    fileName: "index.html",
    code: `<img src="profile.png" />`,
  }),

  createExercise({
    id: 8,
    language: "HTML",
    category: "Images",
    difficulty: "Beginner",
    title: "Image Alt Text",
    description:
      "Learn why images should include alternative text. The alt attribute describes the image and helps users understand the content if the image cannot be viewed.",
    fileName: "index.html",
    code: `<img src="profile.png" alt="Profile picture" />`,
  }),

  createExercise({
    id: 9,
    language: "HTML",
    category: "Lists",
    difficulty: "Beginner",
    title: "Unordered List",
    description:
      "Learn how to create lists where the order of items does not matter. The ul element creates the list, and li elements create each item inside the list.",
    fileName: "index.html",
    code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
  }),

  createExercise({
    id: 10,
    language: "HTML",
    category: "Lists",
    difficulty: "Beginner",
    title: "Ordered List",
    description:
      "Learn how to create numbered lists in HTML. The ol element creates the numbered list, and li elements represent each item in the correct order.",
    fileName: "index.html",
    code: `<ol>
  <li>Open your editor</li>
  <li>Create a file</li>
  <li>Write HTML</li>
</ol>`,
  }),

    createExercise({
    id: 11,
    language: "HTML",
    category: "Containers",
    difficulty: "Beginner",
    title: "Div Element",
    description:
      "Learn how to group HTML elements together using the div element. Divs are commonly used as containers that help organize sections of a webpage and are often styled with CSS.",
    fileName: "index.html",
    code: `<div>
  <h1>My Website</h1>
  <p>Welcome to my page.</p>
</div>`,
  }),

  createExercise({
    id: 12,
    language: "HTML",
    category: "Containers",
    difficulty: "Beginner",
    title: "Span Element",
    description:
      "Learn how to target small pieces of text using the span element. Unlike divs, spans are used for smaller inline sections of content inside other elements.",
    fileName: "index.html",
    code: `<p>
  Learn <span>HTML</span> today.
</p>`,
  }),

  createExercise({
    id: 13,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Header Element",
    description:
      "Learn how to create the top section of a webpage using the header element. Headers commonly contain titles, logos, or introductory content.",
    fileName: "index.html",
    code: `<header>
  <h1>My Website</h1>
</header>`,
  }),

  createExercise({
    id: 14,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Main Element",
    description:
      "Learn how to identify the main content of a webpage. The main element represents the primary information users interact with on a page.",
    fileName: "index.html",
    code: `<main>
  <h1>Welcome</h1>
  <p>This is the main content.</p>
</main>`,
  }),

  createExercise({
    id: 15,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Footer Element",
    description:
      "Learn how to create the bottom section of a webpage using the footer element. Footers commonly contain information like copyright text, links, or contact details.",
    fileName: "index.html",
    code: `<footer>
  <p>Copyright 2026</p>
</footer>`,
  }),

    createExercise({
    id: 16,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Navigation Element",
    description:
      "Learn how to create navigation sections using the nav element. Navigation sections usually contain links that help users move between different pages or sections of a website.",
    fileName: "index.html",
    code: `<nav><a href="/home">Home</a><a href="/about">About</a></nav>`,
  }),

  createExercise({
    id: 17,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Section Element",
    description:
      "Learn how to divide a webpage into meaningful sections. The section element groups related content together and helps organize larger pages.",
    fileName: "index.html",
    code: `<section><h2>About Me</h2><p>I am learning HTML.</p></section>`,
  }),

  createExercise({
    id: 18,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Article Element",
    description:
      "Learn how to create independent pieces of content using the article element. Articles are useful for content like blog posts, news stories, or user posts.",
    fileName: "index.html",
    code: `<article><h2>My Blog Post</h2><p>This is my article.</p></article>`,
  }),

  createExercise({
    id: 19,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Basic Form",
    description:
      "Learn how forms collect information from users. The form element creates a section where inputs, buttons, and other controls can be placed.",
    fileName: "index.html",
    code: `<form><input type="text" /><button>Submit</button></form>`,
  }),

  createExercise({
    id: 20,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Input Element",
    description:
      "Learn how to create fields where users can enter information. Input elements can collect different types of data depending on the type attribute.",
    fileName: "index.html",
    code: `<input type="text" placeholder="Enter your name" />`,
  }),

    createExercise({
    id: 21,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Label Element",
    description:
      "Learn how to describe form inputs using labels. Labels help users understand what information should be entered and improve accessibility by connecting text to specific inputs.",
    fileName: "index.html",
    code: `<label>Name</label>
<input type="text" />`,
  }),

  createExercise({
    id: 22,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Textarea Element",
    description:
      "Learn how to create a larger text field using the textarea element. Textareas are commonly used when users need to enter longer messages or descriptions.",
    fileName: "index.html",
    code: `<textarea placeholder="Message"></textarea>`,
  }),

  createExercise({
    id: 23,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Button Element",
    description:
      "Learn how to create buttons in HTML. Buttons allow users to perform actions such as submitting forms or interacting with a webpage.",
    fileName: "index.html",
    code: `<button>Submit</button>`,
  }),

  createExercise({
    id: 24,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Form Input Types",
    description:
      "Learn how different input types change what users can enter. HTML provides built-in input types for common information like emails, passwords, and numbers.",
    fileName: "index.html",
    code: `<input type="email" />
<input type="password" />`,
  }),

  createExercise({
    id: 25,
    language: "HTML",
    category: "Tables",
    difficulty: "Beginner",
    title: "Basic Table",
    description:
      "Learn how to organize information into rows and columns using tables. Tables use table, tr, and td elements to structure data.",
    fileName: "index.html",
    code: `<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
  </tr>
</table>`,
  }),

    createExercise({
    id: 26,
    language: "HTML",
    category: "Tables",
    difficulty: "Beginner",
    title: "Table Rows and Cells",
    description:
      "Learn how tables are built using rows and cells. The tr element creates a row, while td elements create the individual pieces of data inside each row.",
    fileName: "index.html",
    code: `<table>
  <tr>
    <td>HTML</td>
    <td>Beginner</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>Intermediate</td>
  </tr>
</table>`,
  }),

  createExercise({
    id: 27,
    language: "HTML",
    category: "Tables",
    difficulty: "Beginner",
    title: "Table Headers",
    description:
      "Learn how to create table headings using the th element. Header cells describe the information in a column and make tables easier to understand.",
    fileName: "index.html",
    code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</table>`,
  }),

  createExercise({
    id: 28,
    language: "HTML",
    category: "Media",
    difficulty: "Beginner",
    title: "Audio Element",
    description:
      "Learn how to add audio content to a webpage. The audio element allows browsers to play sound files using built-in controls.",
    fileName: "index.html",
    code: `<audio controls src="song.mp3"></audio>`,
  }),

  createExercise({
    id: 29,
    language: "HTML",
    category: "Media",
    difficulty: "Beginner",
    title: "Video Element",
    description:
      "Learn how to display videos on a webpage. The video element allows users to watch video files directly in the browser.",
    fileName: "index.html",
    code: `<video controls src="video.mp4"></video>`,
  }),

  createExercise({
    id: 30,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Complete Page Structure",
    description:
      "Learn how common HTML elements work together to create a complete webpage layout. Semantic elements help organize content so both browsers and developers understand the purpose of each section.",
    fileName: "index.html",
    code: `<header>My Website</header>

<main>
  <section>Content</section>
</main>

<footer>Copyright</footer>`,
  }),

    createExercise({
    id: 31,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "Class Attribute",
    description:
      "Learn how to add classes to HTML elements. Classes allow you to group elements together and are commonly used with CSS to apply the same styles to multiple elements.",
    fileName: "index.html",
    code: `<p class="description">Hello World</p>`,
  }),

  createExercise({
    id: 32,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "ID Attribute",
    description:
      "Learn how to give an element a unique identifier using the id attribute. IDs are commonly used for targeting specific elements with CSS or JavaScript.",
    fileName: "index.html",
    code: `<h1 id="title">My Website</h1>`,
  }),

  createExercise({
    id: 33,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "Title Attribute",
    description:
      "Learn how to provide extra information about an element using the title attribute. Browsers display this information when users hover over the element.",
    fileName: "index.html",
    code: `<p title="More information">Hover over me</p>`,
  }),

  createExercise({
    id: 34,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Beginner",
    title: "Accessible Image",
    description:
      "Learn how to make images easier to understand for all users. The alt attribute provides a text description that can be read by screen readers.",
    fileName: "index.html",
    code: `<img src="logo.png" alt="Company logo" />`,
  }),

  createExercise({
    id: 35,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Beginner",
    title: "Accessible Form Label",
    description:
      "Learn how labels improve form accessibility. Connecting labels to inputs helps users understand what information each field requires.",
    fileName: "index.html",
    code: `<label for="email">Email</label>
<input id="email" type="email" />`,
  }),

    createExercise({
    id: 36,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "Data Attributes",
    description:
      "Learn how to store custom information on HTML elements using data attributes. These attributes allow developers to attach extra data that can later be accessed with JavaScript.",
    fileName: "index.html",
    code: `<button data-user="123">Profile</button>`,
  }),

  createExercise({
    id: 37,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Strong Text",
    description:
      "Learn how to highlight important text using the strong element. Strong text usually represents information that has extra importance on a webpage.",
    fileName: "index.html",
    code: `<p>This is <strong>important</strong> text.</p>`,
  }),

  createExercise({
    id: 38,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Emphasized Text",
    description:
      "Learn how to emphasize text using the em element. Emphasized text is often displayed differently and helps communicate importance or tone.",
    fileName: "index.html",
    code: `<p>This is <em>important</em> text.</p>`,
  }),

  createExercise({
    id: 39,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Line Break",
    description:
      "Learn how to create a line break without creating a new paragraph. The br element moves the following content to the next line.",
    fileName: "index.html",
    code: `Hello<br />World`,
  }),

  createExercise({
    id: 40,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Horizontal Rule",
    description:
      "Learn how to create a visual divider between sections of content. The hr element represents a thematic break between different parts of a page.",
    fileName: "index.html",
    code: `<hr />`,
  }),

    createExercise({
    id: 41,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Blockquote Element",
    description:
      "Learn how to display quoted content using the blockquote element. Blockquotes are used when showing longer quotes from another source.",
    fileName: "index.html",
    code: `<blockquote>Learning never stops.</blockquote>`,
  }),

  createExercise({
    id: 42,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Code Element",
    description:
      "Learn how to display small pieces of code using the code element. This element helps identify text that represents programming code.",
    fileName: "index.html",
    code: `<code>console.log("Hello");</code>`,
  }),

  createExercise({
    id: 43,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Preformatted Text",
    description:
      "Learn how to preserve spacing and formatting using the pre element. This is useful when displaying code blocks or text where spacing matters.",
    fileName: "index.html",
    code: `<pre>
Hello
World
</pre>`,
  }),

  createExercise({
    id: 44,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Small Text",
    description:
      "Learn how to display less important text using the small element. This is commonly used for notes, disclaimers, or additional information.",
    fileName: "index.html",
    code: `<small>Copyright 2026</small>`,
  }),

  createExercise({
    id: 45,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Mark Text",
    description:
      "Learn how to highlight text using the mark element. Mark is commonly used to show text that is important or relevant.",
    fileName: "index.html",
    code: `<p>This is <mark>highlighted</mark> text.</p>`,
  }),

    createExercise({
    id: 46,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Subscript Text",
    description:
      "Learn how to display smaller text below the normal text line using the sub element. Subscripts are commonly used for formulas and scientific notation.",
    fileName: "index.html",
    code: `<p>H<sub>2</sub>O</p>`,
  }),

  createExercise({
    id: 47,
    language: "HTML",
    category: "Text",
    difficulty: "Beginner",
    title: "Superscript Text",
    description:
      "Learn how to display smaller text above the normal text line using the sup element. Superscripts are commonly used for powers and mathematical expressions.",
    fileName: "index.html",
    code: `<p>X<sup>2</sup></p>`,
  }),

  createExercise({
    id: 48,
    language: "HTML",
    category: "Lists",
    difficulty: "Beginner",
    title: "Description List",
    description:
      "Learn how to create lists that contain terms and descriptions. Description lists use dl, dt for the term, and dd for the explanation.",
    fileName: "index.html",
    code: `<dl>
  <dt>HTML</dt>
  <dd>Creates webpage structure.</dd>
</dl>`,
  }),

  createExercise({
    id: 49,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Checkbox Input",
    description:
      "Learn how to create checkbox inputs. Checkboxes allow users to select one or more options from a group of choices.",
    fileName: "index.html",
    code: `<input type="checkbox" />`,
  }),

  createExercise({
    id: 50,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Radio Input",
    description:
      "Learn how to create radio buttons. Radio inputs allow users to select one option from a group of choices.",
    fileName: "index.html",
    code: `<input type="radio" name="choice" />`,
  }),

    createExercise({
    id: 51,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Select Dropdown",
    description:
      "Learn how to create dropdown menus using the select element. Dropdowns allow users to choose one option from a list of available choices.",
    fileName: "index.html",
    code: `<select>
  <option>HTML</option>
  <option>CSS</option>
</select>`,
  }),

  createExercise({
    id: 52,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Option Values",
    description:
      "Learn how option elements work inside dropdown menus. The value attribute stores the information that is sent when a user selects an option.",
    fileName: "index.html",
    code: `<select>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
</select>`,
  }),

  createExercise({
    id: 53,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Required Input",
    description:
      "Learn how to require users to fill out a field before submitting a form. The required attribute prevents empty form fields from being submitted.",
    fileName: "index.html",
    code: `<input type="text" required />`,
  }),

  createExercise({
    id: 54,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Placeholder Text",
    description:
      "Learn how to provide hints inside form inputs using the placeholder attribute. Placeholder text helps users understand what information should be entered.",
    fileName: "index.html",
    code: `<input type="text" placeholder="Enter name" />`,
  }),

  createExercise({
    id: 55,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Disabled Input",
    description:
      "Learn how to prevent users from editing a form field using the disabled attribute. Disabled inputs are visible but cannot be changed.",
    fileName: "index.html",
    code: `<input type="text" disabled />`,
  }),

    createExercise({
    id: 56,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Form Action",
    description:
      "Learn how forms know where to send information after submission. The action attribute tells the browser where the form data should be sent.",
    fileName: "index.html",
    code: `<form action="/submit">
  <input type="text" />
</form>`,
  }),

  createExercise({
    id: 57,
    language: "HTML",
    category: "Forms",
    difficulty: "Beginner",
    title: "Form Method",
    description:
      "Learn how forms send information using methods. The method attribute controls whether data is sent through GET or POST requests.",
    fileName: "index.html",
    code: `<form method="POST">
  <input type="text" />
</form>`,
  }),

  createExercise({
    id: 58,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Aside Element",
    description:
      "Learn how to add related content using the aside element. Aside sections are commonly used for sidebars, tips, or additional information.",
    fileName: "index.html",
    code: `<aside>Related Content</aside>`,
  }),

  createExercise({
    id: 59,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Figure Element",
    description:
      "Learn how to group media content with descriptions using the figure element. Figures are commonly used for images, diagrams, or illustrations.",
    fileName: "index.html",
    code: `<figure>
  <img src="image.png" alt="Example" />
</figure>`,
  }),

  createExercise({
    id: 60,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Figure Caption",
    description:
      "Learn how to add descriptions to media using the figcaption element. Captions provide additional information about the content inside a figure.",
    fileName: "index.html",
    code: `<figure>
  <img src="image.png" alt="Example" />
  <figcaption>Example Image</figcaption>
</figure>`,
  }),

    createExercise({
    id: 61,
    language: "HTML",
    category: "Media",
    difficulty: "Beginner",
    title: "Video Source Element",
    description:
      "Learn how to provide video files using the source element. Source elements allow you to specify different video files that the browser can choose from.",
    fileName: "index.html",
    code: `<video controls>
  <source src="video.mp4" />
</video>`,
  }),

  createExercise({
    id: 62,
    language: "HTML",
    category: "Media",
    difficulty: "Beginner",
    title: "Audio Source Element",
    description:
      "Learn how to provide audio files using the source element. Source elements allow browsers to load supported audio formats.",
    fileName: "index.html",
    code: `<audio controls>
  <source src="audio.mp3" />
</audio>`,
  }),

  createExercise({
    id: 63,
    language: "HTML",
    category: "Meta",
    difficulty: "Beginner",
    title: "Page Description",
    description:
      "Learn how to add information about a webpage using meta elements. Meta descriptions help search engines understand what a page is about.",
    fileName: "index.html",
    code: `<meta name="description" content="My website" />`,
  }),

  createExercise({
    id: 64,
    language: "HTML",
    category: "Meta",
    difficulty: "Beginner",
    title: "Viewport Meta Tag",
    description:
      "Learn how to make webpages display correctly on different screen sizes. The viewport meta tag helps create responsive layouts on mobile devices.",
    fileName: "index.html",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
  }),

  createExercise({
    id: 65,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Complete Semantic Layout",
    description:
      "Learn how semantic HTML elements work together to create a clear webpage structure. Semantic elements describe the purpose of each section instead of only acting as containers.",
    fileName: "index.html",
    code: `<header>Header</header>

<nav>Navigation</nav>

<main>Main Content</main>

<footer>Footer</footer>`,
  }),

    createExercise({
    id: 66,
    language: "HTML",
    category: "Structure",
    difficulty: "Beginner",
    title: "Hidden Content",
    description:
      "Learn how to hide elements using the hidden attribute. Hidden content is not displayed by the browser but can still exist in the HTML document.",
    fileName: "index.html",
    code: `<p hidden>This text is hidden.</p>`,
  }),

  createExercise({
    id: 67,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "Editable Content",
    description:
      "Learn how to make text editable directly on a webpage. The contenteditable attribute allows users to change the content of an element.",
    fileName: "index.html",
    code: `<p contenteditable="true">Edit this text.</p>`,
  }),

  createExercise({
    id: 68,
    language: "HTML",
    category: "Attributes",
    difficulty: "Beginner",
    title: "Spellcheck Attribute",
    description:
      "Learn how to enable or disable browser spell checking. The spellcheck attribute helps users find spelling mistakes in editable content.",
    fileName: "index.html",
    code: `<p contenteditable="true" spellcheck="true">Check spelling</p>`,
  }),

  createExercise({
    id: 69,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Beginner",
    title: "ARIA Label",
    description:
      "Learn how to provide extra information for assistive technologies using ARIA labels. ARIA attributes help make websites more accessible.",
    fileName: "index.html",
    code: `<button aria-label="Close menu">X</button>`,
  }),

  createExercise({
    id: 70,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Beginner",
    title: "Role Attribute",
    description:
      "Learn how the role attribute describes the purpose of an element. Roles help assistive technologies understand how content should be interpreted.",
    fileName: "index.html",
    code: `<div role="button">Click Me</div>`,
  }),

    createExercise({
    id: 71,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Details Element",
    description:
      "Learn how to create expandable content using the details element. This element allows users to show or hide additional information without using JavaScript.",
    fileName: "index.html",
    code: `<details>
  <summary>Learn More</summary>
  <p>Extra information.</p>
</details>`,
  }),

  createExercise({
    id: 72,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Summary Element",
    description:
      "Learn how to create the clickable title for a details element. The summary element describes the content that will be revealed when expanded.",
    fileName: "index.html",
    code: `<details>
  <summary>About HTML</summary>
</details>`,
  }),

  createExercise({
    id: 73,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Date Input",
    description:
      "Learn how to create date fields using HTML inputs. Date inputs provide users with a built-in way to select dates from a calendar interface.",
    fileName: "index.html",
    code: `<input type="date" />`,
  }),

  createExercise({
    id: 74,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Number Input",
    description:
      "Learn how to create number fields using HTML inputs. Number inputs allow users to enter numeric values and can include controls for increasing or decreasing numbers.",
    fileName: "index.html",
    code: `<input type="number" />`,
  }),

  createExercise({
    id: 75,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Range Input",
    description:
      "Learn how to create sliders using the range input. Range inputs allow users to select a value within a specific range.",
    fileName: "index.html",
    code: `<input type="range" />`,
  }),

    createExercise({
    id: 76,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Color Input",
    description:
      "Learn how to allow users to select colors using HTML. Color inputs provide a built-in color picker that users can interact with.",
    fileName: "index.html",
    code: `<input type="color" />`,
  }),

  createExercise({
    id: 77,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "File Input",
    description:
      "Learn how to allow users to upload files. File inputs create a button that lets users select files from their device.",
    fileName: "index.html",
    code: `<input type="file" />`,
  }),

  createExercise({
    id: 78,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Password Input",
    description:
      "Learn how to create secure text fields using password inputs. Password fields hide the characters users type to protect sensitive information.",
    fileName: "index.html",
    code: `<input type="password" />`,
  }),

  createExercise({
    id: 79,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Email Input",
    description:
      "Learn how to create email fields using HTML. Email inputs help browsers validate that users enter information in an email format.",
    fileName: "index.html",
    code: `<input type="email" />`,
  }),

  createExercise({
    id: 80,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Search Input",
    description:
      "Learn how to create search fields using HTML. Search inputs are designed for collecting search queries and can provide browser-specific features.",
    fileName: "index.html",
    code: `<input type="search" />`,
  }),

    createExercise({
    id: 81,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Form Grouping",
    description:
      "Learn how to group related form controls using the fieldset element. Fieldsets help organize larger forms and make them easier for users to understand.",
    fileName: "index.html",
    code: `<fieldset>
  <legend>Account Info</legend>
  <input type="text" />
</fieldset>`,
  }),

  createExercise({
    id: 82,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Form Legend",
    description:
      "Learn how to add a title to a group of form fields using the legend element. Legends describe what information a fieldset contains.",
    fileName: "index.html",
    code: `<fieldset>
  <legend>Contact Details</legend>
</fieldset>`,
  }),

  createExercise({
    id: 83,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Caption",
    description:
      "Learn how to describe tables using the caption element. Captions provide a title or explanation for the data displayed in a table.",
    fileName: "index.html",
    code: `<table>
  <caption>Users</caption>
</table>`,
  }),

  createExercise({
    id: 84,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Head",
    description:
      "Learn how to organize table headers using the thead element. Table heads group the header rows separately from the main data.",
    fileName: "index.html",
    code: `<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
</table>`,
  }),

  createExercise({
    id: 85,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Body",
    description:
      "Learn how to organize table data using the tbody element. Table bodies contain the main rows of information inside a table.",
    fileName: "index.html",
    code: `<table>
  <tbody>
    <tr>
      <td>HTML</td>
    </tr>
  </tbody>
</table>`,
  }),

    createExercise({
    id: 86,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Footer",
    description:
      "Learn how to organize the bottom section of a table using the tfoot element. Table footers are commonly used for totals, summaries, or additional table information.",
    fileName: "index.html",
    code: `<table>
  <tfoot>
    <tr>
      <td>Total</td>
    </tr>
  </tfoot>
</table>`,
  }),

  createExercise({
    id: 87,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Column Span",
    description:
      "Learn how to make a table cell stretch across multiple columns using the colspan attribute. This is useful when one piece of information should cover more than one column.",
    fileName: "index.html",
    code: `<table>
  <tr>
    <td colspan="2">Title</td>
  </tr>
</table>`,
  }),

  createExercise({
    id: 88,
    language: "HTML",
    category: "Tables",
    difficulty: "Intermediate",
    title: "Table Row Span",
    description:
      "Learn how to make a table cell stretch across multiple rows using the rowspan attribute. This allows cells to cover more than one row of data.",
    fileName: "index.html",
    code: `<table>
  <tr>
    <td rowspan="2">HTML</td>
  </tr>
</table>`,
  }),

  createExercise({
    id: 89,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Nested Elements",
    description:
      "Learn how HTML elements can be placed inside other elements. Nesting allows developers to create organized structures and layouts for webpages.",
    fileName: "index.html",
    code: `<div>
  <section>
    <h2>Title</h2>
  </section>
</div>`,
  }),

  createExercise({
    id: 90,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Complete Website Layout",
    description:
      "Learn how common semantic HTML elements combine to create a complete website structure. This layout uses sections developers commonly build before adding CSS.",
    fileName: "index.html",
    code: `<header>Header</header>

<nav>Navigation</nav>

<main>
  <section>Content</section>
</main>

<footer>Footer</footer>`,
  }),

    createExercise({
    id: 91,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "HTML Comments",
    description:
      "Learn how to add notes inside HTML code using comments. Comments are ignored by the browser and are useful for explaining code or leaving reminders for developers.",
    fileName: "index.html",
    code: `<!-- This is a comment -->`,
  }),

  createExercise({
    id: 92,
    language: "HTML",
    category: "Links",
    difficulty: "Intermediate",
    title: "Internal Page Link",
    description:
      "Learn how to create links that move users to different sections of the same webpage. Internal links use element IDs as destinations.",
    fileName: "index.html",
    code: `<a href="#about">About</a>

<section id="about">
  About Me
</section>`,
  }),

  createExercise({
    id: 93,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "HTML Section IDs",
    description:
      "Learn how IDs can identify specific sections of a webpage. IDs create unique names that can be used for links, styling, and JavaScript.",
    fileName: "index.html",
    code: `<section id="contact">
  Contact Information
</section>`,
  }),

  createExercise({
    id: 94,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Intermediate",
    title: "Accessible Button",
    description:
      "Learn how to create buttons that are clear and accessible. Buttons should describe the action they perform so all users understand their purpose.",
    fileName: "index.html",
    code: `<button type="button">
  Save Changes
</button>`,
  }),

  createExercise({
    id: 95,
    language: "HTML",
    category: "Accessibility",
    difficulty: "Intermediate",
    title: "Language Attribute",
    description:
      "Learn how to define the language of a webpage. The lang attribute helps browsers and assistive technologies understand how to read the content.",
    fileName: "index.html",
    code: `<html lang="en">`,
  }),

    createExercise({
    id: 96,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "HTML Template",
    description:
      "Learn how to use a reusable HTML template. Developers often start projects with a standard document structure before adding content and styles.",
    fileName: "index.html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Website</title>
</head>
<body>

</body>
</html>`,
  }),

  createExercise({
    id: 97,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Form Submit Button",
    description:
      "Learn how submit buttons work inside forms. A submit button sends the information entered into a form for processing.",
    fileName: "index.html",
    code: `<form>
  <input type="text" />
  <button type="submit">Submit</button>
</form>`,
  }),

  createExercise({
    id: 98,
    language: "HTML",
    category: "Forms",
    difficulty: "Intermediate",
    title: "Checkbox Group",
    description:
      "Learn how to group multiple checkbox options together. Checkboxes allow users to select multiple choices from available options.",
    fileName: "index.html",
    code: `<label>
  <input type="checkbox" />
  HTML
</label>

<label>
  <input type="checkbox" />
  CSS
</label>`,
  }),

  createExercise({
    id: 99,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Portfolio Page Structure",
    description:
      "Learn how to organize a simple portfolio page using semantic HTML sections. This structure is commonly used before adding CSS styling.",
    fileName: "index.html",
    code: `<header>
  My Portfolio
</header>

<main>
  <section>Projects</section>
  <section>About Me</section>
</main>

<footer>
  Contact
</footer>`,
  }),

  createExercise({
    id: 100,
    language: "HTML",
    category: "Structure",
    difficulty: "Intermediate",
    title: "Basic Webpage Layout",
    description:
      "Learn how the main parts of a webpage fit together. This final HTML exercise combines common elements used to create a complete webpage foundation.",
    fileName: "index.html",
    code: `<header>Website Header</header>

<nav>Navigation</nav>

<main>
  <article>Main Content</article>
</main>

<footer>Website Footer</footer>`,
  }),

];

export default htmlExercises;