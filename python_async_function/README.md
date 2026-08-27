# Python - Async Function

This project introduces asynchronous programming concepts in Python 3.8+ using the `asyncio` module. It covers `async` and `await` syntax, executing coroutines concurrently, creating tasks, and using the `random` module within asynchronous functions.

## Learning Objectives

By the end of this project, you should be able to explain:
- `async` and `await` syntax.
- How to execute an async program with `asyncio`.
- How to run concurrent coroutines.
- How to create `asyncio` tasks.
- How to use the `random` module in async functions.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`.
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.8).
- All files must end with a new line.
- The first line of all files must be exactly `#!/usr/bin/env python3`.
- Code strictly follows the `pycodestyle` style guidelines (version 2.5.x).
- All files must be executable (`chmod +x <file>`).
- All functions and coroutines must be type-annotated.
- All modules and functions must have valid, descriptive documentation (`__doc__`).

## Tasks

### 0. The basics of async

Write an asynchronous coroutine `wait_random` that takes an integer argument `max_delay` (defaulting to 10), waits for a random delay between 0 and `max_delay` seconds (float value), and returns the delay time.

- **File:** `0-basic_async_syntax.py`
- **Execution:** `./0-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))

---

### 1. Let's execute multiple coroutines at the same time with async

Import `wait_random` from `0-basic_async_syntax.py` and write an async routine called `wait_n` that takes in 2 `int` arguments: `n` and `max_delay`. You will spawn `wait_random` `n` times with the specified `max_delay`.

`wait_n` should return the list of all the delays (float values) in ascending order without using `sort()` because of concurrency.

- **File:** `1-concurrent_coroutines.py`
- **Execution:** `./1-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n

print(asyncio.run(wait_n(5, 5)))
print(asyncio.run(wait_n(10, 7)))
print(asyncio.run(wait_n(10, 0)))

---

### 2. Measure the runtime

From the previous file, import `wait_n` into `2-measure_runtime.py`. Create a `measure_time` function with integers `n` and `max_delay` as arguments that measures the total execution time for `wait_n(n, max_delay)`, and returns `total_time / n`. Your function should return a float.

- **File:** `2-measure_runtime.py`
- **Execution:** `./2-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

measure_time = __import__('2-measure_runtime').measure_time

n = 5
max_delay = 9

print(measure_time(n, max_delay))

---

### 3. Tasks

Import `wait_random` from `0-basic_async_syntax.py`. Write a function (do not create an async function, use the regular function syntax to do this) `task_wait_random` that takes an integer `max_delay` and returns a `asyncio.Task`.

- **File:** `3-tasks.py`
- **Execution:** `./3-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

import asyncio

task_wait_random = __import__('3-tasks').task_wait_random

async def test(max_delay: int) -> float:
    task = task_wait_random(max_delay)
    await task
    print(task.__class__)

asyncio.run(test(5))

---

### 4. Tasks

Take the code from `wait_n` and alter it into a new function `task_wait_n`. The code is nearly identical to `wait_n` except `task_wait_random` is being called.

- **File:** `4-tasks.py`
- **Execution:** `./4-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

import asyncio

task_wait_n = __import__('4-tasks').task_wait_n

n = 5
max_delay = 6
print(asyncio.run(task_wait_n(n, max_delay)))
