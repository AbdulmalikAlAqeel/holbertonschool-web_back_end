# Node.js Basic

## Tasks

### 0. Executing script using Node JS
**Mandatory**

Create a function named `displayMessage` that prints in `stdout` the string argument passing to it.

#### Requirements:
* It should accept one argument (`message`)
* It should display the string using `console.log` or `process.stdout.write`

#### Example:
```javascript
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello Holberton!");
bob@dylan:~$ node 0-main.js
Hello Holberton!
bob@dylan:~$
```

---

# Node.js Basic

## Tasks

### 1. Using Process stdin
**Mandatory**

Create a program named `1-stdin.js` that will be executed through command line:
* It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
* The user should be able to input their name on a new line
* The program should display `Your name is: INPUT`
* When the user ends the program, it should display `This important software is now closing` (followed by a new line)

#### Requirements:
* Your code will be tested through a child process, make sure you have everything you need for that

#### Example:
```bash
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$
```

---

# Node.js Basic

## Tasks

### 2. Reading a file synchronously with Node JS
**Mandatory**

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`.

* Create a function named `countStudents`. It should accept a path in argument.
* The script should attempt to read the database file synchronously.
* If the database is not available, it should throw an error with the text `Cannot load the database`.
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
* CSV file can contain empty lines (at the end) - and they are not a valid student!

#### Requirements:
* Code should be executed smoothly and throw precise error message when file does not exist.

#### Example:
```bash
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^
Error: Cannot load the database
...
bob@dylan:~$ 
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

---

### 3. Reading a file asynchronously with Node JS

**File:** `3-read_file_async.js`  
**Description:** Executes non-blocking asynchronous file reading using Node.js callbacks wrapped inside a Native JavaScript `Promise`.

#### Requirements
- Create a function named `countStudents(path)`.
- The function must return a `Promise`.
- It reads the CSV file asynchronously using `fs.readFile`.
- If the file cannot be accessed or loaded, it rejects the Promise with an error containing the message: `Cannot load the database`.
- Logs the total number of valid students and groups them by their field (`CS`, `SWE`, etc.) in the exact required format.
- Non-blocking execution must allow subsequent synchronous code to execute first.

#### Usage Example

```javascript
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });

console.log("After!");
```

---

### 4. Create a small HTTP server using Node's HTTP module

**File:** `4-http.js`  
**Description:** Sets up a lightweight native Node.js HTTP server assigned to the `app` variable and exported for routing/testing purposes.

#### Requirements
- Import the native `http` module.
- Create an HTTP server and assign it to the variable `app`.
- Export `app` using `module.exports = app;`.
- The HTTP server must listen on port `1245`.
- Returns `Hello Holberton School!` in plain text format (`text/plain`) for any endpoint/path requested.

#### Usage & Testing Example

In **Terminal 1** (Start the server):
```bash
node 4-http.js
```
In Terminal 2 (Test endpoints via curl):

```bash
curl localhost:1245 && echo ""
# Output: Hello Holberton School!

curl localhost:1245/any_endpoint && echo ""
# Output: Hello Holberton School!
```

---

### 5. Create a more complex HTTP server using Node's HTTP module

**File:** `5-http.js`  
**Description:** Extends the native Node.js HTTP server to handle specific route filtering and integrate asynchronous file system reading via Promises for database queries.

#### Requirements
- Import the native `http` and `fs` modules.
- Create an HTTP server assigned to the `app` variable and listen on port `1245`.
- Export `app` using `module.exports = app;`.
- Accept the database CSV file path as a command-line argument (`process.argv[2]`).
- Routes handling:
  - `/`: Returns `Hello Holberton School!` as plain text.
  - `/students`: Returns `This is the list of our students` followed by the processed student data generated asynchronously. If file reading fails, it returns `This is the list of our students` followed by `Cannot load the database`.

#### Usage & Testing Example

In **Terminal 1** (Start the server with database argument):
```bash
node 5-http.js database.csv
```

In Terminal 2 (Test endpoints via curl):

```bash
curl localhost:1245 && echo ""
# Output: Hello Holberton School!

curl localhost:1245/students && echo ""
# Output:
# This is the list of our students
# Number of students: 10
# Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
# Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```
