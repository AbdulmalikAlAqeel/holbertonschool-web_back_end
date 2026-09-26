# ES6 Data Manipulation

This project covers data manipulation concepts in JavaScript (ES6+), focusing on data structures such as Arrays, Typed Arrays, Maps, Sets, and Weak Data Structures, along with functional programming methods like map, filter, and reduce.

## Learning Objectives
By the end of this project, you should be able to explain:
- How to use map, filter, and reduce on arrays
- What Typed Arrays are and how to use them
- The Set, Map, WeakMap, and WeakSet data structures

## Requirements
- Operating System: Ubuntu 20.04 LTS
- Node.js: v20.x.x
- npm: 9.x.x or 10.x.x
- Code Style: ESLint with Airbnb configuration
- Testing: Jest

## Setup
Install dependencies:
npm install

Run tests:
npm test

Run linter:
npm run lint

## Tasks
0. Basic list of objects
File: 0-get_list_students.js
Description: Create a function getListStudents that returns an array of student objects

1. More mapping
File: 1-get_list_student_ids.js
Description: Create a function getListStudentIds that returns an array of ids from a list of objects using the map function

2. Filter
File: 2-get_students_by_loc.js
Description: Create a function getStudentsByLocation that returns an array of student objects located in a specific city using the filter function

3. Reduce
File: 3-get_ids_sum.js
Description: Create a function getStudentIdsSum that returns the sum of all student ids using the reduce function

4. Combine
File: 4-update_grade_by_city.js
Description: Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade using filter and map combined

5. Typed Arrays
File: 5-typed_arrays.js
Description: Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position

6. Set data structure
File: 6-set.js
Description: Create a function setFromArray that returns a Set from an array

7. More set data structure
File: 7-has_array_values.js
Description: Create a function hasValuesFromArray that returns a boolean if all elements in the array exist within the set

8. Clean set
File: 8-clean_set.js
Description: Create a function cleanSet that returns a string of all the set values that start with a specific string

9. Map data structure
File: 9-groceries_list.js
Description: Create a function groceriesList that returns a map of groceries with specific items and quantities

10. More map data structure
File: 10-update_uniq_items.js
Description: Create a function updateUniqueItems that returns an updated map for all items with initial quantity at 1
