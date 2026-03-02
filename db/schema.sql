-- had to switch title to birthday DATE twice before it matched lol
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
birthday DATE NOT NULL,
salary NUMERIC(10,2) NOT NULL CHECK (salary > 0)
);
