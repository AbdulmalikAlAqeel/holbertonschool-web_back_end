# ES6 Basic - Tasks Overview

## Project Overview
This repository contains solutions for the **ES6 Basic** module of the Web Backend curriculum at Holberton School. The primary focus of this project is to learn and implement modern JavaScript (ECMAScript 2015 / ES6) features, moving away from legacy patterns like `var` towards block-scoped declarations, arrow functions, template literals, and ES6 module exports.

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
