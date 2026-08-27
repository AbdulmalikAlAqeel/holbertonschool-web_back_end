---

### 0. Async Generator

Write a coroutine called `async_generator` that takes no arguments.  
The coroutine will loop 10 times, each time asynchronously wait 1 second, then yield a random number between 0 and 10. Use the `random` module.

- **File:** `0-async_generator.py`
- **Execution:** `./0-main.py`

#### Usage Example

```python
#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())
