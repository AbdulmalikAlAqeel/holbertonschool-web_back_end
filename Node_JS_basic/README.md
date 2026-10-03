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
