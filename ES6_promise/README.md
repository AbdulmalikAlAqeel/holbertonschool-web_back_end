# 0. Keep every promise you make and only make promises you can keep

## Description
Write a function `getResponseFromAPI()` that returns a JavaScript `Promise`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `0-promise.js`

## Code (`0-promise.js`)
```javascript
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {});
}


---


# 1. Don't make a promise...if you know you can't keep it

## Description
Write a function `getFullResponseFromAPI(success)` that returns a Promise.
- When `success` is `true`, resolve the promise with an object: `{ status: 200, body: 'Success' }`
- When `success` is `false`, reject the promise with an `Error` object containing the message: `'The fake API is not working currently'`

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `1-promise.js`

## Code (`1-promise.js`)
```javascript
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}


---


# 2. Catch me if you can!

## Description
Write a function `handleResponseFromAPI(promise)` that appends three handlers to a given Promise:
- **`then()`**: When the Promise resolves, return an object with `{ status: 200, body: 'success' }`
- **`catch()`**: When the Promise rejects, return an empty `Error` object
- **`finally()`**: For every resolution (whether resolved or rejected), log `Got a response from the API` to the console

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `2-then.js`

## Code (`2-then.js`)
```javascript
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}


---


# 3. Handle multiple successful promises

## Description
Import `uploadPhoto` and `createUser` from `./utils.js`. Write a function `handleProfileSignup()` that uses `Promise.all` to collectively resolve both promises and log `\({photo.body}\){user.firstName} ${user.lastName}` to the console.

In the event of an error from any of the promises, log `Signup system offline` to the console.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `3-all.js`

## Code (`3-all.js`)
```javascript
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`\({photo.body}\){user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}


---


# 4. Simple promise

## Description
Write a function `signUpUser(firstName, lastName)` that returns a resolved Promise with an object containing `firstName` and `lastName`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `4-user-promise.js`

## Code (`4-user-promise.js`)
```javascript
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}


---


# 5. Reject the promises

## Description
Write a function `uploadPhoto(fileName)` that returns a rejected Promise with an `Error` object containing the message `${fileName} cannot be processed`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `5-photo-reject.js`

## Code (`5-photo-reject.js`)
```javascript
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}


---


# 6. Handle multiple promises

## Description
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write a function `handleProfileSignup(firstName, lastName, fileName)` that calls both functions and uses `Promise.allSettled` to return an array containing the status and value/error of each promise.

Note: Errors are converted to string format (`String(result.reason)`) to match the required output structure.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `6-final-user.js`

## Code (`6-final-user.js`)
```javascript
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    }))
  );
}


---


# 7. Load balancer

## Description
Write a function `loadBalancer(chinaDownload, USDownload)` that accepts two promises and returns the value of whichever promise resolves first using `Promise.race`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `7-load_balancer.js`

## Code (`7-load_balancer.js`)
```javascript
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}


---


# 8. Throw an error

## Description
Write a function `divideFunction(numerator, denominator)` that divides two numbers. If `denominator` is equal to `0`, it throws a new `Error` with the message `cannot divide by 0`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `8-try.js`

## Code (`8-try.js`)
```javascript
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}


---


# 9. Throw error / try catch

## Description
Write a function `guardrail(mathFunction)` that accepts a function `mathFunction`. It executes `mathFunction` and appends its return value to an array named `queue`. If an error occurs, the string representation of the error is appended to `queue`. In all cases, the string `'Guardrail was processed'` is appended to `queue`.

## Requirements
- **Repo:** `holbertonschool-web_back_end`
- **Directory:** `ES6_promise`
- **File:** `9-try.js`

## Code (`9-try.js`)
```javascript
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
