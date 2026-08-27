#!/usr/bin/env python3
"""
Module to create an asynchronous generator that yields random numbers.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Loop 10 times, asynchronously wait 1 second on each iteration,
    and yield a random float number between 0 and 10 using random module.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
