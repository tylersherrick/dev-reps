import { createExercise } from "../exercises";

const sqlExercises = [
  createExercise({
    id: 1,
    language: "SQL",
    category: "Queries",
    difficulty: "Beginner",
    title: "Select All",
    description:
      "Learn how to retrieve every record from a database table. SELECT is the foundation of reading data in SQL and is used constantly in backend applications.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users;`,
  }),

  createExercise({
    id: 2,
    language: "SQL",
    category: "Filtering",
    difficulty: "Beginner",
    title: "WHERE Clause",
    description:
      "Learn how to filter database results based on conditions. WHERE allows applications to find only the records that match specific requirements.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
WHERE age >= 18;`,
  }),

  createExercise({
    id: 3,
    language: "SQL",
    category: "Sorting",
    difficulty: "Beginner",
    title: "ORDER BY",
    description:
      "Learn how to sort query results. ORDER BY is commonly used to display newest records, highest values, or alphabetical results.",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
ORDER BY price DESC;`,
  }),

  createExercise({
    id: 4,
    language: "SQL",
    category: "Joining",
    difficulty: "Intermediate",
    title: "INNER JOIN",
    description:
      "Learn how to combine related data from multiple tables. JOINs are essential for working with relational databases where information is separated across tables.",
    fileName: "queries.sql",
    code: `SELECT users.name, orders.total
FROM users
JOIN orders
ON users.id = orders.user_id;`,
  }),

  createExercise({
    id: 5,
    language: "SQL",
    category: "Grouping",
    difficulty: "Intermediate",
    title: "GROUP BY",
    description:
      "Learn how to group records together to perform calculations. GROUP BY is commonly used with COUNT, SUM, and AVG to create reports and summaries.",
    fileName: "queries.sql",
    code: `SELECT department, COUNT(*) AS employees
FROM staff
GROUP BY department;`,
  }),

    createExercise({
    id: 6,
    language: "SQL",
    category: "Aggregations",
    difficulty: "Intermediate",
    title: "COUNT Function",
    description: "Use COUNT to determine how many rows exist in a table or match a condition. Aggregate functions are commonly used for reports and analyzing stored data.",
    fileName: "queries.sql",
    code: `SELECT COUNT(*) AS total_users
FROM users;`,
  }),

  createExercise({
    id: 7,
    language: "SQL",
    category: "Aggregations",
    difficulty: "Intermediate",
    title: "SUM Function",
    description: "Use SUM to calculate the total value of a numeric column. This is useful for calculating totals such as revenue, expenses, or quantities.",
    fileName: "queries.sql",
    code: `SELECT SUM(total) AS total_revenue
FROM orders;`,
  }),

  createExercise({
    id: 8,
    language: "SQL",
    category: "Aggregations",
    difficulty: "Intermediate",
    title: "AVG Function",
    description: "Use AVG to calculate the average value from a column. This is commonly used for statistics and performance metrics.",
    fileName: "queries.sql",
    code: `SELECT AVG(price) AS average_price
FROM products;`,
  }),

  createExercise({
    id: 9,
    language: "SQL",
    category: "Filtering",
    difficulty: "Intermediate",
    title: "Multiple Conditions",
    description: "Combine multiple conditions using AND and OR to create more specific filters when querying database records.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
WHERE age >= 18
AND active = true;`,
  }),

  createExercise({
    id: 10,
    language: "SQL",
    category: "Filtering",
    difficulty: "Intermediate",
    title: "LIKE Operator",
    description: "Use LIKE to search for patterns inside text fields. This allows partial matching instead of requiring an exact value.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
WHERE name LIKE 'A%';`,
  }),

  createExercise({
    id: 11,
    language: "SQL",
    category: "Filtering",
    difficulty: "Intermediate",
    title: "IN Operator",
    description: "Use IN to match a column against multiple possible values. This is a cleaner alternative to writing several OR conditions.",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
WHERE category IN ('Phone', 'Laptop', 'Tablet');`,
  }),

  createExercise({
    id: 12,
    language: "SQL",
    category: "Filtering",
    difficulty: "Intermediate",
    title: "BETWEEN Operator",
    description: "Use BETWEEN to filter values within a specific range. It is commonly used with numbers, dates, and other ordered values.",
    fileName: "queries.sql",
    code: `SELECT *
FROM orders
WHERE total BETWEEN 100 AND 500;`,
  }),

    createExercise({
    id: 13,
    language: "SQL",
    category: "Joining",
    difficulty: "Intermediate",
    title: "LEFT JOIN",
    description: "Use LEFT JOIN to return every record from the first table while including matching records from a related table when available.",
    fileName: "queries.sql",
    code: `SELECT users.name, orders.total
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;`,
  }),

  createExercise({
    id: 14,
    language: "SQL",
    category: "Joining",
    difficulty: "Advanced",
    title: "Multiple Table JOIN",
    description: "Combine information from multiple related tables by chaining JOIN statements together using matching keys.",
    fileName: "queries.sql",
    code: `SELECT users.name, orders.total, products.name
FROM users
JOIN orders
ON users.id = orders.user_id
JOIN products
ON orders.product_id = products.id;`,
  }),

  createExercise({
    id: 15,
    language: "SQL",
    category: "Grouping",
    difficulty: "Advanced",
    title: "HAVING Clause",
    description: "Use HAVING to filter grouped results after aggregate calculations have been performed. HAVING is used with GROUP BY when filtering summary data.",
    fileName: "queries.sql",
    code: `SELECT department, COUNT(*) AS employees
FROM staff
GROUP BY department
HAVING COUNT(*) > 5;`,
  }),

    createExercise({
    id: 16,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Basic Subquery",
    description: "Use a query inside another query to retrieve data based on the result of a separate query.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`,
  }),

  createExercise({
    id: 17,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Subquery With Aggregate",
    description: "Use a subquery with aggregate functions to compare values against calculated results.",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
WHERE price > (
  SELECT AVG(price)
  FROM products
);`,
  }),

  createExercise({
    id: 18,
    language: "SQL",
    category: "Inserting Data",
    difficulty: "Beginner",
    title: "INSERT INTO",
    description: "Add new records to a database table using INSERT INTO. This is commonly used when creating new application data.",
    fileName: "queries.sql",
    code: `INSERT INTO users (name, email)
VALUES ('John Smith', 'john@example.com');`,
  }),

  createExercise({
    id: 19,
    language: "SQL",
    category: "Updating Data",
    difficulty: "Beginner",
    title: "UPDATE Statement",
    description: "Modify existing records in a database using UPDATE with a WHERE condition to target specific rows.",
    fileName: "queries.sql",
    code: `UPDATE users
SET active = true
WHERE id = 1;`,
  }),

  createExercise({
    id: 20,
    language: "SQL",
    category: "Deleting Data",
    difficulty: "Beginner",
    title: "DELETE Statement",
    description: "Remove existing records from a table using DELETE. Always use WHERE conditions carefully to avoid deleting unwanted data.",
    fileName: "queries.sql",
    code: `DELETE FROM users
WHERE id = 1;`,
  }),

  createExercise({
    id: 21,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "CREATE TABLE",
    description: "Create a new database table by defining columns, data types, and constraints that control stored data.",
    fileName: "schema.sql",
    code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE
);`,
  }),

  createExercise({
    id: 22,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "Foreign Key",
    description: "Create relationships between tables using foreign keys. Foreign keys connect records and maintain data integrity.",
    fileName: "schema.sql",
    code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL
);`,
  }),

  createExercise({
    id: 23,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "NOT NULL Constraint",
    description: "Require a column to always contain a value by using the NOT NULL constraint.",
    fileName: "schema.sql",
    code: `CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL NOT NULL
);`,
  }),

  createExercise({
    id: 24,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "UNIQUE Constraint",
    description: "Prevent duplicate values in a column by adding a UNIQUE constraint. This is commonly used for emails and usernames.",
    fileName: "schema.sql",
    code: `CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE
);`,
  }),

  createExercise({
    id: 25,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "BEGIN Transaction",
    description: "Use transactions to group multiple database operations together so changes can be committed or rolled back safely.",
    fileName: "transactions.sql",
    code: `BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

COMMIT;`,
  }),

    createExercise({
    id: 26,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "ALTER TABLE Add Column",
    description: "Modify an existing table structure by adding new columns. ALTER TABLE is used when database requirements change after creation.",
    fileName: "schema.sql",
    code: `ALTER TABLE users
ADD COLUMN phone TEXT;`,
  }),

  createExercise({
    id: 27,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "ALTER TABLE Rename Column",
    description: "Rename existing columns in a table while preserving the stored data.",
    fileName: "schema.sql",
    code: `ALTER TABLE users
RENAME COLUMN name TO full_name;`,
  }),

  createExercise({
    id: 28,
    language: "SQL",
    category: "Conditional Logic",
    difficulty: "Intermediate",
    title: "CASE Statement",
    description: "Use CASE statements to create conditional logic inside SQL queries. This is useful for transforming or categorizing data.",
    fileName: "queries.sql",
    code: `SELECT name,
CASE
  WHEN age >= 18 THEN 'Adult'
  ELSE 'Minor'
END AS age_group
FROM users;`,
  }),

  createExercise({
    id: 29,
    language: "SQL",
    category: "Pagination",
    difficulty: "Intermediate",
    title: "LIMIT Clause",
    description: "Use LIMIT to control how many rows are returned from a query. This is commonly used for pagination and displaying smaller result sets.",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
LIMIT 10;`,
  }),

  createExercise({
    id: 30,
    language: "SQL",
    category: "Pagination",
    difficulty: "Intermediate",
    title: "OFFSET Clause",
    description: "Use OFFSET to skip a specific number of rows. OFFSET is commonly paired with LIMIT to build paginated results.",
    fileName: "queries.sql",
    code: `SELECT *
FROM products
LIMIT 10
OFFSET 20;`,
  }),

  createExercise({
    id: 31,
    language: "SQL",
    category: "Indexes",
    difficulty: "Advanced",
    title: "CREATE INDEX",
    description: "Create indexes to improve query performance on frequently searched columns.",
    fileName: "schema.sql",
    code: `CREATE INDEX idx_users_email
ON users(email);`,
  }),

  createExercise({
    id: 32,
    language: "SQL",
    category: "Indexes",
    difficulty: "Advanced",
    title: "DROP INDEX",
    description: "Remove an existing index from a database when it is no longer needed or negatively impacts performance.",
    fileName: "schema.sql",
    code: `DROP INDEX idx_users_email;`,
  }),

  createExercise({
    id: 33,
    language: "SQL",
    category: "Views",
    difficulty: "Advanced",
    title: "CREATE VIEW",
    description: "Create reusable virtual tables based on saved queries. Views simplify complex queries and improve maintainability.",
    fileName: "schema.sql",
    code: `CREATE VIEW active_users AS
SELECT *
FROM users
WHERE active = true;`,
  }),

  createExercise({
    id: 34,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "ROLLBACK Transaction",
    description: "Use ROLLBACK to undo changes made during a transaction when an operation fails or should not be saved.",
    fileName: "transactions.sql",
    code: `BEGIN;

DELETE FROM users
WHERE id = 1;

ROLLBACK;`,
  }),

  createExercise({
    id: 35,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "COMMIT Transaction",
    description: "Use COMMIT to permanently save changes made during a transaction after all operations complete successfully.",
    fileName: "transactions.sql",
    code: `BEGIN;

UPDATE accounts
SET balance = balance + 500
WHERE id = 1;

COMMIT;`,
  }),

    createExercise({
    id: 36,
    language: "SQL",
    category: "Common Table Expressions",
    difficulty: "Advanced",
    title: "Basic CTE",
    description: "Use a Common Table Expression (CTE) to create a temporary result set that can make complex queries easier to read and maintain.",
    fileName: "queries.sql",
    code: `WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`,
  }),

  createExercise({
    id: 37,
    language: "SQL",
    category: "Common Table Expressions",
    difficulty: "Advanced",
    title: "CTE With Aggregation",
    description: "Use a CTE with aggregate functions to organize calculations before using the results in a final query.",
    fileName: "queries.sql",
    code: `WITH order_totals AS (
  SELECT user_id, SUM(total) AS spending
  FROM orders
  GROUP BY user_id
)
SELECT *
FROM order_totals;`,
  }),

  createExercise({
    id: 38,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "ROW_NUMBER Function",
    description: "Use ROW_NUMBER to assign a unique sequential number to each row within a result set.",
    fileName: "queries.sql",
    code: `SELECT name,
ROW_NUMBER() OVER (
  ORDER BY created_at
) AS row_number
FROM users;`,
  }),

  createExercise({
    id: 39,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "RANK Function",
    description: "Use RANK to assign rankings based on ordered values while allowing duplicate ranking positions.",
    fileName: "queries.sql",
    code: `SELECT name, score, RANK() OVER (ORDER BY score DESC) AS ranking
FROM players;`,
  }),

  createExercise({
    id: 40,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "PARTITION BY",
    description: "Use PARTITION BY to divide rows into groups before applying window functions and performing calculations within each group.",
    fileName: "queries.sql",
    code: `SELECT department, name, salary, AVG(salary) OVER (PARTITION BY department) AS department_average
FROM employees;`,
  }),

      createExercise({
    id: 41,
    language: "SQL",
    category: "Handling Data",
    difficulty: "Intermediate",
    title: "COALESCE Function",
    description: "Use COALESCE to replace NULL values with a default value. This helps prevent missing data from causing issues in results.",
    fileName: "queries.sql",
    code: `SELECT name, COALESCE(phone, 'No Phone') AS phone
FROM users;`,
  }),

  createExercise({
    id: 42,
    language: "SQL",
    category: "String Functions",
    difficulty: "Intermediate",
    title: "CONCAT Function",
    description: "Use CONCAT to combine multiple text values together inside a query.",
    fileName: "queries.sql",
    code: `SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM users;`,
  }),

  createExercise({
    id: 43,
    language: "SQL",
    category: "String Functions",
    difficulty: "Intermediate",
    title: "UPPER Function",
    description: "Use string functions to transform text values. UPPER converts text into uppercase formatting.",
    fileName: "queries.sql",
    code: `SELECT UPPER(name) AS uppercase_name
FROM users;`,
  }),

  createExercise({
    id: 44,
    language: "SQL",
    category: "Date Functions",
    difficulty: "Intermediate",
    title: "Extract Date Values",
    description: "Extract specific parts of date values such as years, months, or days for filtering and reporting.",
    fileName: "queries.sql",
    code: `SELECT EXTRACT(YEAR FROM created_at) AS signup_year
FROM users;`,
  }),

  createExercise({
    id: 45,
    language: "SQL",
    category: "Data Analysis",
    difficulty: "Advanced",
    title: "Finding Duplicate Records",
    description: "Use GROUP BY and HAVING to identify duplicate values stored in a table.",
    fileName: "queries.sql",
    code: `SELECT email, COUNT(*) AS duplicates
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,
  }),

  createExercise({
    id: 46,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Basic Subquery",
    description: "Use a subquery to run an additional query inside another query and use its result in the outer query.",
    fileName: "queries.sql",
    code: `SELECT name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`,
  }),

  createExercise({
    id: 47,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Scalar Subquery",
    description: "Use a scalar subquery that returns a single value and include that value as part of the query result.",
    fileName: "queries.sql",
    code: `SELECT name,
(
  SELECT COUNT(*)
  FROM orders
) AS total_orders
FROM users;`,
  }),

  createExercise({
    id: 48,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Correlated Subquery",
    description: "Use a correlated subquery that references values from the outer query to compare related records.",
    fileName: "queries.sql",
    code: `SELECT name
FROM users u
WHERE EXISTS (
  SELECT *
  FROM orders o
  WHERE o.user_id = u.id
);`,
  }),

  createExercise({
    id: 49,
    language: "SQL",
    category: "Common Table Expressions",
    difficulty: "Advanced",
    title: "Basic CTE",
    description: "Use a Common Table Expression to create a temporary result set that can be referenced inside a query.",
    fileName: "queries.sql",
    code: `WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`,
  }),

  createExercise({
    id: 50,
    language: "SQL",
    category: "Common Table Expressions",
    difficulty: "Advanced",
    title: "Multiple CTEs",
    description: "Use multiple Common Table Expressions to organize complex queries into smaller reusable sections.",
    fileName: "queries.sql",
    code: `WITH user_orders AS (
  SELECT user_id, COUNT(*) AS total
  FROM orders
  GROUP BY user_id
),
high_value_users AS (
  SELECT *
  FROM user_orders
  WHERE total > 5
)
SELECT *
FROM high_value_users;`,
  }),

  createExercise({
    id: 51,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "ROW_NUMBER Function",
    description: "Use ROW_NUMBER to assign a unique sequential number to rows within a result set.",
    fileName: "queries.sql",
    code: `SELECT name,
ROW_NUMBER() OVER (
  ORDER BY created_at
) AS row_number
FROM users;`,
  }),

  createExercise({
    id: 52,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "RANK Function",
    description: "Use RANK to assign rankings while allowing tied values to share the same rank.",
    fileName: "queries.sql",
    code: `SELECT name, score,
RANK() OVER (
  ORDER BY score DESC
) AS ranking
FROM players;`,
  }),

  createExercise({
    id: 53,
    language: "SQL",
    category: "Window Functions",
    difficulty: "Advanced",
    title: "PARTITION BY",
    description: "Use PARTITION BY to divide rows into groups while applying window functions independently to each group.",
    fileName: "queries.sql",
    code: `SELECT department, name,
ROW_NUMBER() OVER (
  PARTITION BY department
  ORDER BY name
) AS row_number
FROM employees;`,
  }),

  createExercise({
    id: 54,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "Create Table",
    description: "Create a new database table by defining columns, data types, and basic constraints.",
    fileName: "queries.sql",
    code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);`,
  }),

  createExercise({
    id: 55,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "Adding Constraints",
    description: "Add constraints to enforce rules on stored data and maintain database integrity.",
    fileName: "queries.sql",
    code: `CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL
);`,
  }),

    createExercise({
    id: 56,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "ALTER TABLE Add Column",
    description: "Modify an existing table by adding a new column to store additional information.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
ADD COLUMN phone VARCHAR(20);`,
  }),

  createExercise({
    id: 57,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "ALTER TABLE Remove Column",
    description: "Remove an existing column from a table when the stored data is no longer needed.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
DROP COLUMN phone;`,
  }),

  createExercise({
    id: 58,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "Create Index",
    description: "Create an index to improve query performance when searching or filtering large tables.",
    fileName: "queries.sql",
    code: `CREATE INDEX idx_users_email
ON users(email);`,
  }),

  createExercise({
    id: 59,
    language: "SQL",
    category: "Database Design",
    difficulty: "Advanced",
    title: "Composite Index",
    description: "Create an index using multiple columns to optimize queries that filter by more than one value.",
    fileName: "queries.sql",
    code: `CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at);`,
  }),

  createExercise({
    id: 60,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "Basic Transaction",
    description: "Use transactions to group multiple database operations together so they succeed or fail as one unit.",
    fileName: "queries.sql",
    code: `BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

COMMIT;`,
  }),

  createExercise({
    id: 61,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "Rollback Transaction",
    description: "Use ROLLBACK to undo changes made during a transaction when an operation fails.",
    fileName: "queries.sql",
    code: `BEGIN;

DELETE FROM orders
WHERE id = 10;

ROLLBACK;`,
  }),

  createExercise({
    id: 62,
    language: "SQL",
    category: "Views",
    difficulty: "Intermediate",
    title: "Create View",
    description: "Create a reusable virtual table based on the result of a stored query.",
    fileName: "queries.sql",
    code: `CREATE VIEW active_users AS
SELECT id, name
FROM users
WHERE active = true;`,
  }),

  createExercise({
    id: 63,
    language: "SQL",
    category: "Views",
    difficulty: "Intermediate",
    title: "Query a View",
    description: "Retrieve data from a view the same way you would query a normal table.",
    fileName: "queries.sql",
    code: `SELECT *
FROM active_users;`,
  }),

  createExercise({
    id: 64,
    language: "SQL",
    category: "Data Modification",
    difficulty: "Intermediate",
    title: "UPDATE Multiple Columns",
    description: "Update multiple column values in a record using a single UPDATE statement.",
    fileName: "queries.sql",
    code: `UPDATE users
SET name = 'John Smith', email = 'john@example.com'
WHERE id = 1;`,
  }),

  createExercise({
    id: 65,
    language: "SQL",
    category: "Data Modification",
    difficulty: "Intermediate",
    title: "DELETE With Conditions",
    description: "Delete specific records safely by using conditions that identify the rows to remove.",
    fileName: "queries.sql",
    code: `DELETE FROM users
WHERE active = false;`,
  }),

    createExercise({
    id: 66,
    language: "SQL",
    category: "Data Modification",
    difficulty: "Advanced",
    title: "INSERT Multiple Rows",
    description: "Insert multiple records into a table using a single INSERT statement with multiple value sets.",
    fileName: "queries.sql",
    code: `INSERT INTO users (name, email)
VALUES ('John', 'john@example.com'),
('Sarah', 'sarah@example.com');`,
  }),

  createExercise({
    id: 67,
    language: "SQL",
    category: "Data Modification",
    difficulty: "Advanced",
    title: "INSERT From SELECT",
    description: "Insert data into one table by selecting records from another existing table.",
    fileName: "queries.sql",
    code: `INSERT INTO archived_users (name, email)
SELECT name, email
FROM users
WHERE active = false;`,
  }),

  createExercise({
    id: 68,
    language: "SQL",
    category: "Constraints",
    difficulty: "Advanced",
    title: "Foreign Key Constraint",
    description: "Use foreign keys to create relationships between tables and enforce valid references.",
    fileName: "queries.sql",
    code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL
);`,
  }),

  createExercise({
    id: 69,
    language: "SQL",
    category: "Constraints",
    difficulty: "Advanced",
    title: "Unique Constraint",
    description: "Use UNIQUE constraints to prevent duplicate values from being stored in specific columns.",
    fileName: "queries.sql",
    code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE
);`,
  }),

  createExercise({
    id: 70,
    language: "SQL",
    category: "Constraints",
    difficulty: "Advanced",
    title: "CHECK Constraint",
    description: "Use CHECK constraints to enforce rules that data must follow before being stored.",
    fileName: "queries.sql",
    code: `CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  price DECIMAL CHECK(price > 0)
);`,
  }),

  createExercise({
    id: 71,
    language: "SQL",
    category: "Aggregate Functions",
    difficulty: "Intermediate",
    title: "AVG Function",
    description: "Use AVG to calculate the average value from a numeric column.",
    fileName: "queries.sql",
    code: `SELECT AVG(price) AS average_price
FROM products;`,
  }),

  createExercise({
    id: 72,
    language: "SQL",
    category: "Aggregate Functions",
    difficulty: "Intermediate",
    title: "MIN and MAX Functions",
    description: "Use MIN and MAX to find the smallest and largest values stored in a column.",
    fileName: "queries.sql",
    code: `SELECT MIN(price) AS lowest_price, MAX(price) AS highest_price
FROM products;`,
  }),

  createExercise({
    id: 73,
    language: "SQL",
    category: "Aggregate Functions",
    difficulty: "Intermediate",
    title: "SUM Function",
    description: "Use SUM to calculate the total value of numeric data across multiple records.",
    fileName: "queries.sql",
    code: `SELECT SUM(total) AS revenue
FROM orders;`,
  }),

  createExercise({
    id: 74,
    language: "SQL",
    category: "Conditional Logic",
    difficulty: "Intermediate",
    title: "CASE Statement",
    description: "Use CASE statements to create conditional logic inside SQL queries.",
    fileName: "queries.sql",
    code: `SELECT name,
CASE
  WHEN age >= 18 THEN 'Adult'
  ELSE 'Minor'
END AS age_group
FROM users;`,
  }),

  createExercise({
    id: 75,
    language: "SQL",
    category: "Conditional Logic",
    difficulty: "Advanced",
    title: "CASE With Aggregates",
    description: "Combine CASE statements with aggregate functions to create conditional summaries.",
    fileName: "queries.sql",
    code: `SELECT COUNT(*) AS total,
SUM(CASE WHEN active = true THEN 1 ELSE 0 END) AS active_users
FROM users;`,
  }),

    createExercise({
    id: 76,
    language: "SQL",
    category: "Views",
    difficulty: "Advanced",
    title: "Create View",
    description: "Create a reusable virtual table based on the results of a query using a database view.",
    fileName: "queries.sql",
    code: `CREATE VIEW active_users AS
SELECT *
FROM users
WHERE active = true;`,
  }),

  createExercise({
    id: 77,
    language: "SQL",
    category: "Views",
    difficulty: "Advanced",
    title: "Query A View",
    description: "Retrieve data from a view the same way you would query a regular table.",
    fileName: "queries.sql",
    code: `SELECT *
FROM active_users;`,
  }),

  createExercise({
    id: 78,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Basic Subquery",
    description: "Use a query inside another query to retrieve filtered or calculated results.",
    fileName: "queries.sql",
    code: `SELECT name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`,
  }),

  createExercise({
    id: 79,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "Scalar Subquery",
    description: "Use a subquery that returns a single value and include it as part of the main query result.",
    fileName: "queries.sql",
    code: `SELECT name,
(
  SELECT COUNT(*)
  FROM orders
) AS total_orders
FROM users;`,
  }),

  createExercise({
    id: 80,
    language: "SQL",
    category: "Subqueries",
    difficulty: "Advanced",
    title: "EXISTS Subquery",
    description: "Use EXISTS to check whether a subquery returns any matching records.",
    fileName: "queries.sql",
    code: `SELECT name
FROM users
WHERE EXISTS (
  SELECT *
  FROM orders
  WHERE orders.user_id = users.id
);`,
  }),

  createExercise({
    id: 81,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "BEGIN Transaction",
    description: "Start a transaction to group multiple database operations into a single unit of work.",
    fileName: "queries.sql",
    code: `BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;`,
  }),

  createExercise({
    id: 82,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "COMMIT Transaction",
    description: "Commit a transaction to permanently save changes made during the transaction.",
    fileName: "queries.sql",
    code: `BEGIN;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;`,
  }),

  createExercise({
    id: 83,
    language: "SQL",
    category: "Transactions",
    difficulty: "Advanced",
    title: "ROLLBACK Transaction",
    description: "Rollback a transaction to undo changes when an operation fails or should not be saved.",
    fileName: "queries.sql",
    code: `BEGIN;

DELETE FROM users
WHERE id = 10;

ROLLBACK;`,
  }),

  createExercise({
    id: 84,
    language: "SQL",
    category: "Indexes",
    difficulty: "Advanced",
    title: "Create Index",
    description: "Create an index to improve query performance when searching or filtering large tables.",
    fileName: "queries.sql",
    code: `CREATE INDEX idx_users_email
ON users(email);`,
  }),

  createExercise({
    id: 85,
    language: "SQL",
    category: "Indexes",
    difficulty: "Advanced",
    title: "Composite Index",
    description: "Create an index across multiple columns to optimize queries that filter using multiple values.",
    fileName: "queries.sql",
    code: `CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at);`,
  }),

    createExercise({
    id: 86,
    language: "SQL",
    category: "Indexes",
    difficulty: "Advanced",
    title: "Drop Index",
    description: "Remove an index from a table when it is no longer needed or negatively impacts performance.",
    fileName: "queries.sql",
    code: `DROP INDEX idx_users_email;`,
  }),

  createExercise({
    id: 87,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "One To Many Relationship",
    description: "Create relationships where one record in a table can be connected to many records in another table.",
    fileName: "queries.sql",
    code: `CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT
);`,
  }),

  createExercise({
    id: 88,
    language: "SQL",
    category: "Database Design",
    difficulty: "Intermediate",
    title: "Many To Many Relationship",
    description: "Create a junction table to connect records where multiple items can relate to multiple other items.",
    fileName: "queries.sql",
    code: `CREATE TABLE users_roles (
  user_id INTEGER REFERENCES users(id),
  role_id INTEGER REFERENCES roles(id),
  PRIMARY KEY(user_id, role_id)
);`,
  }),

  createExercise({
    id: 89,
    language: "SQL",
    category: "Database Design",
    difficulty: "Advanced",
    title: "Normalize Data",
    description: "Separate repeated data into related tables to reduce duplication and improve database structure.",
    fileName: "queries.sql",
    code: `CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id)
);`,
  }),

  createExercise({
    id: 90,
    language: "SQL",
    category: "Database Design",
    difficulty: "Advanced",
    title: "Cascade Delete",
    description: "Use cascading deletes to automatically remove related records when a parent record is deleted.",
    fileName: "queries.sql",
    code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
  ON DELETE CASCADE
);`,
  }),

  createExercise({
    id: 91,
    language: "SQL",
    category: "Database Administration",
    difficulty: "Advanced",
    title: "Rename Table",
    description: "Rename an existing database table while preserving its stored data.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
RENAME TO customers;`,
  }),

  createExercise({
    id: 92,
    language: "SQL",
    category: "Database Administration",
    difficulty: "Advanced",
    title: "Add Column",
    description: "Add a new column to an existing table when additional data needs to be stored.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
ADD COLUMN phone VARCHAR(20);`,
  }),

  createExercise({
    id: 93,
    language: "SQL",
    category: "Database Administration",
    difficulty: "Advanced",
    title: "Modify Column",
    description: "Change the definition of an existing column to adjust its data type or constraints.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
ALTER COLUMN name TYPE VARCHAR(100);`,
  }),

  createExercise({
    id: 94,
    language: "SQL",
    category: "Database Administration",
    difficulty: "Advanced",
    title: "Drop Column",
    description: "Remove an unused column from an existing table when the data is no longer required.",
    fileName: "queries.sql",
    code: `ALTER TABLE users
DROP COLUMN phone;`,
  }),

  createExercise({
    id: 95,
    language: "SQL",
    category: "Query Optimization",
    difficulty: "Advanced",
    title: "EXPLAIN Query Plan",
    description: "Use EXPLAIN to inspect how the database executes a query and identify possible performance improvements.",
    fileName: "queries.sql",
    code: `EXPLAIN
SELECT *
FROM users
WHERE email = 'test@example.com';`,
  }),

    createExercise({
    id: 96,
    language: "SQL",
    category: "Query Optimization",
    difficulty: "Advanced",
    title: "LIMIT Query Results",
    description: "Use LIMIT to restrict the number of rows returned from a query and improve efficiency when working with large datasets.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
LIMIT 10;`,
  }),

  createExercise({
    id: 97,
    language: "SQL",
    category: "Query Optimization",
    difficulty: "Advanced",
    title: "OFFSET Query Results",
    description: "Use OFFSET to skip a specific number of rows, commonly used when creating pagination systems.",
    fileName: "queries.sql",
    code: `SELECT *
FROM users
LIMIT 10
OFFSET 20;`,
  }),

  createExercise({
    id: 98,
    language: "SQL",
    category: "Advanced Queries",
    difficulty: "Advanced",
    title: "Common Table Expression",
    description: "Use a Common Table Expression (CTE) to create temporary named query results that make complex queries easier to read.",
    fileName: "queries.sql",
    code: `WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`,
  }),

  createExercise({
    id: 99,
    language: "SQL",
    category: "Advanced Queries",
    difficulty: "Advanced",
    title: "Recursive CTE",
    description: "Use recursive Common Table Expressions to query hierarchical data such as organizational structures or category trees.",
    fileName: "queries.sql",
    code: `WITH RECURSIVE employee_tree AS (
  SELECT id, name
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  SELECT e.id, e.name
  FROM employees e
  JOIN employee_tree t
  ON e.manager_id = t.id
)
SELECT *
FROM employee_tree;`,
  }),

  createExercise({
    id: 100,
    language: "SQL",
    category: "Advanced Queries",
    difficulty: "Advanced",
    title: "Rank Results With Window Function",
    description: "Use ranking window functions to assign positions to rows based on sorted values while keeping the original data available.",
    fileName: "queries.sql",
    code: `SELECT name, salary,
RANK() OVER (
  ORDER BY salary DESC
) AS salary_rank
FROM employees;`,
  }),

];

export default sqlExercises;