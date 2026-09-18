# ES6 Basic - Tasks Overview

## Project Overview
This repository contains solutions for the **ES6 Basic** module of the Web Backend curriculum at Holberton School. The primary focus of this project is to learn and implement modern JavaScript (ECMAScript 2015 / ES6) features, moving away from legacy patterns like `var` towards block-scoped declarations, arrow functions, template literals, default/rest parameters, spread operator, property value shorthands, computed property names, method properties, `for...of` loops, and ES6 module exports.

---

## Tasks Summary

### Task 0: Const or let?
* **File:** `0-constants.js`
* **Objective:** Refactor legacy code to use `const` for variables that are never reassigned and `let` for variables that require reassignment.

### Task 1: Block Scope
* **File:** `1-block-scoped.js`
* **Objective:** Prevent variable overwriting caused by `var` function-scoping and hoisting. Refactored using block-scoped variable declarations inside conditional blocks.

### Task 2: Arrow Functions
* **File:** `2-arrow.js`
* **Objective:** Refactor standard function expressions into ES6 Arrow Functions (`() => {}`). Demonstrates lexical scoping of `this`, eliminating the need for `const self = this` workarounds.

### Task 3: Parameter Defaults
* **File:** `3-default-parameter.js`
* **Objective:** Condense function internals by assigning default values directly in the function signature (`param = defaultValue`), removing explicit `undefined` checks inside the function body.

### Task 4: Rest Parameter Syntax
* **File:** `4-rest-parameter.js`
* **Objective:** Utilize ES6 Rest Parameter syntax (`...args`) to capture an arbitrary number of arguments into an array and return its length (`args.length`).

### Task 5: The Wonders of Spread Syntax
* **File:** `5-spread-operator.js`
* **Objective:** Concatenate two arrays and break down a string into individual character elements into a single flat array using ES6 Spread Operator syntax (`[...array1, ...array2, ...string]`).

### Task 6: Take Advantage of Template Literals
* **File:** `6-string-interpolation.js`
* **Objective:** Replace legacy string concatenation (`+`) with ES6 Template Literals (backticks ``` `` ```) and expression interpolation (`${variable}`) for cleaner multi-variable string output.

### Task 7: Object Property Value Shorthand Syntax
* **File:** `7-getBudgetObject.js`
* **Objective:** Simplify object creation when property keys match variable names using ES6 Property Value Shorthand syntax (`{ income, gdp, capita }`).

### Task 8: No Need to Create Empty Objects Before Adding Properties
* **File:** `8-getBudgetCurrentYear.js`
* **Objective:** Construct objects with dynamic keys directly at declaration time using ES6 Computed Property Names (`[`key-${expression}`]: value`).

### Task 9: ES6 Method Properties
* **File:** `9-getFullBudget.js`
* **Objective:** Utilize ES6 Method Property Shorthand syntax inside objects (`methodName(param) {}`), omitting the legacy `:` and `function` keywords.

### Task 10: For...of Loops
* **File:** `10-loops.js`
* **Objective:** Refactor legacy `for...in` array loops to use ES6 `for...of` iteration over iterable values, replacing `var` declarations with block-scoped `let` and `const`.

### Task 11: Iterator
* **File:** `11-createEmployeesObject.js`
* **Objective:** Create a function that constructs an employee department object using ES6 Computed Property Names (`[departmentName]: employees`).

### Task 12: Let's create a report object
* **File:** `12-createReportObject.js`
* **Objective:** Implement a function returning a report object containing an `allEmployees` key (using spread syntax) and a `getNumberOfDepartments` method property.

---

## Setup & Environment
* **OS:** Ubuntu 20.04 LTS
* **Node.js:** v20.x.x
* **npm:** v10.x.x
* **Transpiler:** Babel (`@babel/core`, `@babel/node`, `@babel/preset-env`)
* **Linter:** ESLint (Airbnb JavaScript Style Guide)
* **Testing Framework:** Jest

---

## How to Run & Test

1. **Install Dependencies:**
   ```bash
   npm install
