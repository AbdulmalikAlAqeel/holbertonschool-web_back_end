# ES6 Basic - Task 0: Const or let?

## Project Overview
This repository contains solutions for the **ES6 Basic** module of the Web Backend curriculum at Holberton School. The primary focus of this project is to learn and implement modern JavaScript (ECMAScript 2015 / ES6) features, moving away from legacy patterns like `var` towards block-scoped declarations, arrow functions, template literals, and ES6 module exports.

## Task 0: Const or let?
The goal of Task 0 is to refactor legacy JavaScript functions to strictly use modern ES6 variable declarations (`const` and `let`):
* Use `const` when variables are assigned once and never reassigned.
* Use `let` when variables need to be reassigned later in the function scope.
* Export all defined functions as named exports.

### Files
* **`0-constants.js`**: Contains refactored functions (`taskFirst`, `getLast`, `taskNext`) using `const` and `let`.
* **`0-main.js`**: Test entry point to verify the module output using ES6 `import` syntax.

## Setup & Environment
* **OS**: Ubuntu 20.04 LTS
* **Node.js**: v20.x.x
* **npm**: v10.x.x
* **Transpiler**: Babel (`@babel/core`, `@babel/node`, `@babel/preset-env`)
* **Linter**: ESLint (Airbnb JavaScript Style Guide)
* **Testing Framework**: Jest

## How to Run

1. **Install Dependencies:**
   ```bash
   npm install


---


### Task 1: Block Scope
* **File:** `1-block-scoped.js`
* **Objective:** Prevent variable overwriting caused by `var` function-scoping and hoisting. Refactored inside the conditional `if` block using block-scoped `const` declarations (with ESLint inline rules to handle unused variable warnings) so the outer variables retain their original values.
