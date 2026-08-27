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
