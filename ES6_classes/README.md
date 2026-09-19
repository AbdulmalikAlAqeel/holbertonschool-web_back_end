# ES6 Classes - Tasks Overview

## Project Overview
This repository contains solutions for the **ES6 Classes** module of the Web Backend curriculum at Holberton School. The primary focus of this project is to learn and master Object-Oriented Programming (OOP) principles in modern JavaScript (ES6), including class declarations, constructors, private property conventions (underscore naming), getters, setters, type verification, inheritance, static methods, composition, abstract classes, custom string tags (`Symbol.toStringTag`), primitive type coercion (`Symbol.toPrimitive`), class hoisting/scoping fixes, and object prototyping with `Symbol.species`.

---

## Tasks Summary

### Task 0: You used to attend a place like this at some point
* **File:** `0-classroom.js`
* **Objective:** Implement an ES6 class named `ClassRoom` that accepts `maxStudentsSize` (Number) in its constructor and assigns it to an internal attribute `_maxStudentsSize`.

### Task 1: Let's make some classrooms
* **File:** `1-make_classrooms.js`
* **Objective:** Import the `ClassRoom` class and implement a function named `initializeRooms` that returns an array of three `ClassRoom` instances with sizes 19, 20, and 34 respectively.

### Task 2: A Course, Getters, and Setters
* **File:** `2-hbtn_course.js`
* **Objective:** Implement an ES6 class `HolbertonCourse` with attributes `name` (String), `length` (Number), and `students` (Array). Enforce strict type validation in constructor and setters, storing values in underscore-prefixed internal properties (`_name`, `_length`, `_students`).

### Task 3: Methods, static methods, computed methods names..... MONEY
* **File:** `3-currency.js`
* **Objective:** Implement an ES6 class `Currency` with attributes `code` (String) and `name` (String). Enforce type checking, getters, setters, and a method `displayFullCurrency()` returning attributes formatted as `name (code)`.

### Task 4: Pricing
* **File:** `4-pricing.js`
* **Objective:** Import `Currency` from `3-currency.js` and implement a class `Pricing` with attributes `amount` (Number) and `currency` (Currency). Includes a method `displayFullPrice()` returning `amount currency_name (currency_code)`, and a static method `convertPrice(amount, conversionRate)` to return converted values.

### Task 5: A Building
* **File:** `5-building.js`
* **Objective:** Implement an abstract ES6 class `Building` with attribute `sqft` (Number). Enforce method override verification in the constructor to ensure any child class extending `Building` implements `evacuationWarningMessage()`.

### Task 6: Inheritance
* **File:** `6-sky_high.js`
* **Objective:** Implement a class `SkyHighBuilding` that extends `Building`. Pass `sqft` to parent via `super()`, add `floors` (Number) attribute with getter/setter, and override `evacuationWarningMessage()` returning `Evacuate slowly the NUMBER_OF_FLOORS floors`.

### Task 7: Airport
* **File:** `7-airport.js`
* **Objective:** Implement an ES6 class `Airport` with attributes `name` (String) and `code` (String). Enforce type checking with getters and setters, storing values in `_name` and `_code`. Override the default object string representation using `get [Symbol.toStringTag]()` to return the airport code so `toString()` outputs `[object CODE]`.

### Task 8: Primitive - Holberton Class
* **File:** `8-hbtn_class.js`
* **Objective:** Implement an ES6 class `HolbertonClass` with attributes `size` (Number) and `location` (String). Enforce type checking with getters and setters. Implement `[Symbol.toPrimitive](hint)` so that when the class instance is cast into a `Number` it returns `_size`, and when cast into a `String` it returns `_location`.

### Task 9: Hoisting
* **File:** `9-hoisting.js`
* **Objective:** Fix code scoping, class declaration order, variable reference errors, and infinite recursion in getter methods caused by JavaScript class hoisting limitations and incorrect parameter assignments.

### Task 10: Vroom
* **File:** `10-car.js`
* **Objective:** Implement an ES6 class `Car` with attributes `brand` (String), `motor` (String), and `color` (String). Implement `cloneCar()` method utilizing `Symbol.species` to return a new object instance belonging to the same constructor class.

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
