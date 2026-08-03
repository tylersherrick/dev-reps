import { createExercise } from "../exercises";

const cssExercises = [
  createExercise({
    id: 1,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Element Selector",
    description:
      "Learn how CSS selects HTML elements to apply styles. This selector targets every paragraph on the page and changes how the text appears.",
    fileName: "styles.css",
    code: `p {
  color: blue;
}`,
  }),

  createExercise({
    id: 2,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Class Selector",
    description:
      "Learn how to style specific groups of elements using classes. A class selector allows you to apply the same design choices to multiple elements, such as cards, buttons, or sections.",
    fileName: "styles.css",
    code: `.card {
  background: white;
}`,
  }),

  createExercise({
    id: 3,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "ID Selector",
    description:
      "Learn how to target one unique element using an ID selector. IDs are used when a single element needs its own specific styling.",
    fileName: "styles.css",
    code: `#header {
  background: black;
}`,
  }),

  createExercise({
    id: 4,
    language: "CSS",
    category: "Colors",
    difficulty: "Beginner",
    title: "Text Color",
    description:
      "Learn how to change the color of text on a webpage. The color property controls the appearance of words, headings, and other text elements.",
    fileName: "styles.css",
    code: `h1 {
  color: green;
}`,
  }),

  createExercise({
    id: 5,
    language: "CSS",
    category: "Colors",
    difficulty: "Beginner",
    title: "Background Color",
    description:
      "Learn how to change the background color of an element. Background colors are used to create sections, cards, buttons, and visual areas on a webpage.",
    fileName: "styles.css",
    code: `.box {
  background-color: lightgray;
}`,
  }),

    createExercise({
    id: 6,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Font Size",
    description:
      "Learn how to control the size of text on a webpage. The font-size property changes how large or small text appears, helping create titles, headings, and readable paragraphs.",
    fileName: "styles.css",
    code: `h1 {
  font-size: 32px;
}`,
  }),

  createExercise({
    id: 7,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Font Family",
    description:
      "Learn how to change the style of text using different fonts. The font-family property controls the appearance of letters and helps create different visual styles.",
    fileName: "styles.css",
    code: `body {
  font-family: Arial;
}`,
  }),

  createExercise({
    id: 8,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Font Weight",
    description:
      "Learn how to make text appear lighter or heavier. The font-weight property controls how bold text looks on a webpage.",
    fileName: "styles.css",
    code: `h2 {
  font-weight: bold;
}`,
  }),

  createExercise({
    id: 9,
    language: "CSS",
    category: "Spacing",
    difficulty: "Beginner",
    title: "Margin",
    description:
      "Learn how to add space around an element. Margin creates distance between an element and the other elements around it, helping organize the layout of a page.",
    fileName: "styles.css",
    code: `.card {
  margin: 20px;
}`,
  }),

  createExercise({
    id: 10,
    language: "CSS",
    category: "Spacing",
    difficulty: "Beginner",
    title: "Padding",
    description:
      "Learn how to add space inside an element. Padding creates room between the content and the edge of a box, making cards, buttons, and sections easier to read.",
    fileName: "styles.css",
    code: `.card {
  padding: 20px;
}`,
  }),

    createExercise({
    id: 11,
    language: "CSS",
    category: "Spacing",
    difficulty: "Beginner",
    title: "Border",
    description:
      "Learn how to add visible edges around elements. The border property creates lines around boxes, cards, and sections to help separate content visually.",
    fileName: "styles.css",
    code: `.card {
  border: 1px solid black;
}`,
  }),

  createExercise({
    id: 12,
    language: "CSS",
    category: "Spacing",
    difficulty: "Beginner",
    title: "Border Radius",
    description:
      "Learn how to round the corners of elements. The border-radius property creates softer shapes and is commonly used for cards, buttons, and profile images.",
    fileName: "styles.css",
    code: `.card {
  border-radius: 12px;
}`,
  }),

  createExercise({
    id: 13,
    language: "CSS",
    category: "Sizing",
    difficulty: "Beginner",
    title: "Width",
    description:
      "Learn how to control the horizontal size of an element. The width property determines how much space an element takes from left to right.",
    fileName: "styles.css",
    code: `.box {
  width: 300px;
}`,
  }),

  createExercise({
    id: 14,
    language: "CSS",
    category: "Sizing",
    difficulty: "Beginner",
    title: "Height",
    description:
      "Learn how to control the vertical size of an element. The height property determines how much space an element takes from top to bottom.",
    fileName: "styles.css",
    code: `.box {
  height: 200px;
}`,
  }),

  createExercise({
    id: 15,
    language: "CSS",
    category: "Sizing",
    difficulty: "Beginner",
    title: "Max Width",
    description:
      "Learn how to limit how wide an element can become. Max-width is commonly used to keep content readable and prevent sections from stretching too far across large screens.",
    fileName: "styles.css",
    code: `.container {
  max-width: 1200px;
}`,
  }),

    createExercise({
    id: 16,
    language: "CSS",
    category: "Sizing",
    difficulty: "Beginner",
    title: "Min Width",
    description:
      "Learn how to set the smallest width an element can have. Min-width helps prevent elements from becoming too small and keeps layouts easier to read.",
    fileName: "styles.css",
    code: `.box {
  min-width: 200px;
}`,
  }),

  createExercise({
    id: 17,
    language: "CSS",
    category: "Sizing",
    difficulty: "Beginner",
    title: "Min Height",
    description:
      "Learn how to set the smallest height an element can have. Min-height ensures a section always has enough vertical space even when there is less content.",
    fileName: "styles.css",
    code: `.section {
  min-height: 300px;
}`,
  }),

  createExercise({
    id: 18,
    language: "CSS",
    category: "Backgrounds",
    difficulty: "Beginner",
    title: "Background Image",
    description:
      "Learn how to add images behind webpage content. Background images are commonly used for hero sections, banners, and decorative areas.",
    fileName: "styles.css",
    code: `.hero {
  background-image: url("image.jpg");
}`,
  }),

  createExercise({
    id: 19,
    language: "CSS",
    category: "Backgrounds",
    difficulty: "Beginner",
    title: "Background Size",
    description:
      "Learn how to control how a background image fits inside an element. The background-size property helps images fill areas correctly without looking stretched.",
    fileName: "styles.css",
    code: `.hero {
  background-size: cover;
}`,
  }),

  createExercise({
    id: 20,
    language: "CSS",
    category: "Backgrounds",
    difficulty: "Beginner",
    title: "Background Position",
    description:
      "Learn how to control where a background image appears inside an element. This helps position important parts of images in the correct location.",
    fileName: "styles.css",
    code: `.hero {
  background-position: center;
}`,
  }),

    createExercise({
    id: 21,
    language: "CSS",
    category: "Display",
    difficulty: "Beginner",
    title: "Display Block",
    description:
      "Learn how block elements take up the full available width and start on a new line. The display property controls how elements behave in the page layout.",
    fileName: "styles.css",
    code: `.box {
  display: block;
}`,
  }),

  createExercise({
    id: 22,
    language: "CSS",
    category: "Display",
    difficulty: "Beginner",
    title: "Display Inline",
    description:
      "Learn how inline elements stay on the same line as other content. Inline elements only take up the space they need instead of creating a new row.",
    fileName: "styles.css",
    code: `.text {
  display: inline;
}`,
  }),

  createExercise({
    id: 23,
    language: "CSS",
    category: "Display",
    difficulty: "Beginner",
    title: "Display None",
    description:
      "Learn how to completely hide elements from the page. Display none removes the element from the layout so it no longer takes up space.",
    fileName: "styles.css",
    code: `.hidden {
  display: none;
}`,
  }),

  createExercise({
    id: 24,
    language: "CSS",
    category: "Display",
    difficulty: "Beginner",
    title: "Inline Block",
    description:
      "Learn how inline-block combines features of inline and block elements. It allows elements to sit next to each other while still accepting width and height values.",
    fileName: "styles.css",
    code: `.card {
  display: inline-block;
  width: 200px;
}`,
  }),

  createExercise({
    id: 25,
    language: "CSS",
    category: "Opacity",
    difficulty: "Beginner",
    title: "Element Opacity",
    description:
      "Learn how to control how transparent an element appears. Opacity values between 0 and 1 change how much of the element is visible.",
    fileName: "styles.css",
    code: `.image {
  opacity: 0.5;
}`,
  }),

    createExercise({
    id: 26,
    language: "CSS",
    category: "Box Model",
    difficulty: "Beginner",
    title: "Box Sizing",
    description:
      "Learn how CSS calculates the size of elements. The box-sizing property controls whether padding and borders are included inside an element's width and height.",
    fileName: "styles.css",
    code: `.box {
  box-sizing: border-box;
}`,
  }),

  createExercise({
    id: 27,
    language: "CSS",
    category: "Box Model",
    difficulty: "Beginner",
    title: "Content Box",
    description:
      "Learn about the default box model behavior in CSS. Content-box means the width and height only apply to the content, while padding and borders are added separately.",
    fileName: "styles.css",
    code: `.box {
  box-sizing: content-box;
}`,
  }),

  createExercise({
    id: 28,
    language: "CSS",
    category: "Shadows",
    difficulty: "Beginner",
    title: "Box Shadow",
    description:
      "Learn how to add depth to elements using shadows. Box shadows are commonly used on cards, buttons, and containers to make them stand out from the background.",
    fileName: "styles.css",
    code: `.card {
  box-shadow: 0 4px 8px gray;
}`,
  }),

  createExercise({
    id: 29,
    language: "CSS",
    category: "Shadows",
    difficulty: "Beginner",
    title: "Text Shadow",
    description:
      "Learn how to add shadows to text. Text shadows can create depth and improve the visual style of headings and other important text.",
    fileName: "styles.css",
    code: `h1 {
  text-shadow: 2px 2px gray;
}`,
  }),

  createExercise({
    id: 30,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Text Alignment",
    description:
      "Learn how to control where text appears inside an element. Text alignment can position content to the left, center, or right side of a section.",
    fileName: "styles.css",
    code: `h1 {
  text-align: center;
}`,
  }),

    createExercise({
    id: 31,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Text Decoration",
    description:
      "Learn how to add or remove decorative lines from text. The text-decoration property is commonly used for links, headings, and highlighting important text.",
    fileName: "styles.css",
    code: `a {
  text-decoration: none;
}`,
  }),

  createExercise({
    id: 32,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Text Transform",
    description:
      "Learn how to change the capitalization of text without editing the HTML. The text-transform property can make text uppercase, lowercase, or capitalize each word.",
    fileName: "styles.css",
    code: `.title {
  text-transform: uppercase;
}`,
  }),

  createExercise({
    id: 33,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Letter Spacing",
    description:
      "Learn how to control the space between individual letters. Letter spacing can make headings feel more open or compressed.",
    fileName: "styles.css",
    code: `h1 {
  letter-spacing: 2px;
}`,
  }),

  createExercise({
    id: 34,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Line Height",
    description:
      "Learn how to control the vertical spacing between lines of text. Line height helps make paragraphs easier to read by adding or reducing space between lines.",
    fileName: "styles.css",
    code: `p {
  line-height: 1.5;
}`,
  }),

  createExercise({
    id: 35,
    language: "CSS",
    category: "Typography",
    difficulty: "Beginner",
    title: "Text Overflow",
    description:
      "Learn how to handle text that is too large to fit inside a container. Text overflow properties help control how extra content is displayed.",
    fileName: "styles.css",
    code: `.title {
  overflow: hidden;
  text-overflow: ellipsis;
}`,
  }),

    createExercise({
    id: 36,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Universal Selector",
    description:
      "Learn how to select every element on a webpage using the universal selector. This is commonly used for applying global styles or resetting default browser spacing.",
    fileName: "styles.css",
    code: `* {
  margin: 0;
  padding: 0;
}`,
  }),

  createExercise({
    id: 37,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Multiple Selectors",
    description:
      "Learn how to apply the same styles to multiple elements at once. Multiple selectors allow you to avoid repeating the same CSS rules.",
    fileName: "styles.css",
    code: `h1, p {
  color: black;
}`,
  }),

  createExercise({
    id: 38,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Nested Selector",
    description:
      "Learn how to target elements based on where they appear inside other elements. Nested selectors allow you to style specific parts of a page structure.",
    fileName: "styles.css",
    code: `.card p {
  color: gray;
}`,
  }),

  createExercise({
    id: 39,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Child Selector",
    description:
      "Learn how to target direct children of an element. The child selector gives more control over which nested elements receive styles.",
    fileName: "styles.css",
    code: `.menu > li {
  list-style: none;
}`,
  }),

  createExercise({
    id: 40,
    language: "CSS",
    category: "Selectors",
    difficulty: "Beginner",
    title: "Attribute Selector",
    description:
      "Learn how to select elements based on their attributes. Attribute selectors allow you to style elements with specific HTML properties.",
    fileName: "styles.css",
    code: `input[type="text"] {
  border: 1px solid gray;
}`,
  }),

  createExercise({
    id: 41,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "Hover State",
    description:
      "Learn how to change the appearance of an element when a user moves their mouse over it. The hover pseudo-class is commonly used for buttons, links, and interactive elements.",
    fileName: "styles.css",
    code: `button:hover {
  background: blue;
}`,
  }),

  createExercise({
    id: 42,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "Focus State",
    description:
      "Learn how to style elements when they are selected or focused. Focus states are important for forms and keyboard accessibility because they show users where they are interacting.",
    fileName: "styles.css",
    code: `input:focus {
  border-color: blue;
}`,
  }),

  createExercise({
    id: 43,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "First Child",
    description:
      "Learn how to style the first element inside a group. The first-child pseudo-class allows you to apply unique styles without adding extra classes.",
    fileName: "styles.css",
    code: `li:first-child {
  color: red;
}`,
  }),

  createExercise({
    id: 44,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "Last Child",
    description:
      "Learn how to style the final element inside a group. The last-child pseudo-class is useful when the last item needs different spacing or styling.",
    fileName: "styles.css",
    code: `li:last-child {
  margin-bottom: 0;
}`,
  }),

  createExercise({
    id: 45,
    language: "CSS",
    category: "Pseudo Classes",
    difficulty: "Intermediate",
    title: "Nth Child",
    description:
      "Learn how to select elements by their position in a group. The nth-child pseudo-class lets you target specific items without adding additional classes.",
    fileName: "styles.css",
    code: `li:nth-child(2) {
  color: green;
}`,
  }),

    createExercise({
    id: 46,
    language: "CSS",
    category: "Pseudo Elements",
    difficulty: "Intermediate",
    title: "Before Element",
    description:
      "Learn how to create extra content before an element without adding more HTML. The before pseudo-element is commonly used for icons, decorations, and visual effects.",
    fileName: "styles.css",
    code: `.title::before {
  content: "★";
}`,
  }),

  createExercise({
    id: 47,
    language: "CSS",
    category: "Pseudo Elements",
    difficulty: "Intermediate",
    title: "After Element",
    description:
      "Learn how to create extra content after an element without changing the HTML. The after pseudo-element is commonly used for decorative details and small additions.",
    fileName: "styles.css",
    code: `.title::after {
  content: "→";
}`,
  }),

  createExercise({
    id: 48,
    language: "CSS",
    category: "Transitions",
    difficulty: "Intermediate",
    title: "Basic Transition",
    description:
      "Learn how to make style changes happen smoothly instead of instantly. Transitions are commonly used for hover effects on buttons, cards, and interactive elements.",
    fileName: "styles.css",
    code: `.button {
  transition: 0.3s;
}`,
  }),

  createExercise({
    id: 49,
    language: "CSS",
    category: "Transitions",
    difficulty: "Intermediate",
    title: "Transition Property",
    description:
      "Learn how to control which CSS property changes smoothly. This allows you to create focused animations instead of transitioning every possible style.",
    fileName: "styles.css",
    code: `.button {
  transition-property: background;
}`,
  }),

  createExercise({
    id: 50,
    language: "CSS",
    category: "Transitions",
    difficulty: "Intermediate",
    title: "Transition Duration",
    description:
      "Learn how to control how long a transition takes. Duration determines whether a style change feels quick, slow, or smooth.",
    fileName: "styles.css",
    code: `.button {
  transition-duration: 0.3s;
}`,
  }),

    createExercise({
    id: 51,
    language: "CSS",
    category: "Transitions",
    difficulty: "Intermediate",
    title: "Transition Timing",
    description:
      "Learn how to control the speed pattern of transitions. Timing functions change how an animation speeds up or slows down during the transition.",
    fileName: "styles.css",
    code: `.button {
  transition-timing-function: ease;
}`,
  }),

  createExercise({
    id: 52,
    language: "CSS",
    category: "Transforms",
    difficulty: "Intermediate",
    title: "Scale Transform",
    description:
      "Learn how to resize elements visually without changing their actual layout space. Scale transforms are commonly used for hover effects and interactive cards.",
    fileName: "styles.css",
    code: `.card:hover {
  transform: scale(1.05);
}`,
  }),

  createExercise({
    id: 53,
    language: "CSS",
    category: "Transforms",
    difficulty: "Intermediate",
    title: "Rotate Transform",
    description:
      "Learn how to rotate elements using CSS transforms. Rotations can be used for decorative effects, icons, and interactive animations.",
    fileName: "styles.css",
    code: `.icon {
  transform: rotate(45deg);
}`,
  }),

  createExercise({
    id: 54,
    language: "CSS",
    category: "Transforms",
    difficulty: "Intermediate",
    title: "Translate Transform",
    description:
      "Learn how to move elements visually using translate. Unlike changing margins or positioning, transforms move elements without affecting the layout around them.",
    fileName: "styles.css",
    code: `.box {
  transform: translateX(50px);
}`,
  }),

  createExercise({
    id: 55,
    language: "CSS",
    category: "Transforms",
    difficulty: "Intermediate",
    title: "Multiple Transforms",
    description:
      "Learn how to combine multiple transforms on one element. Multiple transformations allow you to create more complex visual movements and effects.",
    fileName: "styles.css",
    code: `.card:hover {
  transform: scale(1.05) rotate(2deg);
}`,
  }),

    createExercise({
    id: 56,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Display Flex",
    description:
      "Learn how to create flexible layouts using flexbox. Display flex changes how elements are arranged and allows items to be positioned more easily in rows or columns.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
}`,
  }),

  createExercise({
    id: 57,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Direction",
    description:
      "Learn how to control the direction of flex items. Flex direction determines whether elements are arranged in a row or stacked vertically in a column.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  flex-direction: column;
}`,
  }),

  createExercise({
    id: 58,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Justify Content",
    description:
      "Learn how to position items along the main axis of a flex container. Justify content controls spacing and alignment between elements.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  justify-content: center;
}`,
  }),

  createExercise({
    id: 59,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Align Items",
    description:
      "Learn how to align items across the opposite axis in a flex container. Align items is commonly used to vertically center content in a row layout.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  align-items: center;
}`,
  }),

  createExercise({
    id: 60,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Gap",
    description:
      "Learn how to add consistent spacing between flex items. Gap creates space between elements without needing individual margins.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  gap: 20px;
}`,
  }),

    createExercise({
    id: 61,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Wrap",
    description:
      "Learn how to control whether flex items stay on one line or move to additional lines. Flex wrap helps layouts adjust when there is not enough space for all items.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  flex-wrap: wrap;
}`,
  }),

  createExercise({
    id: 62,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Grow",
    description:
      "Learn how flex items can expand to fill available space. Flex grow allows elements inside a flex container to take up extra room proportionally.",
    fileName: "styles.css",
    code: `.item {
  flex-grow: 1;
}`,
  }),

  createExercise({
    id: 63,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Shrink",
    description:
      "Learn how flex items can become smaller when there is not enough room. Flex shrink helps prevent items from overflowing their container.",
    fileName: "styles.css",
    code: `.item {
  flex-shrink: 1;
}`,
  }),

  createExercise({
    id: 64,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Flex Basis",
    description:
      "Learn how to set the starting size of a flex item before extra space is distributed. Flex basis controls the initial width or height of an item.",
    fileName: "styles.css",
    code: `.item {
  flex-basis: 200px;
}`,
  }),

  createExercise({
    id: 65,
    language: "CSS",
    category: "Flexbox",
    difficulty: "Intermediate",
    title: "Centering With Flexbox",
    description:
      "Learn how to perfectly center content inside a container. Combining justify-content and align-items is one of the most common ways to center elements in modern layouts.",
    fileName: "styles.css",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
  }),

    createExercise({
    id: 66,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Display Grid",
    description:
      "Learn how to create grid layouts using CSS Grid. Grid allows you to organize elements into rows and columns, making it useful for page layouts and card collections.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
}`,
  }),

  createExercise({
    id: 67,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Columns",
    description:
      "Learn how to define columns in a grid layout. Grid template columns controls how many columns appear and how much space each column receives.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
  }),

  createExercise({
    id: 68,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Rows",
    description:
      "Learn how to define rows in a grid layout. Grid template rows controls the height and structure of rows inside a grid container.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
  grid-template-rows: 100px 100px;
}`,
  }),

  createExercise({
    id: 69,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Gap",
    description:
      "Learn how to add consistent spacing between grid items. Gap creates space between rows and columns without needing individual margins.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
  gap: 20px;
}`,
  }),

  createExercise({
    id: 70,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Template Areas",
    description:
      "Learn how to create named sections in a grid layout. Grid template areas allow you to visually describe where parts of a webpage should appear.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
  grid-template-areas:
    "header header"
    "main sidebar";
}`,
  }),

    createExercise({
    id: 71,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Column Span",
    description:
      "Learn how to make a grid item take up multiple columns. Column span is useful when a section needs to be wider than the other items in a grid layout.",
    fileName: "styles.css",
    code: `.header {
  grid-column: span 2;
}`,
  }),

  createExercise({
    id: 72,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Row Span",
    description:
      "Learn how to make a grid item take up multiple rows. Row span allows certain sections to become taller than surrounding grid items.",
    fileName: "styles.css",
    code: `.sidebar {
  grid-row: span 2;
}`,
  }),

  createExercise({
    id: 73,
    language: "CSS",
    category: "Grid",
    difficulty: "Intermediate",
    title: "Grid Alignment",
    description:
      "Learn how to position items inside a grid container. Grid alignment properties control where content sits inside its available space.",
    fileName: "styles.css",
    code: `.container {
  display: grid;
  place-items: center;
}`,
  }),

  createExercise({
    id: 74,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Position Relative",
    description:
      "Learn how to create a positioning reference point for child elements. Relative positioning allows elements inside it to be positioned based on that container.",
    fileName: "styles.css",
    code: `.container {
  position: relative;
}`,
  }),

  createExercise({
    id: 75,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Position Absolute",
    description:
      "Learn how to position elements exactly where you want them. Absolute positioning removes an element from normal layout flow and positions it relative to a positioned parent.",
    fileName: "styles.css",
    code: `.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}`,
  }),

    createExercise({
    id: 76,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Position Fixed",
    description:
      "Learn how to keep an element attached to the browser window. Fixed positioning is commonly used for navigation bars, floating buttons, and elements that should stay visible while scrolling.",
    fileName: "styles.css",
    code: `.button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
  }),

  createExercise({
    id: 77,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Position Sticky",
    description:
      "Learn how to make an element stick while scrolling through a page. Sticky positioning allows elements like headers or sidebars to remain visible after reaching a certain point.",
    fileName: "styles.css",
    code: `.header {
  position: sticky;
  top: 0;
}`,
  }),

  createExercise({
    id: 78,
    language: "CSS",
    category: "Positioning",
    difficulty: "Intermediate",
    title: "Z Index",
    description:
      "Learn how to control which elements appear in front of others. The z-index property changes the stacking order of positioned elements.",
    fileName: "styles.css",
    code: `.modal {
  position: absolute;
  z-index: 10;
}`,
  }),

  createExercise({
    id: 79,
    language: "CSS",
    category: "Overflow",
    difficulty: "Intermediate",
    title: "Hidden Overflow",
    description:
      "Learn how to control content that extends outside of an element. Hidden overflow removes anything that goes beyond the container boundaries.",
    fileName: "styles.css",
    code: `.box {
  overflow: hidden;
}`,
  }),

  createExercise({
    id: 80,
    language: "CSS",
    category: "Overflow",
    difficulty: "Intermediate",
    title: "Scrollable Overflow",
    description:
      "Learn how to make containers scroll when content becomes too large. Scrollable overflow keeps layouts organized while allowing users to access extra content.",
    fileName: "styles.css",
    code: `.box {
  overflow: auto;
}`,
  }),

    createExercise({
    id: 81,
    language: "CSS",
    category: "Responsive Design",
    difficulty: "Intermediate",
    title: "Media Query",
    description:
      "Learn how to change styles based on screen size. Media queries allow webpages to adjust their layout for different devices like phones, tablets, and desktops.",
    fileName: "styles.css",
    code: `@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
  }),

  createExercise({
    id: 82,
    language: "CSS",
    category: "Responsive Design",
    difficulty: "Intermediate",
    title: "Mobile Font Size",
    description:
      "Learn how to adjust text sizes for smaller screens. Responsive designs often change font sizes so content remains easy to read on different devices.",
    fileName: "styles.css",
    code: `@media (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
}`,
  }),

  createExercise({
    id: 83,
    language: "CSS",
    category: "Responsive Design",
    difficulty: "Intermediate",
    title: "Responsive Width",
    description:
      "Learn how to make elements resize based on the available screen space. Percentage widths allow containers to adapt instead of using fixed sizes.",
    fileName: "styles.css",
    code: `.container {
  width: 100%;
}`,
  }),

  createExercise({
    id: 84,
    language: "CSS",
    category: "Responsive Design",
    difficulty: "Intermediate",
    title: "Viewport Units",
    description:
      "Learn how to size elements relative to the browser window. Viewport units allow designs to scale based on the user's screen size.",
    fileName: "styles.css",
    code: `.hero {
  height: 100vh;
}`,
  }),

  createExercise({
    id: 85,
    language: "CSS",
    category: "Responsive Design",
    difficulty: "Intermediate",
    title: "Responsive Images",
    description:
      "Learn how to make images resize properly inside different layouts. Responsive images prevent content from overflowing smaller screens.",
    fileName: "styles.css",
    code: `img {
  max-width: 100%;
  height: auto;
}`,
  }),

    createExercise({
    id: 86,
    language: "CSS",
    category: "Variables",
    difficulty: "Intermediate",
    title: "CSS Variable",
    description:
      "Learn how to create reusable values in CSS using variables. Variables help keep colors, spacing, and other design choices consistent across an entire webpage.",
    fileName: "styles.css",
    code: `:root {
  --primary-color: blue;
}`,
  }),

  createExercise({
    id: 87,
    language: "CSS",
    category: "Variables",
    difficulty: "Intermediate",
    title: "Using CSS Variables",
    description:
      "Learn how to use previously created CSS variables. Using variables allows you to update a design value in one place instead of changing many different styles.",
    fileName: "styles.css",
    code: `.button {
  background: var(--primary-color);
}`,
  }),

  createExercise({
    id: 88,
    language: "CSS",
    category: "Functions",
    difficulty: "Intermediate",
    title: "Calc Function",
    description:
      "Learn how to perform calculations inside CSS values. The calc function allows you to combine different units when creating flexible layouts.",
    fileName: "styles.css",
    code: `.container {
  width: calc(100% - 40px);
}`,
  }),

  createExercise({
    id: 89,
    language: "CSS",
    category: "Functions",
    difficulty: "Intermediate",
    title: "Clamp Function",
    description:
      "Learn how to create responsive sizes with limits. The clamp function allows values to grow and shrink while staying between a minimum and maximum size.",
    fileName: "styles.css",
    code: `h1 {
  font-size: clamp(24px, 5vw, 48px);
}`,
  }),

  createExercise({
    id: 90,
    language: "CSS",
    category: "Functions",
    difficulty: "Intermediate",
    title: "Min and Max Functions",
    description:
      "Learn how to control sizing with minimum and maximum limits. These functions help create layouts that adapt while preventing elements from becoming too large or too small.",
    fileName: "styles.css",
    code: `.box {
  width: min(500px, 100%);
}`,
  }),

    createExercise({
    id: 91,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Keyframe Animation",
    description:
      "Learn how to create animations in CSS using keyframes. Keyframes define the different stages of an animation and allow elements to change styles over time.",
    fileName: "styles.css",
    code: `@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}`,
  }),

  createExercise({
    id: 92,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Animation Property",
    description:
      "Learn how to apply a keyframe animation to an element. The animation property controls which animation runs and how it behaves.",
    fileName: "styles.css",
    code: `.box {
  animation: slide 2s;
}`,
  }),

  createExercise({
    id: 93,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Animation Duration",
    description:
      "Learn how to control how long an animation takes to complete. Duration changes the speed of movement and visual effects.",
    fileName: "styles.css",
    code: `.box {
  animation-duration: 3s;
}`,
  }),

  createExercise({
    id: 94,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Animation Repeat",
    description:
      "Learn how to make animations run multiple times. Animation iteration count controls whether an animation happens once or repeats.",
    fileName: "styles.css",
    code: `.box {
  animation-iteration-count: infinite;
}`,
  }),

  createExercise({
    id: 95,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Animation Delay",
    description:
      "Learn how to wait before starting an animation. Animation delay is useful when creating timed effects or sequences of movement.",
    fileName: "styles.css",
    code: `.box {
  animation-delay: 1s;
}`,
  }),

    createExercise({
    id: 96,
    language: "CSS",
    category: "Animations",
    difficulty: "Intermediate",
    title: "Animation Direction",
    description:
      "Learn how to control the direction an animation plays. Animation direction allows effects to move forward, backward, or alternate between both directions.",
    fileName: "styles.css",
    code: `.box {
  animation-direction: alternate;
}`,
  }),

  createExercise({
    id: 97,
    language: "CSS",
    category: "Filters",
    difficulty: "Intermediate",
    title: "Blur Filter",
    description:
      "Learn how to apply visual effects to elements using CSS filters. The blur filter can soften images and create visual effects without changing the original file.",
    fileName: "styles.css",
    code: `.image {
  filter: blur(5px);
}`,
  }),

  createExercise({
    id: 98,
    language: "CSS",
    category: "Filters",
    difficulty: "Intermediate",
    title: "Brightness Filter",
    description:
      "Learn how to adjust the brightness of elements using CSS filters. This is commonly used for image effects and hover interactions.",
    fileName: "styles.css",
    code: `.image {
  filter: brightness(80%);
}`,
  }),

  createExercise({
    id: 99,
    language: "CSS",
    category: "Advanced Layout",
    difficulty: "Intermediate",
    title: "CSS Card Component",
    description:
      "Learn how multiple CSS concepts combine to create a reusable card design. Cards are common UI elements that use spacing, borders, colors, and shadows together.",
    fileName: "styles.css",
    code: `.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px gray;
}`,
  }),

  createExercise({
    id: 100,
    language: "CSS",
    category: "Advanced Layout",
    difficulty: "Intermediate",
    title: "Responsive Page Layout",
    description:
      "Learn how different CSS tools work together to create a responsive webpage. This combines layout, spacing, and responsive design concepts used in real projects.",
    fileName: "styles.css",
    code: `.page {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .page {
    flex-direction: column;
  }
}`,
  }),

];

export default cssExercises;